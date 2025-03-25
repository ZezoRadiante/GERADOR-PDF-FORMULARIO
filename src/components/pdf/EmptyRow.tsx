
import React from "react";

interface EmptyRowProps {
  colSpan?: number;
  height?: string;
  dashed?: boolean;
}

const EmptyRow: React.FC<EmptyRowProps> = ({ 
  colSpan = 3, 
  height = '5mm',
  dashed = false
}) => {
  return (
    <tr>
      <td colSpan={colSpan} style={{ 
        border: '1px solid #a8cc3c', 
        height: height,
        backgroundColor: '#f8f9f9',
        borderTop: dashed ? '1px dashed #a8cc3c' : undefined,
        color: '#333333'
      }}></td>
    </tr>
  );
};

export default EmptyRow;
