# JagoCV Backend

Backend untuk JagoCV menggunakan Node.js, Express, dan MySQL (Prisma ORM).

## Setup Cepat

### 1. Install Laragon
Download dan install **Laragon** dari [https://laragon.org](https://laragon.org)

### 2. Start MySQL
Buka Laragon dan klik **Start All**

### 3. Install Dependencies
```bash
cd app/backend
npm install
```

### 4. Setup Database
```bash
npx prisma migrate dev --name init
```

> **Note:** Jangan lupa setup file `.env` dengan `DATABASE_URL` dan variabel lainnya (JWT_SECRET, GEMINI_API_KEY)

### 5. Run Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`

---

## Konfigurasi .env

```env
DATABASE_URL="mysql://root@localhost:3306/jagocv"
JWT_SECRET="your_secret_key"
GEMINI_API_KEY="your_gemini_api_key"
PORT=5000
```

## Troubleshooting

**Error: Can't connect to MySQL**
- Pastikan Laragon sudah running

**Error: Access denied**
- Cek username/password di `DATABASE_URL`
- Default Laragon: `root` tanpa password
