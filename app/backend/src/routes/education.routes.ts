import { Router, Response } from 'express';
import { prisma } from '../lib/prisma';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /api/education
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  try {
    const education = await prisma.education.findMany({
      where: { userId: req.user!.id },
      orderBy: { startDate: 'desc' },
    });
    res.json(education);
  } catch {
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

// POST /api/education
router.post('/', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { institution, degree, fieldOfStudy, startDate, endDate, description } = req.body;
  try {
    const education = await prisma.education.create({
      data: {
        institution,
        degree,
        fieldOfStudy,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
        userId: req.user!.id,
      },
    });
    res.status(201).json(education);
  } catch {
    res.status(400).json({ error: 'Gagal menambah pendidikan' });
  }
});

// PUT /api/education/:id
router.put('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { institution, degree, fieldOfStudy, startDate, endDate, description } = req.body;
  try {
    const education = await prisma.education.update({
      where: { id, userId: req.user!.id },
      data: {
        institution,
        degree,
        fieldOfStudy,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        description,
      },
    });
    res.json(education);
  } catch {
    res.status(400).json({ error: 'Gagal memperbarui pendidikan' });
  }
});

// DELETE /api/education/:id
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.education.delete({ where: { id, userId: req.user!.id } });
    res.json({ message: 'Pendidikan berhasil dihapus' });
  } catch {
    res.status(400).json({ error: 'Gagal menghapus pendidikan' });
  }
});

export default router;
