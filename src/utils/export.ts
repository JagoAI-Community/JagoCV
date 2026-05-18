import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

/**
 * Fetches Google Fonts CSS to avoid CORS issues.
 * This allows html-to-image to embed fonts properly.
 */
async function getGoogleFontsCSS(): Promise<string> {
  try {
    // Find all Google Fonts link tags
    const fontLinks = Array.from(document.querySelectorAll('link[href*="fonts.googleapis.com"]'));
    
    if (fontLinks.length === 0) {
      return '';
    }
    
    // Fetch CSS from all Google Fonts links
    const cssPromises = fontLinks.map(async (link) => {
      const href = (link as HTMLLinkElement).href;
      try {
        const response = await fetch(href);
        return await response.text();
      } catch (e) {
        console.warn('Could not fetch font CSS:', href);
        return '';
      }
    });
    
    const cssArray = await Promise.all(cssPromises);
    return cssArray.join('\n');
  } catch (e) {
    console.warn('Error fetching Google Fonts CSS:', e);
    return '';
  }
}

/**
 * Exports a DOM element to a PNG image using html-to-image.
 * @param elementId The ID of the element to export.
 * @param fileName The name of the file to save.
 */
export const exportToPng = async (elementId: string, fileName: string = 'document') => {
  console.log(`Starting PNG export for element: ${elementId}`);
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    alert(`Error: Element ${elementId} not found`);
    return;
  }

  try {
    console.log('Converting to PNG with html-to-image...');
    
    // Fetch Google Fonts CSS to avoid CORS errors
    const fontCSS = await getGoogleFontsCSS();
    
    // Use html-to-image to convert element to PNG
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      fontEmbedCSS: fontCSS, // Provide font CSS directly to avoid CORS
    });
    
    console.log('PNG generated, triggering download...');
    
    // Convert data URL to blob and download
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
    
    console.log('PNG download triggered');
  } catch (error) {
    console.error('Error exporting to PNG:', error);
    alert('Failed to export PNG. Check console for details.');
  }
};

/**
 * Exports a DOM element to a PDF using html-to-image + jsPDF.
 * @param elementId The ID of the element to export.
 * @param fileName The name of the file to save.
 */
export const exportToPdf = async (elementId: string, fileName: string = 'document') => {
  console.log(`Starting PDF export for element: ${elementId}`);
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    alert(`Error: Element ${elementId} not found`);
    return;
  }

  try {
    console.log('Converting to PNG with html-to-image...');
    
    // Fetch Google Fonts CSS to avoid CORS errors
    const fontCSS = await getGoogleFontsCSS();
    
    // Use html-to-image to convert element to PNG
    const dataUrl = await toPng(element, {
      quality: 1,
      pixelRatio: 2,
      backgroundColor: '#ffffff',
      fontEmbedCSS: fontCSS, // Provide font CSS directly to avoid CORS
    });
    
    console.log('PNG generated, creating PDF...');
    
    // Get element dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (element.offsetHeight * imgWidth) / element.offsetWidth;
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${fileName}.pdf`);
    
    console.log('PDF saved');
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    alert('Failed to export PDF. Check console for details.');
  }
};
