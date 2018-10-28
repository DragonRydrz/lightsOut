import React from 'react';
import InfoBox from './InfoBox';

function Dashboard({ prevLevel, nextLevel, moveCount, reset, level }) {
  const { dashboardStyles, boxStyles, changeLevelStyles } = styles;
  const left = '<-';
  const right = '->';
  return (
    <div style={dashboardStyles}>
      <button style={changeLevelStyles} onClick={prevLevel}>
        {left}
      </button>
      <InfoBox title="Level" data={level} />
      <button style={changeLevelStyles} onClick={nextLevel}>
        {right}
      </button>

      <InfoBox title="Moves" data={moveCount} />
      <button style={boxStyles} onClick={() => reset(level)}>
        RESET
      </button>
    </div>
  );
}

const styles = {
  dashboardStyles: {
    display: 'flex',
    justifyContent: 'space-around',
    width: 299,
    margin: '20px auto',
    border: '1px solid black',
  },
  boxStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: 50,
    height: 20,
    alignSelf: 'center',
    margin: 5,
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
  changeLevelStyles: {
    display: 'flex',
    flexDirection: 'column',
    width: 30,
    height: 20,
    alignSelf: 'center',
    margin: 5,
    border: '1px solid black',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
};

export default Dashboard;
