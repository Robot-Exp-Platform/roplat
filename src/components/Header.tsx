import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>RoPlat Platform</h1>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  fontSize: '24px',
};

export default Header;
