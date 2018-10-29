import React from 'react';

function LevelBox({ title, data }) {
  const { boxStyles } = styles;
  return (
    <div className="currentLevel" style={boxStyles}>
      <div>{title}</div>
      <div style={{ fontSize: 28 }}>{data}</div>
    </div>
  );
}
const styles = {
  boxStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: 50,
    height: 50,
    margin: 5,
    border: '1px solid black',
    textAlign: 'center',
  },
};

export default LevelBox;
