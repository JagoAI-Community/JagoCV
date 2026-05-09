# 🗺️ Peta Jalan Pengembangan (Roadmap) JagoCV

Berdasarkan analisis menyeluruh yang telah dilakukan, berikut adalah tahapan pengembangan (roadmap) yang direkomendasikan untuk proyek JagoCV, diurutkan berdasarkan prioritas dari yang paling mendesak hingga tahap penyelesaian akhir.

## Fase 1: Perbaikan Bug Kritis & Keamanan (Prioritas Tertinggi)
Fase ini berfokus pada menyelesaikan masalah yang dapat menyebabkan aplikasi gagal berfungsi dengan baik atau rentan terhadap serangan.

- **[ ] M-01: Integrasi Google Gemini API:**
  - Hapus mock respons di `src/features/chat.ts`.
  - Buat endpoint backend untuk mem-proxy panggilan ke Gemini API untuk menyembunyikan API key.
  - Hubungkan fungsi front-end ke endpoint backend baru ini.
- **[ ] M-02: Perbaiki Penyimpanan Resume & Portfolio:**
  - Tambahkan fungsi `api.saveDocument()` di dalam event listener `btnGenerateResume` dan `btnGeneratePortfolio` (di `src/features/router.ts`).
  - Pastikan payload data dikirim dengan benar sesuai dengan format di database.
- **[ ] M-03: Implementasi GET `/api/chat`:**
  - Buat route `GET` di `backend/src/index.ts` untuk mengambil riwayat chat berdasarkan `userId` dan `documentId` (opsional).
- **[ ] M-04: Amankan JWT Secret:**
  - Di `backend/src/index.ts`, hapus nilai fallback hardcoded `'supersecretkey'`.
  - Berikan *error* jika `process.env.JWT_SECRET` tidak ada saat server berjalan.
- **[ ] M-05: Perbaiki ID Wizard CV:**
  - Di `src/features/wizards.ts`, ubah referensi `document.getElementById('view-cv')` menjadi `document.getElementById('view-create-cv')`.
- **[ ] M-06: Perbaiki Login Google (atau Hapus Sementara):**
  - Jika belum siap implementasi OAuth penuh, hapus/sembunyikan sementara tombol "Login dengan Google".
  - Jika siap, implementasikan alur OAuth Google (misalnya dengan Firebase Auth atau Google Sign-In SDK) dan kirim token ke backend untuk divalidasi.

## Fase 2: Implementasi Fitur Inti (Prioritas Menengah-Tinggi)
Fase ini memastikan fitur-fitur yang sudah ada di UI (tetapi belum ada logikanya) dapat berfungsi.

- **[ ] Fitur Edit Profil:**
  - Buat endpoint backend `PATCH /api/users/me` untuk memperbarui data user (nama, profil image url, dsb).
  - Hubungkan tombol "Simpan" di UI ke endpoint tersebut.
- **[ ] Validasi Sesi di Frontend:**
  - Saat inisialisasi aplikasi (di `router.ts`), panggil endpoint seperti `GET /api/users/me` dengan token.
  - Jika gagal (token expired/invalid), bersihkan *localStorage* dan arahkan ke Landing/Login.
- **[ ] Sistem Notifikasi (Toast UI):**
  - Ganti semua pemanggilan `alert()` dengan komponen notifikasi UI khusus yang sesuai dengan desain (misal, toast message di pojok kanan atas).
- **[ ] Pembaruan Data Profil Pasca-Login:**
  - Di backend, pastikan response `login` mengembalikan `profileImageUrl` dan `role`.
  - Di frontend, pastikan data yang diterima disave ke *localStorage* dengan benar dan dirender oleh `populateProfilePage()`.

## Fase 3: Peningkatan Arsitektur & Perbaikan Utang Teknis (Prioritas Menengah)
Meskipun aplikasi mungkin sudah berjalan, perbaikan di bawah ini sangat krusial untuk pemeliharaan ke depan.

- **[ ] Refactor Manajemen State (Opsional namun Sangat Disarankan):**
  - Beralih dari manipulasi DOM manual di `router.ts` ke framework manajemen state React yang tepat (seperti React Router untuk rute dan Zustand/Context untuk state global).
  - Pindahkan logika "view" (seperti `hideAllViews`, `showView`) ke dalam komponen React menggunakan pola rendering kondisional.
- **[ ] Refactor Backend (Modularisasi):**
  - Pisahkan `index.ts` yang monolitik menjadi router yang terpisah:
    - `routes/auth.ts`
    - `routes/documents.ts`
    - `routes/chat.ts`
    - `routes/users.ts`
- **[ ] Pembersihan Root Direktori:**
  - Pindahkan semua file skrip (`*.cjs`, `*.js`) yang bukan bagian dari aplikasi ke dalam folder `scripts/`.
- **[ ] Resolusi Duplikasi `vite`:**
  - Periksa `package.json` di root, pindahkan `vite` dari `dependencies` ke `devDependencies` dan hapus salah satunya.

## Fase 4: Persiapan Rilis & Monetisasi (Prioritas Rendah - Masa Depan)
Fase ini dilakukan jika semua fitur fungsional telah stabil.

- **[ ] Rate Limiting di API:**
  - Instal dan konfigurasi `express-rate-limit` pada rute otentikasi (login, register) untuk mencegah serangan brute-force.
- **[ ] Implementasi Gerbang Pembayaran (Payment Gateway):**
  - Hubungkan halaman `Pricing` dengan layanan pembayaran (misal: Midtrans, Xendit, atau Stripe) untuk menangani *upgrade* ke paket "Go" atau "Ultra".
- **[ ] Penyelesaian Halaman Settings & Help:**
  - Tambahkan fitur nyata ke halaman Settings (misal ubah password, kelola notifikasi).
  - Isi konten yang lebih dinamis untuk halaman Help.
- **[ ] Dokumentasi Proyek:**
  - Lengkapi file `README.md` di folder utama dan folder `backend` dengan panduan *setup* lokal yang mendetail.
