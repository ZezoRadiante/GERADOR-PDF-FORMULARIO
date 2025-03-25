
import React from "react";

interface WatermarkProps {
  src: string;
  opacity?: number;
  style?: React.CSSProperties;
  className?: string;
}

const Watermark: React.FC<WatermarkProps> = ({ 
  src, 
  opacity = 0.08, 
  style = {}, 
  className = ""
}) => {
  return (
    <div style={{ 
      position: 'absolute', 
      top: '0', 
      left: '0', 
      width: '100%', 
      height: '100%', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      pointerEvents: 'none',
      zIndex: '0',
      ...style
    }}
    className={className}
    >
      <img 
        src={src} 
        style={{ 
          opacity, 
          width: '80%', 
          objectFit: 'contain',
          ...style
        }} 
        alt="Marca d'água"
      />
    </div>
  );
};

export default Watermark;
