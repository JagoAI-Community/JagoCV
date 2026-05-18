import { Router, Response } from 'express';
import { DocumentType, DocumentStatus } from '@prisma/client';
import { prisma } from '../lib/prisma';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { generateSlug } from '../utils/slug';
import { DEFAULT_TEMPLATE_ID, DEFAULT_FONT_FAMILY, DEFAULT_THEME_COLOR } from '../config';

const router = Router();

/** Pastikan template ada di DB (auto-create jika belum) — menghindari FK constraint error */
async function ensureTemplateExists(templateId: string, type: DocumentType): Promise<void> {
  const exists = await prisma.template.findUnique({ where: { id: templateId } });
  if (!exists) {
    await prisma.template.create({ data: { id: templateId, name: templateId, type } });
  }
}

// GET /api/documents
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const docs = await prisma.document.findMany({
      where: { userId: req.user!.id, deletedAt: null },
      orderBy: { createdAt: 'desc' },
    });
    res.json(docs);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil data dokumen' });
  }
});

// GET /api/documents/:idOrSlug
router.get('/:idOrSlug', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { idOrSlug } = req.params;
  try {
    const doc = await prisma.document.findFirst({
      where: {
        OR: [{ id: idOrSlug }, { slug: idOrSlug }],
        userId: req.user!.id,
        deletedAt: null,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            headline: true,
            bio: true,
            location: true,
            phones: true,
            socialLinks: true,
          },
        },
      },
    });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });
    res.json(doc);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil detail dokumen' });
  }
});

// POST /api/documents
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { title, type, content, status, templateId, fontFamily, themeColor, isAiGenerated } = req.body;

  const validTypes = Object.values(DocumentType);
  if (!validTypes.includes(type)) {
    return res.status(400).json({
      error: `Tipe dokumen tidak valid. Harus salah satu dari: ${validTypes.join(', ')}`,
    });
  }

  try {
    if (isAiGenerated === true) {
      const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
      if (!user || user.aiCredits <= 0) {
        return res.status(403).json({ error: 'Kredit AI Anda habis. Silakan upgrade paket.' });
      }
      await prisma.user.update({
        where: { id: req.user!.id },
        data: { aiCredits: { decrement: 1 } },
      });
    }

    const finalTemplateId = templateId ?? DEFAULT_TEMPLATE_ID;
    await ensureTemplateExists(finalTemplateId, type as DocumentType);

    const newDoc = await prisma.document.create({
      data: {
        title,
        type: type as DocumentType,
        content,
        status: (status as DocumentStatus) ?? DocumentStatus.DRAF,
        templateId: finalTemplateId,
        fontFamily: fontFamily ?? DEFAULT_FONT_FAMILY,
        themeColor: themeColor ?? DEFAULT_THEME_COLOR,
        userId: req.user!.id,
        slug: generateSlug(title),
      },
    });

    if (isAiGenerated === true) {
      await prisma.aiUsageLog.create({
        data: {
          feature: `GENERATE_${type}`,
          creditsUsed: 1,
          promptSummary: `Generate dokumen: ${title}`,
          userId: req.user!.id,
          documentId: newDoc.id,
        },
      });
    }

    res.status(201).json(newDoc);
  } catch (error: any) {
    console.error('Save document error:', error);
    res.status(400).json({ error: error.message ?? 'Gagal menyimpan dokumen' });
  }
});

// PATCH /api/documents/:id
router.patch('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { title, status, templateId, fontFamily, themeColor, content } = req.body;
  try {
    const doc = await prisma.document.findFirst({
      where: { id, userId: req.user!.id, deletedAt: null },
    });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });

    if (templateId) await ensureTemplateExists(templateId, doc.type);

    const updated = await prisma.document.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(status && { status: status as DocumentStatus }),
        ...(templateId && { templateId }),
        ...(fontFamily && { fontFamily }),
        ...(themeColor && { themeColor }),
        ...(content && { content }),
      },
    });
    res.json(updated);
  } catch (error) {
    console.error('Patch document error:', error);
    res.status(400).json({ error: 'Gagal memperbarui dokumen' });
  }
});

// DELETE /api/documents/:id  (soft delete)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    const doc = await prisma.document.findFirst({
      where: { id, userId: req.user!.id, deletedAt: null },
    });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });

    await prisma.document.update({ where: { id }, data: { deletedAt: new Date() } });
    res.json({ message: 'Dokumen berhasil dihapus' });
  } catch {
    res.status(400).json({ error: 'Gagal menghapus dokumen' });
  }
});

// PATCH /api/documents/:id/restore
router.patch('/:id/restore', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user!.id } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });
    if (!doc.deletedAt) return res.status(400).json({ error: 'Dokumen tidak dalam keadaan terhapus' });

    const restored = await prisma.document.update({ where: { id }, data: { deletedAt: null } });
    res.json(restored);
  } catch {
    res.status(400).json({ error: 'Gagal memulihkan dokumen' });
  }
});

export default router;
