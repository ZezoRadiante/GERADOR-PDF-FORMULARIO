
import React from "react";

interface TableHeaderProps {
  title: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ title }) => {
  return (
    <tr>
      <td colSpan={3} style={{ 
        border: '1px solid #a8cc3c', 
        padding: '4px', 
        textAlign: 'center', 
        fontWeight: 'bold',
        backgroundColor: '#f2fce2',
        color: '#333333',
        fontSize: '10pt',
        position: 'relative',
        zIndex: '2'
      }}>
        <strong>{title}</strong>
      </td>
    </tr>
  );
};

export default TableHeader;
