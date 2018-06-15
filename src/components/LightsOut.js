import React from 'react';
import Grid from '../components/Grid';

class LightsOut extends React.Component {
  state = {
    boxes: Array(25).fill(false),
  };
  render() {
    console.log(this.state.boxes);
    return (
      <div style={{ marginTop: 20 }}>
        <Grid boxes={this.state.boxes} toggle={this.toggle} />{' '}
      </div>
    );
  }
  toggle = index => {
    const boxes = [...this.state.boxes];
    console.log(boxes);
  };
}

export default LightsOut;
