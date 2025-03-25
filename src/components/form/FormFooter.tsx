
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface FormFooterProps {
  onReset: () => void;
}

const FormFooter: React.FC<FormFooterProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-6 gap-4">
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/cd7d2eec-9685-4c6c-9bd8-f0b444b0b886.png" 
          alt="Logo" 
          className="h-10 mr-2"
        />
        <span className="text-[#a8cc3c] font-medium">Formulário SCI-234</span>
      </div>
      
      <div className="flex gap-3">
        <Button 
          type="button" 
          onClick={onReset} 
          variant="outline"
          className="border-[#d0e890] text-[#a8cc3c] hover:bg-green-50"
        >
          Limpar Formulário
        </Button>
        <Button 
          type="submit" 
          className="bg-[#a8cc3c] hover:bg-[#95b535] text-white gap-2"
        >
          <FileText size={18} />
          Gerar PDF
        </Button>
      </div>
    </div>
  );
};

export default FormFooter;
