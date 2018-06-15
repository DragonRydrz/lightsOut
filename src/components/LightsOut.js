import React from 'react';
import Grid from '../components/Grid';
import Dashboard from '../components/Dashboard';
class LightsOut extends React.Component {
  state = {
    boxes: Array(25).fill(false),
    moveCount: 0,
    levelCompleted: false,
    currentLevel: 1,
    levels: {
      1: [1, 5, 6, 7, 11, 13, 17, 18, 19, 23],
      2: [0, 1, 3, 4, 5, 9, 15, 19, 20, 21, 23, 24],
      3: [2, 7, 10, 11, 13, 14, 17, 22],
      4: [0, 6, 12, 18, 24],
      5: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      6: [10, 12, 14],
    },
  };
  componentDidMount() {
    this.setToLevel();
  }
  render() {
    const appStyles = {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px auto',
    };
    return (
      <div style={appStyles}>
        {this.state.levelCompleted ? this.levelCompleted() : null}
        <Grid boxes={this.state.boxes} toggle={this.toggle} />
        <Dashboard
          level={this.state.currentLevel}
          moveCount={this.state.moveCount}
        />
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

    this.setState({
      boxes,
      moveCount: !boxes.includes(true) ? 0 : this.state.moveCount + 1,
      levelCompleted: !boxes.includes(true),
      currentLevel: !boxes.includes(true)
        ? this.state.currentLevel + 1
        : this.state.currentLevel,
    });
    console.log(this.state.moveCount);
    // if (!boxes.includes(true)) this.levelCompleted();
  };

  setToLevel = () => {
    // const boxes = [...this.state.boxes];
    const level = this.state.currentLevel;
    const boxes = this.state.boxes.map((box, index) => {
      return this.state.levels[level].includes(index);
    });
    this.setState({ boxes, levelCompleted: false });
  };

  levelCompleted = () => {
    console.log('completed');
    this.setToLevel();
  };
}

export default LightsOut;
