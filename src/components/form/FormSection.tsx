
import React, { ReactNode } from "react";
import { Label } from "@/components/ui/label";

interface FormSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ number, title, children }) => {
  return (
    <div className="p-4 bg-green-50 rounded-md border border-green-100 relative overflow-hidden">
      <Label htmlFor={`section-${number}`} className="text-[#a8cc3c] font-medium block mb-2 relative z-10">
        {number}. {title}
      </Label>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FormSection;
