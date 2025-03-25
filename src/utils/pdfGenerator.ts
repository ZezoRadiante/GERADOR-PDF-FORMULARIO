
import { FormData } from "@/hooks/useFormData";
import { toast } from "sonner";

// Adicionando tipos para as bibliotecas externas
declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

// Carrega as bibliotecas de PDF via CDN
export const loadPdfLibraries = async (): Promise<void> => {
  try {
    // Verifica se as bibliotecas já estão carregadas
    if (window.jspdf && window.html2canvas) return;

    // Carrega o jsPDF
    const jsPdfScript = document.createElement("script");
    jsPdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    jsPdfScript.async = true;
    document.head.appendChild(jsPdfScript);

    // Carrega o html2canvas
    const html2canvasScript = document.createElement("script");
    html2canvasScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    html2canvasScript.async = true;
    document.head.appendChild(html2canvasScript);

    // Aguarda o carregamento completo
    await Promise.all([
      new Promise<void>((resolve) => {
        jsPdfScript.onload = () => resolve();
      }),
      new Promise<void>((resolve) => {
        html2canvasScript.onload = () => resolve();
      }),
    ]);
  } catch (error) {
    console.error("Erro ao carregar bibliotecas:", error);
    toast.error("Erro ao carregar bibliotecas de PDF");
  }
};

// Carrega as bibliotecas quando o módulo é importado
loadPdfLibraries();

export const generatePdf = async (formData: FormData): Promise<void> => {
  try {
    // Garante que as bibliotecas estão carregadas
    await loadPdfLibraries();
    
    if (!window.jspdf || !window.html2canvas) {
      throw new Error("Bibliotecas de PDF não carregadas corretamente");
    }

    const { jsPDF } = window.jspdf;
    const html2canvas = window.html2canvas;
    
    // Configura o PDF com melhor qualidade
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });

    // Configurações para a captura do HTML
    const pdfPreview = document.getElementById("pdfPreview");
    if (!pdfPreview) {
      throw new Error("Elemento de preview do PDF não encontrado");
    }

    // Notificar usuário
    toast.info("Gerando PDF, aguarde um momento...");

    // Certifique-se de que o elemento está visível durante a captura
    const originalDisplay = pdfPreview.style.display;
    pdfPreview.style.position = "absolute";
    pdfPreview.style.left = "0";
    pdfPreview.style.top = "0";
    pdfPreview.style.width = "210mm"; // Largura A4
    pdfPreview.style.display = "block";
    pdfPreview.style.background = "white";
    pdfPreview.style.zIndex = "-1000"; // Garante que esteja abaixo de tudo, mas renderizado
    
    // Aguarde um momento para garantir que o DOM foi atualizado e as imagens foram carregadas
    await new Promise(resolve => setTimeout(resolve, 1000)); // Increased delay for image loading
    
    try {
      // Opções melhoradas para html2canvas para melhor qualidade do PDF
      const options = {
        scale: 3, // Aumentar escala para melhor qualidade
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#FFFFFF",
        logging: false,
        removeContainer: true,
        imageTimeout: 15000, // Aumentar o timeout para imagens
        letterRendering: true, // Melhora renderização de texto
      };

      // Capturar o conteúdo HTML e gerar o PDF
      const canvas = await html2canvas(pdfPreview, options);
      const imgData = canvas.toDataURL("image/jpeg", 1.0); // Máxima qualidade JPEG
      const imgWidth = 210; // Largura A4 em mm
      const pageHeight = 297; // Altura A4 em mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Ajustar escala para garantir que tudo cabe em uma página
      const scaleFactor = pageHeight / imgHeight;
      const adjustedWidth = imgWidth * (scaleFactor < 1 ? scaleFactor : 1);
      const adjustedHeight = imgHeight * (scaleFactor < 1 ? scaleFactor : 1);

      pdf.addImage(imgData, "JPEG", 0, 0, adjustedWidth, adjustedHeight);

      // Nome do arquivo personalizado
      const fileName = `SCI_234_${formData.eventName.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`;
      
      // Salva o PDF
      pdf.save(fileName);
      
      toast.success("PDF gerado com sucesso!");
    } finally {
      // Restaurar o estado original do elemento
      pdfPreview.style.display = originalDisplay;
      pdfPreview.style.position = "";
      pdfPreview.style.left = "";
      pdfPreview.style.top = "";
      pdfPreview.style.width = "";
      pdfPreview.style.zIndex = "";
    }
    
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    toast.error("Erro ao gerar o PDF. Por favor, tente novamente.");
  }
};
