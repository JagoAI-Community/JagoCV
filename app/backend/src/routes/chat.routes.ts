import { Router, Response } from 'express';
import { ChatRole } from '@prisma/client';
import { prisma } from '../lib/prisma';
import { ai } from '../lib/ai';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { GEMINI_MODEL } from '../config';

const router = Router();

// GET /api/chat
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { documentId } = req.query;
  try {
    const messages = await prisma.chatMessage.findMany({
      where: {
        userId: req.user!.id,
        ...(documentId ? { documentId: documentId as string } : {}),
      },
      orderBy: { createdAt: 'asc' },
    });
    res.json(messages);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil riwayat chat' });
  }
});

// POST /api/chat  (simpan pesan manual)
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { content, role, documentId } = req.body;

  const validRoles = Object.values(ChatRole);
  if (!validRoles.includes(role)) {
    return res.status(400).json({
      error: `Role tidak valid. Harus salah satu dari: ${validRoles.join(', ')}`,
    });
  }

  try {
    const message = await prisma.chatMessage.create({
      data: {
        content,
        role: role as ChatRole,
        userId: req.user!.id,
        documentId: documentId ?? null,
      },
    });
    res.status(201).json(message);
  } catch {
    res.status(400).json({ error: 'Gagal menyimpan pesan chat' });
  }
});

// POST /api/chat/generate  (generate AI response)
router.post('/generate', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { prompt, documentId } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: prompt,
    });
    const text = response.text ?? 'Maaf, saya tidak dapat merespons saat ini.';

    // Simpan pesan user + respons AI sekaligus
    await prisma.chatMessage.create({
      data: { content: prompt, role: 'USER', userId: req.user!.id, documentId: documentId ?? null },
    });

    const aiMessage = await prisma.chatMessage.create({
      data: { content: text, role: 'ASSISTANT', userId: req.user!.id, documentId: documentId ?? null },
    });

    await prisma.aiUsageLog.create({
      data: {
        userId: req.user!.id,
        feature: 'CHAT',
        creditsUsed: 1,
        documentId: documentId ?? null,
        promptSummary: prompt.substring(0, 50),
      },
    });

    res.json(aiMessage);
  } catch (error) {
    console.error('AI Generation Error:', error);
    res.status(500).json({ error: 'Gagal menghasilkan respons AI' });
  }
});

export default router;
