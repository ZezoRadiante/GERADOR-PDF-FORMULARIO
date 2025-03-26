
import React from "react";

interface DocumentHeaderProps {
  logoSrc: string;
  title: string;
}

const DocumentHeader: React.FC<DocumentHeaderProps> = ({ logoSrc, title }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      fontSize: '13pt', 
      marginBottom: '5mm', 
      position: 'relative', 
      zIndex: '1', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      borderBottom: '2px solid #a8cc3c',
      paddingBottom: '3px'
    }}>
      {/* Logo no canto superior esquerdo */}
      <img 
        src={logoSrc} 
        style={{ 
          width: '55px', 
          height: 'auto',
          marginRight: '8px'
        }} 
        alt="Logo"
                onError={(e) => {
          console.error("Erro ao carregar logo no PDF:", e);
          // Fallback para uma imagem local
          e.currentTarget.src = "/placeholder.svg";
        }}
      />
      <strong style={{ 
        flex: '1', 
        textAlign: 'center', 
        fontWeight: 'bold',
        color: '#a8cc3c',
        letterSpacing: '0.5px'
      }}>{title}</strong>
      <div style={{ width: '55px' }}></div> {/* Espaço equivalente para manter centralizado */}
    </div>
  );
};

export default DocumentHeader;
