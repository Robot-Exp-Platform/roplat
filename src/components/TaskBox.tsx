import React, { useState } from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { useDrag } from 'react-dnd';

interface TaskBoxProps {
  taskId: number;
  initialItems?: any[];
  x: number;
  y: number;
}

const TaskBoxContainer = styled.div<{ x: number; y: number }>`
  width: 240px;
  height: 180px;
  background-color: #e6f7ff;
  border: 2px dashed #52c41a;
  padding: 20px;
  border-radius: 8px;
  cursor: move;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  resize: both;
  overflow: hidden;
`;

const TaskItemContainer = styled.div`
  margin-top: 10px;
`;

const TaskItem = styled.div`
  width: 100px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 5px;
  display: inline-block;
`;

const TaskBox: React.FC<TaskBoxProps> = ({ taskId, initialItems = [], x, y }) => {
  const [items, setItems] = useState<any[]>(initialItems);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x, y });

  const [, drop] = useDrop(() => ({
    accept: ['node'],
    drop: (item) => {
      setItems((prevItems) => [...prevItems, item]);
    },
  }));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'taskBox',
    item: { id: taskId, x: position.x, y: position.y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const offset = monitor.getSourceClientOffset();
      const taskAreaRect = document.getElementById('task-area')?.getBoundingClientRect();
      if (offset && taskAreaRect) {
        let newX = offset.x - taskAreaRect.left;
        let newY = offset.y - taskAreaRect.top;
        // Limit to task area
        newX = Math.max(20, Math.min(newX, taskAreaRect.width - 240));
        newY = Math.max(50, Math.min(newY, taskAreaRect.height - 180));
        newX = Math.round(newX / 20) * 20;
        newY = Math.round(newY / 20) * 20;
        setPosition({ x: newX, y: newY });
      }
    },
  }));

  return (
    <TaskBoxContainer
      id={`task-box-${taskId}`}
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      x={position.x}
      y={position.y}
    >
      <div ref={drop}>
        任务 {taskId} (拖入节点)
        <TaskItemContainer>
          {items.map((item, index) => (
            <TaskItem key={index}>{item.name}</TaskItem>
          ))}
        </TaskItemContainer>
      </div>
    </TaskBoxContainer>
  );
};

export default TaskBox;
