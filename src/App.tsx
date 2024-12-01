import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React from 'react';
import Sidebar from './components/Sidebar';
import ConfigArea from './components/ConfigArea';
import TaskArea from './components/TaskArea';
import RightPanel from './components/RightPanel';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 11%;
  background-color: #f0f2f5;
  padding: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 79%;
  padding: 10px;
`;

const RightPanelContainer = styled.div`
  width: 10%;
  background-color: #f0f2f5;
  padding: 10px;
`;

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <AppContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <MainContainer>
          <ConfigArea />
          <TaskArea />
        </MainContainer>
        <RightPanelContainer>
          <RightPanel />
        </RightPanelContainer>
      </AppContainer>
    </DndProvider>
  );
};

export default App;