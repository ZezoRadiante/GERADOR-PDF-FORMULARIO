
import React, { useState } from "react";
import SciForm from "@/components/SciForm";
import PdfPreview from "@/components/PdfPreview";
import { useFormData } from "@/hooks/useFormData";
import Watermark from "@/components/pdf/Watermark";

export default function Index() {
  const { formData, setFormData, resetForm } = useFormData();
    const [logoError, setLogoError] = useState(false);

  // Use uma URL mais confiável para a logo
  const logoUrl = "/logo.png";
    // Imagem de fallback em caso de erro
  const fallbackLogo = "/placeholder.svg";


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden relative">
          {/* Marca d'água grande no background */}
          <Watermark 
src={logoUrl} 
            opacity={0.08} 
            className="w-4/5 max-w-lg"
          />
          
          {/* Cabeçalho com logo */}
          <div className="bg-green-50 p-4 border-b border-green-100 flex items-center relative z-10">
           {logoError ? (
              <img 
                src={fallbackLogo} 
                alt="Logo Fallback" 
                className="h-12 mr-4"
              />
            ) : (
              <img 
                src={logoUrl} 
                alt="Logo" 
                className="h-12 mr-4"
                onError={(e) => {
                  console.error("Erro ao carregar logo:", e);
                  setLogoError(true);
                }}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-[#a8cc3c]">
                FORMULÁRIO SCI - 234
              </h1>
              <p className="text-[#95b535] text-sm">
                Emergências climáticas e epizootias
              </p>
            </div>
          </div>
          
          <div className="px-6 py-8 relative z-10">
            <SciForm formData={formData} setFormData={setFormData} resetForm={resetForm} />
          </div>
        </div>
      </div>
      <PdfPreview formData={formData} logoUrl={logoUrl} />
    </div>
  );
}
