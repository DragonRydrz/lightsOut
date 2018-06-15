import React from 'react';
import Grid from '../components/Grid';

class LightsOut extends React.Component {
  state = {
    boxes: Array(25).fill(false),
  };
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <Grid boxes={this.state.boxes} toggle={this.toggle} />{' '}
      </div>
    );
  }
  toggle = index => {
    const boxes = [...this.state.boxes];
    const top = index - 5;
    const bottom = index + 5;
    const left = index % 5 === 0 ? null : index - 1;
    const right = (index + 1) % 5 === 0 ? null : index + 1;

    if (top >= 0) boxes[top] = !boxes[top];
    if (left) boxes[left] = !boxes[left];
    if (bottom <= 24) boxes[bottom] = !boxes[bottom];
    if (right) boxes[right] = !boxes[right];

    boxes[index] = !boxes[index];

    this.setState({ boxes });
  };
}

export default LightsOut;
