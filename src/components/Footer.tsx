import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 RoPlat. All Rights Reserved.</p>
    </footer>
  );
};

const footerStyle: React.CSSProperties = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
