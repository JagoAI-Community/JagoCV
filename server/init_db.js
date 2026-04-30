import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

async function initDB() {
  console.log('🔄 Initializing Database...');
  
  // Connect without DB name first to create it
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || ''
  });

  try {
    const dbName = process.env.DB_NAME || 'JagoCV';
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    console.log(`✅ Database '${dbName}' verified/created.`);
    
    await connection.query(`USE ${dbName}`);

    // Create USERS table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(100) UNIQUE,
        password_hash VARCHAR(255),
        role_title VARCHAR(100),
        profile_image_url VARCHAR(255),
        portfolio_views INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log(`✅ Table 'users' verified/created.`);

    // Create TEMPLATES table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS templates (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100),
        description TEXT,
        type VARCHAR(50),
        icon_svg TEXT,
        theme_color VARCHAR(50),
        is_active BOOLEAN DEFAULT 1
      )
    `);
    console.log(`✅ Table 'templates' verified/created.`);

    // Create DOCUMENTS table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS documents (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        template_id VARCHAR(36),
        title VARCHAR(255),
        type VARCHAR(50),
        status VARCHAR(50),
        content_data JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE SET NULL
      )
    `);
    console.log(`✅ Table 'documents' verified/created.`);

    // === SEED DATA ===
    console.log('🌱 Seeding initial data...');
    
    // Seed Users
    const [users] = await connection.query('SELECT * FROM users LIMIT 1');
    if (users.length === 0) {
      await connection.query(`
        INSERT INTO users (id, first_name, last_name, email, role_title, profile_image_url, portfolio_views)
        VALUES ('USR-001', 'Budi', 'Santoso', 'budi@example.com', 'CS Student & Web Dev', 'https://picsum.photos/seed/budi/400/400', 1248)
      `);
    }

    // Seed Templates
    const [templates] = await connection.query('SELECT * FROM templates LIMIT 1');
    if (templates.length === 0) {
      await connection.query(`
        INSERT INTO templates (id, name, description, type, theme_color, icon_svg) VALUES
        ('TPL-001', 'CV Optimal ATS', 'Dokumen berbasis teks yang semantik dan bersih, dirancang khusus untuk melewati Sistem Pelacakan Pelamar (ATS) di perusahaan teknologi top.', 'ATS CV', 'blue', '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'),
        ('TPL-002', 'Resume Visual Modern', 'Resume PDF yang diformat indah dengan tata letak modern, tipografi, dan hierarki visual yang jelas untuk perekrut.', 'Visual Resume', 'indigo', '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path></svg>'),
        ('TPL-003', 'Portofolio Interaktif', 'Dasbor web Bento-grid interaktif yang ramah seluler untuk memamerkan proyek dan bio Anda secara online.', 'Web Portfolio', 'cyan', '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>')
      `);
    }

    // Seed Documents
    const [docs] = await connection.query('SELECT * FROM documents LIMIT 1');
    if (docs.length === 0) {
      await connection.query(`
        INSERT INTO documents (id, user_id, template_id, title, type, status, content_data) VALUES
        ('DOC-8012', 'USR-001', 'TPL-001', 'Software Engineer - TechCorp', 'ATS CV', 'Selesai', '{}'),
        ('DOC-8004', 'USR-001', 'TPL-002', 'Creative Frontend Portfolio', 'Visual Resume', 'Draf', '{}'),
        ('DOC-7992', 'USR-001', 'TPL-003', 'budi.link Bio Page', 'Web Portfolio', 'Diterbitkan', '{}')
      `);
    }

    console.log('✅ Initialization complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during initialization:', err);
    process.exit(1);
  }
}

initDB();
