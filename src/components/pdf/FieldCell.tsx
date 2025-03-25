
import React, { ReactNode } from "react";

interface FieldCellProps {
  title: string;
  content?: ReactNode;
  colSpan?: number;
  bgColor?: string;
}

const FieldCell: React.FC<FieldCellProps> = ({ 
  title, 
  content, 
  colSpan = 1, 
  bgColor = '#f8f9f9' 
}) => {
  return (
    <td style={{ 
      border: '1px solid #a8cc3c', 
      padding: '8px', 
      width: colSpan === 1 ? '33%' : undefined, 
      fontWeight: content ? 'bold' : 'normal', 
      verticalAlign: 'top',
      backgroundColor: bgColor,
      color: '#333333'
    }}>
      {title && (
        <strong style={{ color: '#333333' }}>{title}</strong>
      )}
      {content && (
        <span style={{ 
          fontWeight: 'normal', 
          wordBreak: 'break-word',
          fontSize: '11pt',
          paddingTop: '5px',
          display: 'block',
          color: '#333333'
        }}>
          {content}
        </span>
      )}
    </td>
  );
};

export default FieldCell;
