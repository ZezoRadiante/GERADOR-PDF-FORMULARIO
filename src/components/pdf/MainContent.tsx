
import React from "react";
import SectionHeader from "./SectionHeader";
import ContentCell from "./ContentCell";

interface MainContentProps {
  objectives: string;
  strategies: string;
  tactics: string;
}

const MainContent: React.FC<MainContentProps> = ({ 
  objectives, 
  strategies, 
  tactics 
}) => {
  return (
    <>
      <tr>
        <SectionHeader title="3. Objetivos do Período Operacional / Resultados desejados" />
        <SectionHeader title="4. Estratégias Operacionais (Como fazer?)" />
        <SectionHeader title="5. Táticas/Técnicas (Quem/O que/Onde/Quando)" />
      </tr>
      <tr>
        <ContentCell content={objectives} />
        <ContentCell content={strategies} />
        <ContentCell content={tactics} />
      </tr>
    </>
  );
};

export default MainContent;
