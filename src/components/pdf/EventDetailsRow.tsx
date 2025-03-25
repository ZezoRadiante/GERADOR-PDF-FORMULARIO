
import React from "react";

interface EventDetailsRowProps {
  eventName: string;
  startDate: string;
  endDate: string;
}

const EventDetailsRow: React.FC<EventDetailsRowProps> = ({ 
  eventName, 
  startDate, 
  endDate 
}) => {
  return (
    <tr>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        width: '33%', 
        fontWeight: 'bold', 
        verticalAlign: 'top',
        backgroundColor: '#f2fce2',
        fontSize: '9pt'
      }}>
        <strong style={{ color: '#333333' }}>1. Nome do Evento</strong><br />
        <span style={{ 
          fontWeight: 'normal', 
          wordBreak: 'break-word',
          fontSize: '9pt',
          paddingTop: '3px',
          display: 'block'
        }}>{eventName}</span>
      </td>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        width: '33%', 
        backgroundColor: '#f5f5f5' 
      }}></td>
      <td style={{ 
        border: '1px solid #a8cc3c', 
        padding: '5px', 
        width: '34%', 
        fontWeight: 'bold', 
        verticalAlign: 'top',
        backgroundColor: '#f2fce2',
        fontSize: '9pt'
      }}>
        <strong style={{ color: '#333333' }}>2. Período Operacional</strong><br />
        <div style={{ paddingTop: '3px' }}>
          <strong>De: </strong><span style={{ fontWeight: 'normal' }}>{startDate}</span><br />
          <strong>Até: </strong><span style={{ fontWeight: 'normal' }}>{endDate}</span>
        </div>
      </td>
    </tr>
  );
};

export default EventDetailsRow;
