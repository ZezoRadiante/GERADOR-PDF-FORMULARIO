
import React from "react";

interface DocumentFooterProps {
  text?: string;
  subtext?: string;
}

const DocumentFooter: React.FC<DocumentFooterProps> = ({ 
  text = "TARJETA DE CAMPO", 
  subtext = "Frente Verso" 
}) => {
  return (
    <div style={{ 
      marginTop: '2mm', 
      textAlign: 'center', 
      fontSize: '8pt', 
      borderTop: '1px dashed #a8cc3c', 
      paddingTop: '2mm', 
      position: 'relative', 
      zIndex: '1',
      color: '#333333'
    }}>
      <strong>{text}</strong><br />
      {subtext}
    </div>
  );
};

export default DocumentFooter;
