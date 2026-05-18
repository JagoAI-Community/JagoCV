import { Router, Response } from 'express';
import { prisma } from '../lib/prisma';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /api/experience
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const experiences = await prisma.experience.findMany({
      where: { userId: req.user!.id },
      orderBy: { startDate: 'desc' },
    });
    res.json(experiences);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil data pengalaman' });
  }
});

// POST /api/experience
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { company, position, location, startDate, endDate, description, isCurrent } = req.body;
  try {
    const experience = await prisma.experience.create({
      data: {
        company,
        position,
        location,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
        isCurrent: isCurrent ?? false,
        userId: req.user!.id,
      },
    });
    res.status(201).json(experience);
  } catch {
    res.status(400).json({ error: 'Gagal menambah pengalaman' });
  }
});

// PUT /api/experience/:id
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { company, position, location, startDate, endDate, description, isCurrent } = req.body;
  try {
    const experience = await prisma.experience.update({
      where: { id, userId: req.user!.id },
      data: {
        company,
        position,
        location,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : isCurrent ? null : undefined,
        description,
        isCurrent,
      },
    });
    res.json(experience);
  } catch {
    res.status(400).json({ error: 'Gagal memperbarui pengalaman' });
  }
});

// DELETE /api/experience/:id
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.experience.delete({ where: { id, userId: req.user!.id } });
    res.json({ message: 'Pengalaman berhasil dihapus' });
  } catch {
    res.status(400).json({ error: 'Gagal menghapus pengalaman' });
  }
});

export default router;
