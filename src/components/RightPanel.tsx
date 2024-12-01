import React from 'react';
import DraggableItem from './DraggableItem';
import styled from 'styled-components';

// NodeMessage 枚举类型
export enum NodeMessage {
  NoneNodeMessage = 'NoneNodeMessage',
  KillNode = 'KillNode',
  NodeMessages = 'NodeMessages',
  Process = 'Process',
  Relative = 'Relative',
  Pose = 'Pose',
  Transform = 'Transform',
  Joint = 'Joint',
  JointList = 'JointList',
  JointWithPeriod = 'JointWithPeriod',
  JointVel = 'JointVel',
  JointVelWithPeriod = 'JointVelWithPeriod',
  JointVelAcc = 'JointVelAcc',
  JointVelAccWithPeriod = 'JointVelAccWithPeriod',
  Tau = 'Tau',
  TauWithPeriod = 'TauWithPeriod'
}

const SidebarSection = styled.div`
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Sidebar: React.FC = () => {
  const nodeMessageTargets = Object.keys(NodeMessage).map((key) => (
    <DraggableItem key={key} type="target" name={key} />
  ));

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

      <SidebarSection>
        <SidebarTitle>Targets</SidebarTitle>
        {nodeMessageTargets}
      </SidebarSection>
    </>
  );
};

export default Sidebar;