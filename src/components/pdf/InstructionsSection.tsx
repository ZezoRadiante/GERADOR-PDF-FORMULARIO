
import React from "react";

const InstructionsSection: React.FC = () => {
  return (
    <div style={{ 
      marginTop: '2mm', 
      fontSize: '6pt', 
      position: 'relative', 
      zIndex: '1',
      padding: '2px',
      backgroundColor: '#f2fce2',
      border: '1px solid #d0e890',
      borderRadius: '3px',
      color: '#333333'
    }}>
      <strong style={{ color: '#333333', fontSize: '7pt' }}>Instruções para preencher o Formulário SCI - 234</strong>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse', 
        marginTop: '1mm',
        fontSize: '6pt'
      }}>
        <thead>
          <tr>
            <th style={{ 
              border: '1px solid #a8cc3c', 
              padding: '1px', 
              backgroundColor: '#f2fce2', 
              fontWeight: 'bold',
              color: '#333333',
              width: '8%'
            }}>Nº</th>
            <th style={{ 
              border: '1px solid #a8cc3c', 
              padding: '1px', 
              backgroundColor: '#f2fce2', 
              fontWeight: 'bold',
              color: '#333333',
              width: '25%'
            }}>Títulos</th>
            <th style={{ 
              border: '1px solid #a8cc3c', 
              padding: '1px', 
              backgroundColor: '#f2fce2', 
              fontWeight: 'bold',
              color: '#333333'
            }}>Instruções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>1</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Nome do evento</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Informe o nome do evento/incidente.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>2</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Período Operacional</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Informe o período operacional.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>3</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Objetivos do Período Operacional desejados</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Escreva os objetivos da resposta, incluindo a hora, informe situações relevantes para as ações futuros, bem como os problemas presentes.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>4</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Estratégias Operacionais</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Escreva possíveis estratégias para atingir o objetivo determinado no item nº. 3 (Como fazer)</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>5</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Táticas/Técnicas</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Descreva quem, o que, onde e quando se devem realizar os trabalhos.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>6</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Elaborado por</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Informe o nome e o cargo de quem elabora o formulário.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', textAlign: 'center', color: '#333333' }}>7</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Data/Horário</td>
            <td style={{ border: '1px solid #a8cc3c', padding: '1px', color: '#333333' }}>Informe a data (dia, mês, ano) e hora (formato 24h).</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InstructionsSection;
