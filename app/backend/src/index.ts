import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient, DocumentType, DocumentStatus, ChatRole } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'stdout', level: 'error' },
    { emit: 'stdout', level: 'warn' },
  ],
});

// Logging Query Database
(prisma as any).$on('query', (e: any) => {
  console.log(`\x1b[36m[DB]\x1b[0m \x1b[2m${e.query}\x1b[0m \x1b[33m${e.duration}ms\x1b[0m`);
});

const PORT = process.env.PORT || 5000;

// Wajib ada JWT_SECRET — tidak boleh hardcoded
if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET tidak ditemukan di environment variables. Server dihentikan.');
  process.exit(1);
}
const JWT_SECRET = process.env.JWT_SECRET;
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Middleware Logging HTTP Premium
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const method = req.method;
    const url = req.originalUrl;
    const status = res.statusCode;
    
    const colors = {
      method: {
        GET: '\x1b[34m',    // Blue
        POST: '\x1b[32m',   // Green
        PUT: '\x1b[33m',    // Yellow
        PATCH: '\x1b[33m',  // Yellow
        DELETE: '\x1b[31m', // Red
      }[method] || '\x1b[0m',
      status: status >= 500 ? '\x1b[31m' : status >= 400 ? '\x1b[33m' : '\x1b[32m',
      reset: '\x1b[0m',
      dim: '\x1b[2m'
    };

    console.log(
      `${colors.method}${method.padEnd(7)}${colors.reset} ` +
      `${url.padEnd(30)} ` +
      `${colors.status}${status}${colors.reset} ` +
      `${colors.dim}${duration}ms${colors.reset}`
    );
  });
  next();
});

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
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name },
      include: {
        socialLinks: true,
        phones: true,
        experience: true,
        education: true
      }
    });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User berhasil didaftarkan',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        headline: user.headline,
        bio: user.bio,
        profileImageUrl: user.profileImageUrl,
        location: user.location,
        subscriptionTier: user.subscriptionTier,
        aiCredits: user.aiCredits,
        portfolioViews: user.portfolioViews,
        socialLinks: user.socialLinks,
        phones: user.phones,
        experience: user.experience,
        education: user.education
      }
    });
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
  try {
    const user = await prisma.user.findUnique({ 
      where: { email },
      include: {
        socialLinks: true,
        phones: true,
        experience: true,
        education: true
      }
    });
    if (!user) return res.status(400).json({ error: 'Email atau password salah' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Email atau password salah' });

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        headline: user.headline,
        bio: user.bio,
        profileImageUrl: user.profileImageUrl,
        location: user.location,
        subscriptionTier: user.subscriptionTier,
        aiCredits: user.aiCredits,
        portfolioViews: user.portfolioViews,
        socialLinks: user.socialLinks,
        phones: user.phones,
        experience: user.experience,
        education: user.education
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
      where: { id: req.user.id },
      include: {
        socialLinks: true,
        phones: true,
        experience: true,
        education: true
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
app.put('/api/auth/profile', authenticateToken, async (req: any, res: Response) => {
  const { name, headline, bio, profileImageUrl, location, socialLinks, phones } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        name,
        headline,
        bio,
        profileImageUrl,
        location,
        socialLinks: {
          deleteMany: {},
          create: socialLinks?.map((s: any) => ({ platform: s.platform, url: s.url })) || []
        },
        phones: {
          deleteMany: {},
          create: phones?.map((p: any) => ({ number: p.number, label: p.label || 'Utama' })) || []
        }
      },
      include: {
        socialLinks: true,
        phones: true,
        experience: true,
        education: true
      }
    });
    res.json(updated);
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(400).json({ error: 'Gagal memperbarui profil' });
  }
});

// ===========================================================
// HELPER FUNCTIONS
// ===========================================================
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-') + '-' + Math.random().toString(36).substring(2, 7);
};

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

// 5.1 Ambil Satu Dokumen Spesifik (Bisa via ID atau SLUG)
app.get('/api/documents/:idOrSlug', authenticateToken, async (req: any, res: Response) => {
  const { idOrSlug } = req.params;
  try {
    const doc = await prisma.document.findFirst({
      where: {
        OR: [
          { id: idOrSlug },
          { slug: idOrSlug }
        ],
        userId: req.user.id,
        deletedAt: null
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
            socialLinks: true
          }
        }
      }
    });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });
    res.json(doc);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil detail dokumen' });
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
    // Kurangi kredit AI user HANYA jika AI digunakan (opsional, tergantung logic bisnis)
    // Untuk saat ini, kita anggap simpan manual tidak memotong kredit kecuali dari AI mode
    const isAiGenerated = req.body.isAiGenerated === true;
    
    if (isAiGenerated) {
      const user = await prisma.user.findUnique({ where: { id: req.user.id } });
      if (!user || user.aiCredits <= 0) {
        return res.status(403).json({ error: 'Kredit AI Anda habis. Silakan upgrade paket.' });
      }

      // Kurangi kredit user
      await prisma.user.update({
        where: { id: req.user.id },
        data: { aiCredits: { decrement: 1 } }
      });
    }

    const finalTemplateId = templateId || 'standard';
    // Pastikan templateId ada di database untuk menghindari Foreign Key Constraint error
    const templateExists = await prisma.template.findUnique({ where: { id: finalTemplateId } });
    if (!templateExists) {
      await prisma.template.create({
        data: {
          id: finalTemplateId,
          name: finalTemplateId,
          type: type as DocumentType,
        }
      });
    }

    const newDoc = await prisma.document.create({
      data: {
        title,
        type: type as DocumentType,
        content,
        status: (status as DocumentStatus) || DocumentStatus.DRAF,
        templateId: finalTemplateId,
        fontFamily: fontFamily || 'Inter',
        themeColor: themeColor || 'blue',
        userId: req.user.id,
        slug: generateSlug(title)
      }
    });

    if (isAiGenerated) {
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
    }

    res.status(201).json(newDoc);
  } catch (error: any) {
    console.error("Save document error:", error);
    res.status(400).json({ error: error.message || 'Gagal menyimpan dokumen' });
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

// 11.5 Generate AI Chat Response
app.post('/api/chat/generate', authenticateToken, async (req: any, res: Response) => {
  const { prompt, documentId } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: prompt,
    });
    
    const text = response.text || "Maaf, saya tidak dapat merespons saat ini.";

    // Simpan pesan user
    await prisma.chatMessage.create({
      data: {
        content: prompt,
        role: 'USER',
        userId: req.user.id,
        documentId: documentId || null
      }
    });

    // Simpan respons AI
    const aiMessage = await prisma.chatMessage.create({
      data: {
        content: text,
        role: 'ASSISTANT',
        userId: req.user.id,
        documentId: documentId || null
      }
    });

    // Catat log penggunaan AI
    await prisma.aiUsageLog.create({
      data: {
        userId: req.user.id,
        feature: 'CHAT',
        creditsUsed: 1,
        documentId: documentId || null,
        promptSummary: prompt.substring(0, 50)
      }
    });

    res.json(aiMessage);
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    res.status(500).json({ error: 'Gagal menghasilkan respons AI' });
  }
});

// ===========================================================
// EXPERIENCE ROUTES
// ===========================================================

app.get('/api/experience', authenticateToken, async (req: any, res: Response) => {
  try {
    const experiences = await prisma.experience.findMany({
      where: { userId: req.user.id },
      orderBy: { startDate: 'desc' }
    });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pengalaman' });
  }
});

app.post('/api/experience', authenticateToken, async (req: any, res: Response) => {
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
        isCurrent: isCurrent || false,
        userId: req.user.id
      }
    });
    res.status(201).json(experience);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menambah pengalaman' });
  }
});

app.put('/api/experience/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  const { company, position, location, startDate, endDate, description, isCurrent } = req.body;
  try {
    const experience = await prisma.experience.update({
      where: { id, userId: req.user.id },
      data: {
        company,
        position,
        location,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : (isCurrent ? null : undefined),
        description,
        isCurrent
      }
    });
    res.json(experience);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memperbarui pengalaman' });
  }
});

app.delete('/api/experience/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.experience.delete({ where: { id, userId: req.user.id } });
    res.json({ message: 'Pengalaman berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ error: 'Gagal menghapus pengalaman' });
  }
});

// ===========================================================
// EDUCATION ROUTES
// ===========================================================

app.get('/api/education', authenticateToken, async (req: any, res: Response) => {
  try {
    const education = await prisma.education.findMany({
      where: { userId: req.user.id },
      orderBy: { startDate: 'desc' }
    });
    res.json(education);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

app.post('/api/education', authenticateToken, async (req: any, res: Response) => {
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
        userId: req.user.id
      }
    });
    res.status(201).json(education);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menambah pendidikan' });
  }
});

app.put('/api/education/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  const { institution, degree, fieldOfStudy, startDate, endDate, description } = req.body;
  try {
    const education = await prisma.education.update({
      where: { id, userId: req.user.id },
      data: {
        institution,
        degree,
        fieldOfStudy,
        startDate: startDate ? new Date(startDate) : undefined,
        endDate: endDate ? new Date(endDate) : undefined,
        description
      }
    });
    res.json(education);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memperbarui pendidikan' });
  }
});

app.delete('/api/education/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.education.delete({ where: { id, userId: req.user.id } });
    res.json({ message: 'Pendidikan berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ error: 'Gagal menghapus pendidikan' });
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
