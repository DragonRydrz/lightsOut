import React, { Component } from 'react';
import InfoBox from './InfoBox';

class Dashboard extends Component {
  render() {
    const { dashboardStyles, boxStyles, changeLevelStyles } = styles;
    const left = '<-';
    const right = '->';
    return (
      <div style={dashboardStyles}>
        <button style={changeLevelStyles} onClick={this.props.prevLevel}>
          {left}
        </button>
        <InfoBox title="Level" data={this.props.level} />
        <button style={changeLevelStyles} onClick={this.props.nextLevel}>
          {right}
        </button>

        <InfoBox title="Moves" data={this.props.moveCount} />
        <button
          style={boxStyles}
          onClick={() => this.props.reset(this.props.level)}
        >
          RESET
        </button>
      </div>
    );
  }
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
