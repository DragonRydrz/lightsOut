import React, { Component } from 'react';
import InfoBox from './InfoBox';

class Dashboard extends Component {
  render() {
    const { dashboardStyles, boxStyles } = styles;
    return (
      <div style={dashboardStyles}>
        <InfoBox title="Level" data={this.props.level} />
        <InfoBox title="Moves" data={this.props.moveCount} />
        <button style={boxStyles} onClick={this.props.reset}>
          RESET
        </button>
      </div>
    );
  }
}

const styles = {
  dashboardStyles: {
    display: 'flex',
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
  },
};

export default Dashboard;
