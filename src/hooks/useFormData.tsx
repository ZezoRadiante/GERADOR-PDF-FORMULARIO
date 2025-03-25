
import { useState, useEffect } from "react";

export interface FormData {
  eventName: string;
  startDate: string;
  endDate: string;
  objectives: string;
  strategies: string;
  tactics: string;
  preparedBy: string;
  currentDate: string;
  currentTime: string;
}

export function useFormData() {
  const initialFormData: FormData = {
    eventName: "",
    startDate: "",
    endDate: "",
    objectives: "",
    strategies: "",
    tactics: "",
    preparedBy: "",
    currentDate: "",
    currentTime: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    // Definir data e hora atual como padrão
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const timeStr = 
      today.getHours().toString().padStart(2, "0") +
      ":" +
      today.getMinutes().toString().padStart(2, "0");

    setFormData((prev) => ({
      ...prev,
      currentDate: dateStr,
      currentTime: timeStr,
    }));
  }, []);

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return { formData, setFormData, resetForm };
}
