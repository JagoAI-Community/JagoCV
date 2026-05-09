import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient, DocumentType, DocumentStatus, ChatRole } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Wajib ada JWT_SECRET — tidak boleh hardcoded
if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET tidak ditemukan di environment variables. Server dihentikan.');
  process.exit(1);
}
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// ===========================================================
// MIDDLEWARE AUTENTIKASI
// ===========================================================
const authenticateToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Akses ditolak, token hilang' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Token tidak valid atau sudah kadaluarsa' });
    req.user = user;
    next();
  });
};

// ===========================================================
// AUTH ROUTES
// ===========================================================

// 1. Registrasi User
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: 'Nama, email, dan password wajib diisi' });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password minimal 8 karakter' });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });
    res.status(201).json({ message: 'User berhasil didaftarkan', userId: user.id });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Email sudah terdaftar' });
    }
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

// 2. Login User
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email dan password wajib diisi' });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email, deletedAt: null }
    });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Email atau password salah' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImageUrl: user.profileImageUrl,
        subscriptionTier: user.subscriptionTier,
        aiCredits: user.aiCredits,
        portfolioViews: user.portfolioViews,
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

// 3. Verifikasi Sesi (digunakan frontend saat refresh halaman)
app.get('/api/auth/me', authenticateToken, async (req: any, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id, deletedAt: null },
      select: {
        id: true, name: true, email: true, role: true,
        profileImageUrl: true, subscriptionTier: true,
        aiCredits: true, portfolioViews: true
      }
    });
    if (!user) return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Gagal memverifikasi sesi' });
  }
});

// ===========================================================
// USER ROUTES
// ===========================================================

// 4. Update Profil User
app.patch('/api/users/me', authenticateToken, async (req: any, res: Response) => {
  const { name, profileImageUrl } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(profileImageUrl !== undefined && { profileImageUrl }),
      },
      select: {
        id: true, name: true, email: true, role: true,
        profileImageUrl: true, subscriptionTier: true,
        aiCredits: true, portfolioViews: true
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memperbarui profil' });
  }
});

// ===========================================================
// DOCUMENT ROUTES
// ===========================================================

// 5. Ambil Semua Dokumen Milik User (hanya yang belum di-soft-delete)
app.get('/api/documents', authenticateToken, async (req: any, res: Response) => {
  try {
    const docs = await prisma.document.findMany({
      where: { userId: req.user.id, deletedAt: null },
      orderBy: { createdAt: 'desc' }
    });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dokumen' });
  }
});

// 6. Simpan Dokumen Baru (CV/Resume/Portfolio)
app.post('/api/documents', authenticateToken, async (req: any, res: Response) => {
  const { title, type, content, status, templateId, fontFamily, themeColor } = req.body;

  // Validasi tipe dokumen menggunakan Enum
  const validTypes = Object.values(DocumentType);
  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: `Tipe dokumen tidak valid. Harus salah satu dari: ${validTypes.join(', ')}` });
  }

  try {
    // Kurangi kredit AI user
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user || user.aiCredits <= 0) {
      return res.status(403).json({ error: 'Kredit AI Anda habis. Silakan upgrade paket.' });
    }

    const newDoc = await prisma.document.create({
      data: {
        title,
        type: type as DocumentType,
        content,
        status: (status as DocumentStatus) || DocumentStatus.DRAF,
        templateId: templateId || 'standard',
        fontFamily: fontFamily || 'Inter',
        themeColor: themeColor || 'blue',
        userId: req.user.id
      }
    });

    // Catat penggunaan AI
    await prisma.aiUsageLog.create({
      data: {
        feature: `GENERATE_${type}`,
        creditsUsed: 1,
        promptSummary: `Generate dokumen: ${title}`,
        userId: req.user.id,
        documentId: newDoc.id
      }
    });

    // Kurangi kredit user
    await prisma.user.update({
      where: { id: req.user.id },
      data: { aiCredits: { decrement: 1 } }
    });

    res.status(201).json(newDoc);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menyimpan dokumen' });
  }
});

// 7. Update Dokumen
app.patch('/api/documents/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, status, templateId, fontFamily, themeColor, content } = req.body;
  try {
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user.id, deletedAt: null } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });

    const updated = await prisma.document.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(status && { status: status as DocumentStatus }),
        ...(templateId && { templateId }),
        ...(fontFamily && { fontFamily }),
        ...(themeColor && { themeColor }),
        ...(content && { content }),
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memperbarui dokumen' });
  }
});

// 8. Soft Delete Dokumen
app.delete('/api/documents/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user.id, deletedAt: null } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });

    // Soft Delete: isi deletedAt, bukan hapus dari database
    await prisma.document.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
    res.json({ message: 'Dokumen berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ error: 'Gagal menghapus dokumen' });
  }
});

// 9. Pulihkan Dokumen yang Di-soft-delete
app.patch('/api/documents/:id/restore', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user.id } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });
    if (!doc.deletedAt) return res.status(400).json({ error: 'Dokumen tidak dalam keadaan terhapus' });

    const restored = await prisma.document.update({
      where: { id },
      data: { deletedAt: null }
    });
    res.json(restored);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memulihkan dokumen' });
  }
});

// ===========================================================
// CHAT ROUTES
// ===========================================================

// 10. Ambil Riwayat Chat (per user, opsional per dokumen)
app.get('/api/chat', authenticateToken, async (req: any, res: Response) => {
  const { documentId } = req.query;
  try {
    const messages = await prisma.chatMessage.findMany({
      where: {
        userId: req.user.id,
        ...(documentId ? { documentId: documentId as string } : {})
      },
      orderBy: { createdAt: 'asc' }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil riwayat chat' });
  }
});

// 11. Simpan Pesan Chat AI
app.post('/api/chat', authenticateToken, async (req: any, res: Response) => {
  const { content, role, documentId } = req.body;

  const validRoles = Object.values(ChatRole);
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: `Role tidak valid. Harus salah satu dari: ${validRoles.join(', ')}` });
  }

  try {
    const message = await prisma.chatMessage.create({
      data: {
        content,
        role: role as ChatRole,
        userId: req.user.id,
        documentId: documentId || null
      }
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menyimpan pesan chat' });
  }
});

// ===========================================================
// AI USAGE LOG ROUTES
// ===========================================================

// 12. Ambil log penggunaan AI milik user
app.get('/api/ai-usage', authenticateToken, async (req: any, res: Response) => {
  try {
    const logs = await prisma.aiUsageLog.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 50 // Batasi 50 log terbaru
    });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil log penggunaan AI' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ JagoCV Backend aktif di http://localhost:${PORT}`);
});
