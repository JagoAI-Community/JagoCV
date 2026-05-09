# 📊 Laporan Analisis Proyek: JagoCV

> **Tanggal Analisis:** 6 Mei 2026  
> **Versi Proyek:** 0.0.0 (pre-release)  
> **Commit Terakhir:** `b5792cd` — *"logic backend v2"*  
> **Status Keseluruhan:** 🟡 **In-Progress / Beta Awal** — Fitur inti sudah terbentuk, namun banyak area yang masih stub/mock dan belum siap produksi.

---

## 🗂️ 1. Ikhtisar Proyek

**JagoCV** adalah platform SaaS berbasis web untuk pembuatan dokumen karier berbantuan AI. Produk ini menawarkan tiga layanan utama:

| Produk | Deskripsi |
|--------|-----------|
| **ATS CV** | CV terstruktur yang dioptimalkan untuk sistem pelacak lamaran (ATS) |
| **Visual Resume** | Resume bergaya visual/kreatif dengan desain premium |
| **Web Portfolio** | Halaman portofolio berbasis web (bento/linktree style) |

### Stack Teknologi

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | React 19, TypeScript, Vite 6, TailwindCSS v4 |
| **Backend** | Express.js (Node.js), TypeScript |
| **Database** | PostgreSQL via Prisma ORM |
| **AI** | Google Gemini (`@google/genai`) |
| **Autentikasi** | JWT (jsonwebtoken) + bcrypt |
| **Animasi** | Motion (Framer Motion v12) |

---

## 🏗️ 2. Arsitektur Proyek

### Struktur Direktori

```
JagoCV/
├── src/                          # Frontend (React + TS)
│   ├── App.tsx                   # Root component (mounting point semua view)
│   ├── main.ts / main.tsx        # Entry point
│   ├── components/views/         # 16 view components (TSX)
│   ├── features/                 # Logika imperatif (vanilla JS pattern)
│   │   ├── router.ts             # DOM-based routing
│   │   ├── dashboard.ts          # Dashboard & profile logic
│   │   ├── chat.ts               # AI chat UI logic
│   │   ├── popovers.ts           # AI edit popover
│   │   ├── wizards.ts            # Step wizard logic
│   │   └── theme.ts              # Dark/light mode
│   └── lib/
│       ├── api.ts                # HTTP client ke backend
│       └── types.ts              # TypeScript interfaces
├── backend/                      # Express.js API
│   ├── src/index.ts              # Server tunggal (semua route)
│   └── prisma/schema.prisma      # 3 model: User, Document, ChatMessage
├── public/                       # Aset statis
└── [20+ script .cjs/.js]         # Script utilitas sisa pengembangan
```

### Pola Arsitektur

Proyek ini menggunakan **pola hybrid yang tidak konvensional**:
- React digunakan sebagai **template engine statis** (render HTML), bukan sebagai framework reaktif
- Interaksi UI dikelola oleh **vanilla JavaScript imperatif** di `src/features/`
- **Tidak ada state management** (Redux/Zustand/Context API)
- Routing dilakukan dengan **manipulasi DOM langsung** (`classList.add('hidden')`)

---

## 🔴 3. Inventaris Masalah

### 3.1 Masalah Kritis (Harus Diperbaiki)

#### 🔴 M-01: AI Chat Sepenuhnya Mock
**Lokasi:** `src/features/chat.ts` baris 54  
**Masalah:** Respons AI adalah string hardcoded, tidak terintegrasi dengan Gemini API sama sekali.
```typescript
// HARDCODED — bukan respons AI asli
const responseText = "Proses Selesai! Saya telah memperbarui seluruh dokumen...";
```
**Dampak:** Fitur inti (AI generation) tidak berfungsi secara nyata.

---

#### 🔴 M-02: Generate Resume & Portfolio Tidak Menyimpan Data
**Lokasi:** `src/features/router.ts` baris 403–451  
**Masalah:** Tombol "Generate Visual Resume" dan "Generate Portfolio" **hanya berpindah view** tanpa memanggil `api.saveDocument()`. Berbeda dengan CV yang sudah memanggil API.
```typescript
// Resume & Portfolio — TIDAK ada api.saveDocument()
if (btnGenerateResume) {
  btnGenerateResume.addEventListener("click", () => {
    setTimeout(() => { hideAllViews(); showView(viewResumeResult); }, 1200);
    // Tidak ada pemanggilan API!
  });
}
```

---

#### 🔴 M-03: Endpoint Chat GET Tidak Diimplementasi
**Lokasi:** `backend/src/index.ts` + `src/lib/api.ts` baris 50  
**Masalah:** `api.getChatHistory()` didefinisikan di klien tetapi tidak ada route `GET /api/chat` di backend. Pemanggilan ini akan selalu gagal dengan 404.

---

#### 🔴 M-04: JWT Secret Hardcoded (Keamanan)
**Lokasi:** `backend/src/index.ts` baris 13  
```typescript
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
```
**Dampak:** Jika `JWT_SECRET` tidak di-set di environment, seluruh sistem autentikasi menggunakan kunci yang sangat lemah dan mudah ditebak.

---

#### 🔴 M-05: Wizard CV Scroll ke ID yang Salah
**Lokasi:** `src/features/wizards.ts` baris 134–137  
```typescript
const viewCv = document.getElementById('view-cv'); // ID INI TIDAK ADA
```
**Masalah:** ID yang benar adalah `view-create-cv`. Scroll ke step wizard CV tidak akan berfungsi.

---

#### 🔴 M-06: Login Google Bypass Autentikasi
**Lokasi:** `src/features/router.ts` baris 202  
```typescript
if (btnLoginGoogle) btnLoginGoogle.addEventListener("click", launchDashboardApp);
```
**Masalah:** Tombol "Login dengan Google" langsung masuk dashboard tanpa autentikasi apapun — tidak ada token yang disimpan, tidak ada validasi. Ini adalah **celah keamanan besar**.

---

### 3.2 Masalah Sedang (Perlu Diperbaiki)

#### 🟠 M-07: Duplikasi Event Listener pada AI Buttons
**Lokasi:** `src/features/router.ts` baris 390–451 dan 570–601  
**Masalah:** Ada dua handler untuk `btn-generate-cv-ai`, `btn-generate-resume-ai`, `btn-generate-portfolio-ai` — satu via `getElementById` dan satu via event delegation di `document.body`. Ini bisa menyebabkan aksi dijalankan dua kali.

---

#### 🟠 M-08: Tidak Ada Validasi Token Kadaluarsa di Frontend
**Lokasi:** `src/features/router.ts` baris 604–607  
**Masalah:** Saat refresh halaman, hanya dicek apakah `token` **ada** di localStorage, bukan apakah token masih **valid**. Token yang sudah kadaluarsa (7 hari) akan tetap memasukkan user ke dashboard, dan semua API call akan gagal dengan 403.

---

#### 🟠 M-09: Tidak Ada Error Handling Saat Save Profile
**Lokasi:** `src/features/router.ts` baris 276–281  
**Masalah:** `btnSaveProfile` hanya memanggil `goBackToProfile()` tanpa logika penyimpanan data. Edit profil tidak benar-benar tersimpan.
```typescript
if (btnSaveProfile) {
  btnSaveProfile.addEventListener("click", () => {
    // Typically save logic here, then go back
    goBackToProfile(); // Hanya navigasi, tidak ada API call!
  });
}
```

---

#### 🟠 M-10: Pesan Error Menggunakan `alert()` Native
**Lokasi:** Tersebar di `router.ts`  
**Masalah:** Semua notifikasi error/sukses menggunakan `alert()` dan `alert()` browser yang blocky, tidak konsisten dengan desain UI yang modern.

---

#### 🟠 M-11: `src/main.tsx` vs `src/main.ts` — Duplikasi Entry Point
**Lokasi:** `src/main.tsx` (370 bytes) dan `src/main.ts` (447 bytes)  
**Masalah:** Ada dua file entry point. `main.tsx` adalah yang digunakan React (`index.html` merujuk ke sana), sedangkan `main.ts` berisi `initApp()`. `App.tsx` mengimpor `main.ts` via dynamic import. Pola ini tidak standar dan dapat menyebabkan kebingungan.

---

#### 🟠 M-12: `profileImageUrl` Tidak Diperbarui Saat Login
**Lokasi:** `backend/src/index.ts` baris 61–70  
**Masalah:** Response login tidak menyertakan `profileImageUrl` dan `role`, namun `dashboard.ts` mengambil data ini dari localStorage. Data profil selalu kosong setelah fresh login.

---

### 3.3 Masalah Ringan (Teknis Debt)

#### 🟡 M-13: 20+ Script Utilitas di Root Direktori
File seperti `fix_auth_layout.cjs`, `make_responsive.cjs`, `update_auth_views.cjs`, dll. adalah sisa skrip satu kali pakai dari proses pengembangan. Ini **bukan bagian dari aplikasi** dan mengotori root direktori.

#### 🟡 M-14: Backend Monolitik (Single File)
Seluruh logika backend (auth, documents, chat) dalam satu file `src/index.ts` (177 baris). Akan sulit dikelola saat fitur bertambah.

#### 🟡 M-15: Tidak Ada Rate Limiting di API
Backend tidak memiliki rate limiting, membuat endpoint auth rentan terhadap brute-force attack.

#### 🟡 M-16: `vite` Terdaftar di `dependencies` dan `devDependencies` Sekaligus
**Lokasi:** `package.json` baris 24 dan 34  
Duplikasi ini tidak merusak build, tapi merupakan kesalahan konfigurasi.

#### 🟡 M-17: `Laporan/` Directory Kosong
Direktori `Laporan/` ada tapi kosong — kemungkinan placeholder untuk dokumentasi yang belum dibuat.

#### 🟡 M-18: Tidak Ada `README` Backend yang Akurat
`backend/README.md` ada tetapi isinya adalah template generik yang tidak menjelaskan cara menjalankan backend.

---

## 🟢 4. Hal yang Sudah Baik

| Aspek | Detail |
|-------|--------|
| **Desain UI** | Kualitas visual sangat tinggi — dark mode, glassmorphism, animasi micro-interaction premium |
| **Skema Database** | Schema Prisma sudah well-designed: relasi User→Document→ChatMessage, field desain tersimpan per dokumen |
| **Keamanan Auth** | Bcrypt untuk password hashing sudah diimplementasi dengan benar |
| **API Client** | `src/lib/api.ts` bersih dan terpusat, mudah dikembangkan |
| **TypeScript** | Types sudah didefinisikan di `src/lib/types.ts` |
| **Dark/Light Mode** | Implementasi tema sudah berfungsi dengan baik |
| **Migration History** | 3 tahap migrasi database sudah terdokumentasi dengan benar di Prisma |
| **Wizard Multi-step** | Wizard CV (5 langkah), Resume (5 langkah), Portfolio (6 langkah) sudah terstruktur |
| **CORS** | Backend mengizinkan origin dev yang relevan |

---

## 🔵 5. Saran Perbaikan (Prioritas)

### Prioritas Tinggi 🔴

1. **Integrasikan Gemini API ke chat** — Ganti respons hardcoded dengan real API call ke `@google/genai` yang sudah terinstall.
2. **Perbaiki Login Google** — Implementasi OAuth real atau hapus tombol itu sampai siap, karena sekarang bypass auth sepenuhnya.
3. **Simpan data Resume & Portfolio** — Tambahkan `api.saveDocument()` di handler `btnGenerateResume` dan `btnGeneratePortfolio`.
4. **Perbaiki ID wizard CV** — Ganti `'view-cv'` menjadi `'view-create-cv'` di `wizards.ts`.
5. **Paksa JWT_SECRET dari environment** — Hapus fallback `'supersecretkey'` dan throw error jika tidak diset.

### Prioritas Sedang 🟠

6. **Implementasi `GET /api/chat`** — Tambahkan endpoint untuk mengambil riwayat chat.
7. **Implementasi Save Profile** — Tambahkan `PATCH /api/users/me` dan hubungkan ke `btnSaveProfile`.
8. **Validasi token di frontend** — Saat startup, verifikasi token via API sebelum masuk ke dashboard.
9. **Ganti `alert()` dengan toast/notification UI** — Buat komponen notifikasi yang konsisten.
10. **Sertakan `profileImageUrl` & `role` di response login**.

### Prioritas Rendah 🟡

11. **Bersihkan script utilitas** — Pindahkan atau hapus semua file `*.cjs` dan `*.js` di root ke folder `/scripts/` atau `.gitignore`.
12. **Refactor backend** — Pisah routes ke file terpisah (`routes/auth.ts`, `routes/documents.ts`, dll.).
13. **Tambah rate limiting** — Gunakan `express-rate-limit` untuk endpoint auth.
14. **Hapus duplikasi `vite` di `package.json`**.
15. **Isi `Laporan/` dan README backend** dengan dokumentasi yang akurat.

---

## 📈 6. Status & Peta Jalan

### Status Komponen

| Komponen | Status | Keterangan |
|----------|--------|------------|
| Landing Page | ✅ Selesai | Desain premium, sudah lengkap |
| Auth (Login/Register) | ✅ Fungsional | Login email berfungsi, Google bypass |
| Dashboard | ✅ Fungsional | Load dokumen dari API sudah bekerja |
| Create ATS CV | 🟡 Sebagian | Form berfungsi, simpan ke DB berjalan |
| Design Visual Resume | 🔴 Stub | Form ada, tidak disimpan ke DB |
| Build Portfolio | 🔴 Stub | Form ada, tidak disimpan ke DB |
| AI Chat (CV) | 🔴 Mock | Respons hardcoded, tidak pakai Gemini |
| AI Chat (Resume) | 🔴 Mock | Respons hardcoded |
| AI Chat (Portfolio) | 🔴 Mock | Respons hardcoded |
| Edit Profile | 🔴 Stub | Form ada, tidak ada logika simpan |
| Pricing Page | ✅ UI Selesai | Hanya tampilan, belum ada payment |
| Settings | 🟡 UI Selesai | Belum ada logika |
| Help | 🟡 UI Selesai | Konten statis |
| Backend API | 🟡 Sebagian | Auth & Documents OK, Chat GET hilang |

### Tahapan yang Disarankan

```
Phase 1 (Bug Critical)    → Perbaiki M-01 s/d M-06
Phase 2 (Fitur Core)      → Integrasikan Gemini, Save Resume & Portfolio
Phase 3 (Pengalaman User) → Toast notifikasi, Edit Profile, Validasi token
Phase 4 (Produksi)        → Rate limiting, refactor backend, pembersihan kode
Phase 5 (Monetisasi)      → Implementasi payment gateway untuk Pricing
```

---

## 📝 7. Kesimpulan

JagoCV adalah proyek dengan **fondasi desain UI yang sangat kuat** dan **arsitektur backend yang sudah solid**. Namun, proyek ini masih berada di tahap **prototype/MVP awal** di mana sebagian besar fitur AI (inti dari produk ini) masih merupakan simulasi.

> [!IMPORTANT]
> Fitur paling kritis yang harus segera diselesaikan adalah **integrasi Gemini AI yang sesungguhnya** (paket sudah terinstall tapi belum dipakai) dan **perbaikan celah keamanan Login Google** sebelum proyek ini bisa diuji oleh pengguna nyata.

> [!TIP]
> Refactor arsitektur ke **React state management yang proper** (misalnya Zustand) akan sangat membantu jangka panjang, karena saat ini pola DOM-manipulation manual bertentangan dengan filosofi React dan akan semakin sulit dikelola.
