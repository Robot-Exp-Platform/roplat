import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import TaskBox from './TaskBox';

const TaskAreaContainer = styled.div`
  flex: 2;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  min-height: 500px;
`;

const TaskAreaTitle = styled.div`
  margin-bottom: 10px;
`;

const TaskArea: React.FC = () => {
  const [taskBoxes, setTaskBoxes] = useState<any[]>([{ id: 1, items: [], x: 20, y: 50 }]);

  const [, drop] = useDrop(() => ({
    accept: ['node'],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const taskAreaRect = document.getElementById('task-area')?.getBoundingClientRect();
        if (taskAreaRect) {
          let x = Math.max(0, Math.min(offset.x - taskAreaRect.left, taskAreaRect.width - 240));
          let y = Math.max(0, Math.min(offset.y - taskAreaRect.top, taskAreaRect.height - 180));
          // Snap to 20px grid
          x = Math.round(x / 20) * 20;
          y = Math.round(y / 20) * 20;
          const isDroppedInsideTaskBox = taskBoxes.some((taskBox) => {
            const taskBoxRef = document.getElementById(`task-box-${taskBox.id}`);
            if (taskBoxRef) {
              const rect = taskBoxRef.getBoundingClientRect();
              return x >= rect.left - taskAreaRect.left && x <= rect.right - taskAreaRect.left && y >= rect.top - taskAreaRect.top && y <= rect.bottom - taskAreaRect.top;
            }
            return false;
          });
          if (!isDroppedInsideTaskBox) {
            setTaskBoxes((prev) => [...prev, { id: prev.length + 1, items: [item], x, y }]);
          }
        }
      }
    },
  }));

  const handleDoubleClick = () => {
    const lastTaskBox = taskBoxes[taskBoxes.length - 1];
    let newX = lastTaskBox.x + 240 >= document.documentElement.clientWidth - 260 ? 20 : lastTaskBox.x + 240;
    let newY = lastTaskBox.x + 240 >= document.documentElement.clientWidth - 260 ? lastTaskBox.y + 180 : lastTaskBox.y;
    newX = Math.round(newX / 20) * 20;
    newY = Math.round(newY / 20) * 20;
    setTaskBoxes((prev) => [...prev, { id: prev.length + 1, items: [], x: newX, y: newY }]);
  };

  return (
    <TaskAreaContainer ref={drop} id="task-area" onDoubleClick={handleDoubleClick}>
      <TaskAreaTitle>任务区 (定义任务、目标和节点)</TaskAreaTitle>
      {taskBoxes.map((taskBox) => (
        <TaskBox key={taskBox.id} taskId={taskBox.id} initialItems={taskBox.items} x={taskBox.x} y={taskBox.y} />
      ))}
    </TaskAreaContainer>
  );
};

export default TaskArea;