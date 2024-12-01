import React from 'react';
import DraggableItem from './DraggableItem';
import styled from 'styled-components';

const SidebarSection = styled.div`
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Sidebar: React.FC = () => {
  return (
    <>
      <SidebarSection>
        <SidebarTitle>Robots</SidebarTitle>
        <DraggableItem type="robot" name="Panda" />
        <DraggableItem type="robot" name="UR" />
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>Sensors</SidebarTitle>
        <DraggableItem type="sensor" name="Sensor A" />
        <DraggableItem type="sensor" name="Sensor B" />
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>Nodes</SidebarTitle>
        <DraggableItem type="node" name="PID" />
        <DraggableItem type="node" name="Impedence" />
      </SidebarSection>
    </>
  );
};

export default Sidebar;