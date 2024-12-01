import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';

const ConfigAreaContainer = styled.div`
  flex: 1;
  background-color: #e6f7ff;
  padding: 20px;
  border: 2px dashed #1890ff;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
`;

const ConfigItemContainer = styled.div`
  margin-top: 10px;
`;

const ConfigItem = styled.div`
  width: 100px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 5px;
  display: inline-block;
  position: relative;
`;

const ConfigArea: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  const [, drop] = useDrop(() => ({
    accept: ['robot', 'sensor'],
    drop: (item) => {
      setItems((prevItems) => [...prevItems, item]);
    },
  }));

  return (
    <ConfigAreaContainer ref={drop}>
      配置区 (拖入机器人和传感器)
      <ConfigItemContainer>
        {items.map((item, index) => (
          <ConfigItem key={index}>{item.name}</ConfigItem>
        ))}
      </ConfigItemContainer>
    </ConfigAreaContainer>
  );
};

export default ConfigArea;
