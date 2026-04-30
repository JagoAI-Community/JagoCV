import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';

const htmlInjectPlugin = () => {
  return {
    name: 'html-inject',
    transformIndexHtml(html: string) {
      let result = html;
      const views = [
        'view-landing', 'view-login', 'view-register', 'view-dashboard', 
        'view-profile', 'view-create-cv', 'view-design-resume', 
        'view-build-portfolio', 'view-cv-result', 'view-resume-result', 
        'view-portfolio-result', 'view-pricing', 'view-preview-gallery'
      ];
      views.forEach(view => {
        const viewPath = path.resolve(__dirname, 'src/views', `${view}.html`);
        if (fs.existsSync(viewPath)) {
          const content = fs.readFileSync(viewPath, 'utf-8');
          result = result.replace(`<!-- INJECT_VIEW_${view} -->`, content);
        }
      });
      return result;
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [tailwindcss(), htmlInjectPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
