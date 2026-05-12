import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

/**
 * Exports a DOM element to a PNG image.
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
    console.log('Capturing canvas with html2canvas...');
    // Ensure we are at the top of the element to avoid capture issues
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: true,
      backgroundColor: '#ffffff',
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY,
    });
    
    console.log('Canvas captured, creating blob...');
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('Failed to create blob');
        alert('Gagal membuat gambar PNG');
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${fileName}.png`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      console.log('Download triggered via blob');
    }, 'image/png');
  } catch (error) {
    console.error('Error exporting to PNG:', error);
    alert('Failed to export PNG. Check console for details.');
  }
};

export const exportToPdf = async (elementId: string, fileName: string = 'document') => {
  console.log(`Starting PDF export for element: ${elementId}`);
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID ${elementId} not found`);
    alert(`Error: Element ${elementId} not found`);
    return;
  }

  try {
    console.log('Capturing canvas with html2canvas...');
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: true,
      backgroundColor: '#ffffff',
      allowTaint: true,
      scrollX: 0,
      scrollY: -window.scrollY,
    });
    
    console.log('Canvas captured, generating PDF...');
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate PDF dimensions to match canvas aspect ratio
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${fileName}.pdf`);
    console.log('PDF saved');
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    alert('Failed to export PDF. Check console for details.');
  }
};
