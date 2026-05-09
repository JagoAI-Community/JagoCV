# 🗄️ Analisis Database JagoCV

## 1. Pemahaman Proyek
Ya, saya tahu proyek ini untuk apa. Berdasarkan analisis menyeluruh yang telah saya lakukan, **JagoCV** adalah sebuah platform SaaS (Software as a Service) berbasis web untuk membantu pengguna membuat dokumen karier yang profesional dengan bantuan AI. 

Proyek ini memiliki 3 produk utama:
1. **ATS CV:** Untuk membuat CV terstruktur yang ramah sistem pelacak lamaran kerja.
2. **Visual Resume:** Untuk membuat resume bergaya desain grafis yang menarik secara visual.
3. **Web Portfolio:** Untuk membuat halaman portofolio mandiri berbasis tautan (seperti Linktree/Bento).

Platform ini juga memiliki fitur pendukung seperti:
- **Sistem Berlangganan (Pricing):** Paket "Biasa", "Go", dan "Ultra".
- **Sistem Kredit AI:** Membatasi jumlah penggunaan fitur *Generate with AI*.
- **Asisten AI Terintegrasi:** Fitur chat di mana pengguna dapat meminta AI untuk menyunting dokumen mereka secara spesifik.

---

## 2. Analisis Skema Database Saat Ini

Skema database Anda menggunakan **Prisma ORM** dengan database relasional (PostgreSQL). Saat ini terdapat 3 tabel utama: `User`, `Document`, dan `ChatMessage`.

### Penilaian Umum:
Secara arsitektur, desain database ini **sudah cukup bagus dan solid untuk skala MVP (Minimum Viable Product)**. Model relasinya (One-to-Many dari User ke Document dan ChatMessage) sudah tepat. Pendekatan menyimpan isi dokumen sebagai JSON (`content Json?`) di tabel `Document` adalah keputusan cerdas untuk platform *builder* yang struktur datanya dinamis.

### Rincian Evaluasi:

#### ✅ Hal-hal yang Sudah Sangat Baik:
1. **Fleksibilitas Konten (`content Json?`):** Daripada membuat tabel terpisah untuk setiap *field* CV (pengalaman, pendidikan, skill), menyimpan semuanya dalam satu kolom JSON memudahkan proses *save/load* dan menampung struktur berbeda untuk CV, Resume, dan Portfolio.
2. **Metadata Desain per Dokumen:** Pemisahan `templateId`, `fontFamily`, dan `themeColor` di level `Document` (bukan di dalam JSON) sangat baik untuk keperluan *query* dan pemisahan *concern* antara "konten" dan "tampilan".
3. **Relasi Chat Dokumen (`documentId String?`):** Desain `ChatMessage` memungkinkan obrolan dikaitkan langsung dengan dokumen tertentu (konteks spesifik), atau *null* jika obrolan bersifat global. Ini sangat cerdas untuk asisten AI.
4. **Persiapan Monetisasi:** Tersedianya *field* `subscriptionTier` dan `aiCredits` di tabel `User` membuktikan database ini sudah memikirkan skenario bisnis (SaaS) sejak awal.

---

## 3. Area yang Perlu Diperbaiki / Ditingkatkan

Meskipun sudah baik untuk MVP, untuk pengembangan jangka panjang (skala produksi), ada beberapa hal yang perlu diperbaiki:

### 🟠 1. Tipe Data Tanggal yang Tidak Tepat (Masalah Terbesar)
**Lokasi:** Tabel `Document`, kolom `date String`
**Masalah:** Saat ini tanggal pembuatan/modifikasi disimpan sebagai string. Ini membuat Anda **tidak bisa melakukan query rentang waktu** (misalnya: "ambil dokumen yang dibuat bulan lalu") atau pengurutan yang akurat di tingkat database.
**Solusi:** Ubah menjadi tipe data DateTime atau gunakan `createdAt`/`updatedAt` yang sudah ada, lalu format di sisi frontend.
```prisma
// SEBELUMNYA
date      String   

// REKOMENDASI (Hapus 'date', gunakan createdAt/updatedAt)
// Biarkan frontend yang mengubah DateTime menjadi "12 Mei 2026"
```

### 🟠 2. Kurangnya Validasi Enum (Data Integrity)
**Lokasi:** Berbagai kolom `String` yang sebenarnya punya nilai tetap.
**Masalah:** Kolom seperti `type` ("ATS CV", "Visual Resume"), `status` ("Selesai", "Draf"), dan `subscriptionTier` ("Biasa", "Go") menggunakan tipe `String` biasa. Ini rawan typo dan inkonsistensi data ("Selesai" vs "selesai").
**Solusi:** Gunakan tipe data `enum` bawaan PostgreSQL.
```prisma
enum DocumentType {
  ATS_CV
  VISUAL_RESUME
  WEB_PORTFOLIO
}

enum DocumentStatus {
  DRAF
  SELESAI
  DITERBITKAN
}

// Di dalam model Document:
type      DocumentType
status    DocumentStatus @default(DRAF)
```

### 🟡 3. Manajemen Token Sesi / Refresh Token
**Lokasi:** Tabel `User`
**Masalah:** Saat ini autentikasi hanya mengandalkan JWT *stateless*. Jika token pengguna dicuri, Anda tidak bisa melakukan "Force Logout" karena tidak ada pencatatan token/sesi aktif di database.
**Solusi:** Pertimbangkan menambahkan tabel `Session` atau setidaknya *field* `refreshToken` atau `tokenVersion` di tabel `User`.

### 🟡 4. Indexing untuk Performa
**Lokasi:** Tabel `Document` dan `ChatMessage`
**Masalah:** Seiring bertambahnya pengguna, *query* `WHERE userId = ...` akan semakin lambat jika tidak di-index.
**Solusi:** Tambahkan index eksplisit pada *foreign key*.
```prisma
model Document {
  // ...
  @@index([userId])
}

model ChatMessage {
  // ...
  @@index([userId])
  @@index([documentId])
}
```

### 🟡 5. Tracking Penggunaan AI (Audit Trail)
**Lokasi:** `aiCredits` di tabel `User`
**Masalah:** Saat kredit AI berkurang, Anda tidak tahu kredit itu dipakai untuk apa (kapan dan untuk dokumen mana). Jika pengguna protes bahwa kreditnya hilang, Anda tidak punya log/buktinya.
**Solusi:** Pertimbangkan menambahkan tabel `AiUsageLog` untuk mencatat setiap kali AI dipanggil, biayanya (berapa token/kredit), dan terkait dokumen apa.

---

## Kesimpulan

Database JagoCV saat ini sudah berada di jalur yang **sangat tepat**. Fondasinya solid.

**Tindakan Prioritas:** 
Satu-satunya hal yang saya sarankan untuk diubah **sebelum aplikasi rilis** adalah **kolom `date` di `Document`**. Hapus saja kolom tersebut dan andalkan kolom `createdAt` dan `updatedAt` (yang sudah memiliki tipe `DateTime`). Sisanya (Enum dan Indexing) bisa dilakukan perlahan seiring dengan pertumbuhan aplikasi.
