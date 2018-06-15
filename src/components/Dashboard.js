import React, { Component } from 'react';
import InfoBox from './InfoBox';

class Dashboard extends Component {
  render() {
    const { dashboardStyles } = styles;
    return (
      <div style={dashboardStyles}>
        <InfoBox title="Level" data={this.props.level} />
        <InfoBox title="Moves" data={this.props.moveCount} />
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
};

export default Dashboard;
