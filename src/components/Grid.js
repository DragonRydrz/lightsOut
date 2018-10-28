import React from 'react';
import Box from './Box';

function Grid({ boxes, toggle }) {
  const gridStyle = {
    height: 299,
    width: 299,
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
    border: '1px solid black',
    backgroundColor: 'gray',
  };
  return (
    <div style={gridStyle}>
      {boxes.map((box, index) => {
        return <Box key={index} toggle={toggle} box={box} index={index} />;
      })}
    </div>
  );
}

export default Grid;
