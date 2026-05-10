# 🚀 JagoCV - AI Career Document Builder

JagoCV adalah platform SaaS (Software as a Service) yang dirancang untuk membantu pengguna membuat dokumen karier profesional dengan bantuan AI. Platform ini mencakup pembuatan ATS CV, Visual Resume, dan Web Portfolio mandiri.

## 🌟 Fitur Utama
- **ATS CV Builder**: Membuat CV yang ramah sistem pelacak lamaran (ATS).
- **Visual Resume**: Desain resume kreatif yang menarik secara visual.
- **Web Portfolio**: Halaman portofolio online dengan tautan unik (Slug).
- **AI Integration**: Penulisan konten otomatis dan saran karier berbasis AI (Gemini AI).
- **Sistem Kredit AI & Langganan**: Manajemen penggunaan fitur berbasis paket (Biasa, Go, Ultra).

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express.
- **ORM & Database**: Prisma ORM, PostgreSQL (Supabase).
- **AI**: Google Generative AI (Gemini).

---

## 📂 Struktur Database (Prisma)
Database JagoCV memiliki skema yang solid untuk mendukung fitur builder:
- **User**: Menyimpan informasi pengguna, level langganan, dan sisa kredit AI.
- **Document**: Menyimpan data CV/Resume/Portfolio dalam format JSON yang fleksibel, lengkap dengan pengaturan template, warna, dan slug unik.
- **Template**: Koleksi desain yang dapat digunakan oleh pengguna.
- **ChatMessage**: Riwayat obrolan dengan asisten AI per dokumen.
- **AiUsageLog**: Audit trail untuk penggunaan kredit AI.

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Persiapan
Pastikan Anda sudah menginstal Node.js di komputer Anda.

### 2. Konfigurasi Environment
Salin file `.env.example` menjadi `.env` dan isi variabel yang dibutuhkan:
- `DATABASE_URL`: Koneksi ke PostgreSQL/Supabase.
- `GEMINI_API_KEY`: API Key dari Google AI Studio.
- `JWT_SECRET`: Kode rahasia untuk keamanan token login.

### 3. Instalasi & Menjalankan (Frontend)
```bash
# Instal dependensi
npm install

# Jalankan aplikasi (Mode Dev)
npm run dev
```

### 4. Instalasi & Menjalankan (Backend)
```bash
cd app/backend

# Instal dependensi
npm install

# Sinkronisasi database
npx prisma db push

# Jalankan server
npm run dev
```

---

## 🔐 Informasi Database & Password
Untuk mendapatkan akses database atau menanyakan password terkait project ini, silakan hubungi pengembang melalui WhatsApp:

👉 **[Hubungi via WhatsApp](https://api.whatsapp.com/send?phone=6285215376975&text=Halo%20Admin%20JagoCV,%20saya%20ingin%20menanyakan%20password%20database.)**
(+62 85215376975)

---

## 📝 Lisensi
Dibuat dengan ❤️ oleh JagoCV Team.
