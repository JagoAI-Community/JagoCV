# JagoCV Backend

Backend untuk JagoCV menggunakan Node.js, Express, dan PostgreSQL (Prisma ORM).

## Persiapan
1. Pastikan Anda sudah menginstal **PostgreSQL** di komputer Anda.
2. Buat database baru dengan nama `jagocv_db`.

## Instalasi
1. Masuk ke folder backend:
   ```bash
   cd backend
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```

## Konfigurasi Database
1. Buka file `.env` di folder `backend`.
2. Sesuaikan `DATABASE_URL` dengan username dan password PostgreSQL Anda:
   `postgresql://USER:PASSWORD@localhost:5432/jagocv_db?schema=public`

## Sinkronisasi Database
Jalankan perintah ini untuk membuat tabel di PostgreSQL:
```bash
npx prisma migrate dev --name init
```

## Menjalankan Server
```bash
npm run dev
```
Server akan berjalan di `http://localhost:5000`.
