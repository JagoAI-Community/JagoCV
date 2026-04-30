# JagoCV - AI-Powered Career Document Generator

<div align="center">
  <img width="1200" alt="JagoCV Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📝 Deskripsi Proyek
**JagoCV** adalah platform inovatif yang dirancang untuk membantu pencari kerja membuat dokumen karir profesional dengan bantuan kecerdasan buatan (AI). Aplikasi ini memungkinkan pengguna untuk menghasilkan CV yang optimal untuk sistem ATS (*Applicant Tracking System*), Resume visual yang modern, hingga Portofolio web interaktif hanya dalam hitungan menit.

Aplikasi ini dibangun dengan arsitektur **Fullstack** yang ringan menggunakan:
- **Frontend**: Vanilla TypeScript + Vite + Tailwind CSS.
- **Backend**: Node.js + Express.
- **Database**: MySQL (via XAMPP).
- **AI Engine**: GPT OSS (Open Source Software) Proxy.

---

## ✨ Fitur Utama
- **CV Optimal ATS**: Menghasilkan dokumen teks semantik yang dirancang khusus untuk lolos skrining robot HR (ATS).
- **Resume Visual Modern**: Template resume dengan hierarki visual yang indah, tipografi modern, dan layout yang menarik perhatian perekrut.
- **Portofolio Interaktif (Bento-grid)**: Membuat halaman bio online ala Linktree dengan desain bento-grid yang responsif untuk memamerkan proyek.
- **AI Chat Assistant**: Asisten AI yang siap membantu Anda menyusun kata-kata, memberikan saran karir, dan mengedit konten secara otomatis.
- **Data Persistence**: Semua dokumen dan profil tersimpan secara aman di database MySQL lokal Anda.
- **Dark & Light Mode**: Antarmuka yang elegan dan nyaman di mata untuk bekerja kapan saja.

---

## 🚀 Panduan Menjalankan Proyek (Running Local)

Ikuti langkah-langkah di bawah ini untuk menjalankan JagoCV di komputer lokal Anda.

### 1. Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal:
- [Node.js](https://nodejs.org/) (Versi terbaru disarankan).
- [XAMPP](https://www.apachefriends.org/index.html) (Untuk menjalankan MySQL).

### 2. Instalasi Dependensi
Buka terminal di direktori proyek, lalu jalankan:
```bash
npm install
```

### 3. Konfigurasi Database (XAMPP)
1. Buka **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **MySQL**.
3. Pastikan MySQL berjalan di port default (3306).

### 4. Inisialisasi Database & Data Awal
Jalankan skrip inisialisasi untuk membuat database `JagoCV` dan tabel-tabel yang diperlukan secara otomatis:
```bash
node server/init_db.js
```
*Skrip ini akan membuat tabel `users`, `templates`, dan `documents` serta mengisi beberapa data contoh.*

### 5. Konfigurasi Environment (Opsional)
Pengaturan API Key AI dan koneksi database sudah diatur secara default di file `server/.env`. Jika Anda perlu mengubahnya:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=JagoCV
AI_API_KEY=bXktc2VjcmV0LWFwaS1rZXktMTIz
AI_API_URL=https://pc-ai.kroombox.com/v1/chat/completions
```

### 6. Menjalankan Aplikasi
Jalankan perintah berikut untuk menyalakan server backend dan frontend sekaligus:
```bash
npm run dev
```
Setelah dijalankan:
- **Frontend** akan tersedia di: `http://localhost:3000`
- **Backend** akan berjalan di: `http://localhost:3001`

---

## 🛠 Struktur Folder
- `src/`: Berisi kode sumber frontend (Typescript, CSS, HTML Views).
- `server/`: Berisi kode sumber backend Express dan konfigurasi database.
- `public/`: Aset statis seperti gambar dan ikon.

---

© 2026 JagoCV Team. Build your career with intelligence.
