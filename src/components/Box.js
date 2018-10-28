import React from 'react';

function Box({ box, toggle, index }) {
  const boxStyle = {
    height: 50,
    width: 50,
    backgroundColor: box ? 'blue' : 'white',
    border: '1px solid black',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <div style={boxStyle} onClick={() => toggle(index)} />;
}

export default Box;
