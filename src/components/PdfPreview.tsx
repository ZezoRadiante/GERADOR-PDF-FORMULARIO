
import React from "react";
import { FormData } from "@/hooks/useFormData";
import { formatDate } from "@/utils/formatDate";
import Watermark from "./pdf/Watermark";
import DocumentHeader from "./pdf/DocumentHeader";
import TableHeader from "./pdf/TableHeader";
import EventDetailsRow from "./pdf/EventDetailsRow";
import MainContent from "./pdf/MainContent";
import EmptyRow from "./pdf/EmptyRow";
import DateRow from "./pdf/DateRow";
import DocumentFooter from "./pdf/DocumentFooter";

interface PdfPreviewProps {
  formData: FormData;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({ formData }) => {
  return (
    <div id="pdfPreview" className="hidden">
      <div style={{ 
        width: '210mm', 
        padding: '10mm', 
        margin: '0 auto', 
        boxSizing: 'border-box', 
        fontFamily: 'Calibri, Arial, sans-serif', 
        background: 'white', 
        position: 'relative',
        color: '#333',
        fontSize: '9pt'
      }}>
        {/* Marca d'água grande única */}
        <Watermark 
          src="/lovable-uploads/891aa379-bece-4a32-bd58-18611c758b1f.png" 
          opacity={0.08} 
          style={{ width: '80%' }}
        />
        
        {/* Cabeçalho do documento */}
        <DocumentHeader 
          logoSrc="/lovable-uploads/891aa379-bece-4a32-bd58-18611c758b1f.png" 
          title="FORMULÁRIO SCI -- 234" 
        />
        
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          marginBottom: '6mm', 
          position: 'relative', 
          zIndex: '1',
          fontSize: '9pt',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
        }}>
          <tbody>
            <TableHeader title="MATRIZ DE ANÁLISE DE TRABALHO -- SCI 234" />
            
            <EventDetailsRow 
              eventName={formData.eventName} 
              startDate={formatDate(formData.startDate)} 
              endDate={formatDate(formData.endDate)} 
            />
            
            <MainContent 
              objectives={formData.objectives} 
              strategies={formData.strategies} 
              tactics={formData.tactics} 
            />
            
            {/* Linhas adicionais com bordas mais claras e organizadas */}
            <EmptyRow dashed={true} height="2mm" />
            
            <DateRow 
              preparedBy={formData.preparedBy} 
              date={formatDate(formData.currentDate)} 
              time={formData.currentTime} 
            />
            
            <TableHeader title="MATRIZ DE ANÁLISE DE TRABALHO Pág. 1 de 1 SCI 234" />
          </tbody>
        </table>
        
        {/* Rodapé */}
        <DocumentFooter />
      </div>
    </div>
  );
}

export default PdfPreview;
