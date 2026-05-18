import { Router, Response } from 'express';
import { prisma } from '../lib/prisma';
import { authenticateToken, AuthRequest } from '../middleware/auth';
import { AI_LOG_LIMIT } from '../config';

const router = Router();

// GET /api/ai-usage
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const logs = await prisma.aiUsageLog.findMany({
      where: { userId: req.user!.id },
      orderBy: { createdAt: 'desc' },
      take: AI_LOG_LIMIT,
    });
    res.json(logs);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil log penggunaan AI' });
  }
});

export default router;
