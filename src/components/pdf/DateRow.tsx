
import React from "react";

interface DateRowProps {
  preparedBy: string;
  date: string;
  time: string;
}

const DateRow: React.FC<DateRowProps> = ({ preparedBy, date, time }) => {
  return (
    <tr>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        fontWeight: 'bold', 
        verticalAlign: 'top',
        backgroundColor: '#f2fce2',
        borderTop: '2px solid #a8cc3c',
        fontSize: '9pt'
      }}>
        <strong style={{ color: '#333333' }}>6. Elaborado por: (Chefe Seção de Operações)</strong><br />
        <span style={{ 
          fontWeight: 'normal', 
          wordBreak: 'break-word',
          paddingTop: '3px',
          display: 'block',
          color: '#333333'
        }}>{preparedBy}</span>
      </td>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        backgroundColor: '#f2fce2',
        borderTop: '2px solid #a8cc3c'
      }}></td>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        fontWeight: 'bold', 
        verticalAlign: 'top',
        backgroundColor: '#f2fce2',
        borderTop: '2px solid #a8cc3c',
        fontSize: '9pt'
      }}>
        <strong style={{ color: '#333333' }}>7. Data/Horário:</strong><br />
        <span style={{ 
          fontWeight: 'normal',
          paddingTop: '3px',
          display: 'block',
          color: '#333333'
        }}>{date} &nbsp;
        {time}</span>
      </td>
    </tr>
  );
};

export default DateRow;
