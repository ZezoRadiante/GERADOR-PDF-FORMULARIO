
import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <td style={{ 
      border: '1px solid #a8cc3c', 
      padding: '5px', 
      fontWeight: 'bold', 
      height: '16mm', 
      verticalAlign: 'top',
      backgroundColor: '#f2fce2',
      color: '#333333',
      fontSize: '9pt',
      position: 'relative',
      zIndex: '2'
    }}>
      <strong style={{ color: '#333333' }}>{title}</strong>
    </td>
  );
};

export default SectionHeader;
