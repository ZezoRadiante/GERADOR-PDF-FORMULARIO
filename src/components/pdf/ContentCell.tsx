
import React from "react";

interface ContentCellProps {
  content: string;
}

const ContentCell: React.FC<ContentCellProps> = ({ content }) => {
  return (
    <td style={{ 
      border: '1px solid #a8cc3c', 
      padding: '6px', 
      height: '50mm', 
      verticalAlign: 'top', 
      wordBreak: 'break-word',
      lineHeight: '1.2',
      backgroundColor: 'white',
      color: '#000000',
      fontSize: '9pt',
      position: 'relative',
      zIndex: '1'
    }}>
      {content}
    </td>
  );
};

export default ContentCell;
