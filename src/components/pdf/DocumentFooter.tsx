
import React from "react";

interface DocumentFooterProps {
  text?: string;
  subtext?: string;
}

const DocumentFooter: React.FC<DocumentFooterProps> = ({ 
  text = "", 
  subtext = "" 
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
      {text && <strong>{text}</strong>}
      {text && subtext && <br />}
      {subtext}
    </div>
  );
};

export default DocumentFooter;
