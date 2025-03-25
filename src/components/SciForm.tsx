
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormData } from "@/hooks/useFormData";
import { generatePdf } from "@/utils/pdfGenerator";
import { toast } from "sonner";
import FormSection from "./form/FormSection";
import DateTimeInputs from "./form/DateTimeInputs";
import FormFooter from "./form/FormFooter";

interface SciFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetForm: () => void;
}

const SciForm: React.FC<SciFormProps> = ({ formData, setFormData, resetForm }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos obrigatórios
    const requiredFields = Object.entries(formData);
    const emptyFields = requiredFields.filter(([_, value]) => !value);
    
    if (emptyFields.length > 0) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    // Gerar PDF
    generatePdf(formData);
    toast.success("PDF gerado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <FormSection number="1" title="Nome do Evento">
          <Input
            id="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
            className="border-[#d0e890] focus:border-[#a8cc3c]"
          />
        </FormSection>

        <FormSection number="2" title="Período Operacional">
          <DateTimeInputs
            dateId="startDate"
            dateValue={formData.startDate}
            dateLabel="Data inicial:"
            timeId={undefined}
            timeValue={undefined}
            onChange={handleChange}
          />
          <div className="mt-4">
            <DateTimeInputs
              dateId="endDate"
              dateValue={formData.endDate}
              dateLabel="Data final:"
              timeId={undefined}
              timeValue={undefined}
              onChange={handleChange}
            />
          </div>
        </FormSection>

        <FormSection number="3" title="Objetivos do Período Operacional / Resultados desejados">
          <Textarea
            id="objectives"
            value={formData.objectives}
            onChange={handleChange}
            required
            className="border-[#d0e890] focus:border-[#a8cc3c] min-h-[100px]"
          />
        </FormSection>

        <FormSection number="4" title="Estratégias Operacionais (Como fazer?)">
          <Textarea
            id="strategies"
            value={formData.strategies}
            onChange={handleChange}
            required
            className="border-[#d0e890] focus:border-[#a8cc3c] min-h-[100px]"
          />
        </FormSection>

        <FormSection number="5" title="Táticas/Técnicas (Quem/O que/Onde/Quando)">
          <Textarea
            id="tactics"
            value={formData.tactics}
            onChange={handleChange}
            required
            className="border-[#d0e890] focus:border-[#a8cc3c] min-h-[100px]"
          />
        </FormSection>

        <FormSection number="6" title="Elaborado por: (Chefe Seção de Operações)">
          <Input
            id="preparedBy"
            value={formData.preparedBy}
            onChange={handleChange}
            required
            className="border-[#d0e890] focus:border-[#a8cc3c]"
          />
        </FormSection>

        <FormSection number="7" title="Data e Hora:">
          <DateTimeInputs
            dateId="currentDate"
            dateValue={formData.currentDate}
            timeId="currentTime"
            timeValue={formData.currentTime}
            onChange={handleChange}
          />
        </FormSection>
      </div>

      <FormFooter onReset={resetForm} />
    </form>
  );
};

export default SciForm;
