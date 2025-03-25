
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateTimeInputsProps {
  dateId: string;
  dateValue: string;
  timeId?: string;
  timeValue?: string;
  dateLabel?: string;
  timeLabel?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const DateTimeInputs: React.FC<DateTimeInputsProps> = ({
  dateId,
  dateValue,
  timeId,
  timeValue,
  dateLabel = "Data:",
  timeLabel = "Hora:",
  onChange,
  required = true,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor={dateId} className="text-sm text-[#a8cc3c] block mb-1">{dateLabel}</Label>
        <Input
          type="date"
          id={dateId}
          value={dateValue}
          onChange={onChange}
          required={required}
          className="border-[#d0e890] focus:border-[#a8cc3c]"
        />
      </div>
      {timeId && (
        <div>
          <Label htmlFor={timeId} className="text-sm text-[#a8cc3c] block mb-1">{timeLabel}</Label>
          <Input
            type="time"
            id={timeId}
            value={timeValue}
            onChange={onChange}
            required={required}
            className="border-[#d0e890] focus:border-[#a8cc3c]"
          />
        </div>
      )}
    </div>
  );
};

export default DateTimeInputs;
