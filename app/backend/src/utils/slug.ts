/**
 * Membuat slug URL-friendly dari judul dokumen.
 * Contoh: "CV Saya 2024" → "cv-saya-2024-ab3x9"
 */
export function generateSlug(title: string): string {
  const base = title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
  const suffix = Math.random().toString(36).substring(2, 7);
  return `${base}-${suffix}`;
}
