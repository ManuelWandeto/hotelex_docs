import React from 'react';

export default Highlight = ({children, bg, color}) => (
  <span
    style={{
      backgroundColor: bg,
      borderRadius: '2px',
      color,
      padding: '2px 8px',
    }}>
    {children}
  </span>
);
