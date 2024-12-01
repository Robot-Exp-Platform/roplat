import React from 'react';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

interface DraggableItemProps {
  type: string;
  name: string;
}

const ItemContainer = styled.div<{ isDragging: boolean }>`
  width: 100px;
  padding: 10px;
  margin: 5px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isDragging ? 0.5 : 1)};
  cursor: grab;
  display: inline-block;
`;

const DraggableItem: React.FC<DraggableItemProps> = ({ type, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    item: { type, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <ItemContainer ref={drag} isDragging={isDragging}>
      {name}
    </ItemContainer>
  );
};

export default DraggableItem;