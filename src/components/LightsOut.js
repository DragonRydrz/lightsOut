import React from 'react';
import Grid from '../components/Grid';
import Dashboard from '../components/Dashboard';
class LightsOut extends React.Component {
  state = {
    boxes: Array(25).fill(false),
    moveCount: 0,
    levelCompleted: false,
    currentLevel: 1,
    maxLevel: 1,
    levels: {
      1: [1, 5, 6, 7, 11, 13, 17, 18, 19, 23],
      2: [0, 1, 3, 4, 5, 9, 15, 19, 20, 21, 23, 24],
      3: [2, 7, 10, 11, 13, 14, 17, 22],
      4: [0, 6, 12, 18, 24],
      5: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      6: [10, 12, 14],
      7: [0, 2, 4, 5, 7, 915, 17, 19, 20, 22, 24],
      8: [1, 3, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 21, 23],
      9: [5, 6, 8, 9, 15, 19, 20, 21, 23, 24],
      10: [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 18, 19, 20, 21, 23, 24],
      11: [10, 12, 14, 15, 17, 19, 21, 22, 23],
      12: [0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23],
      13: [7, 11, 13, 15, 17, 19, 21, 23],
      14: [1, 3, 5, 6, 7, 8, 9, 11, 12, 13, 16, 18, 19, 20, 21, 22],
      15: [1, 2, 3, 6, 7, 8, 11, 12, 13],
      16: [0, 2, 4, 5, 7, 9, 10, 12, 14, 15, 17, 19, 21, 22, 23],
      17: [0, 1, 2, 3, 4, 6, 8, 10, 11, 13, 14, 16, 17, 18, 21, 23],
      18: [3, 7, 9, 11, 13, 15, 17, 21],
      19: [11, 16, 21],
      20: [12, 16, 17, 18, 20, 21, 22, 23, 24],
      21: [2, 6, 8, 10, 12, 14, 16, 18, 22],
      22: [0, 2, 4, 10, 12, 14, 20, 22, 24],
      23: [1, 2, 3, 4, 6, 11, 12, 13, 16, 21],
      24: [10, 14, 15, 16, 17, 18, 19, 21, 24],
      25: [0, 5, 6, 10, 11, 12, 15, 16, 17, 18, 21, 22, 23, 24],
    },
  };
  componentDidMount() {
    const maxLevel = Number(localStorage.getItem('maxLevel'));
    if (maxLevel) {
      this.setState({ currentLevel: maxLevel + 1, maxLevel });
      this.setToLevel(maxLevel + 1);
    } else {
      this.setToLevel(1);
    }
  }
  render() {
    const appStyles = {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px auto',
    };
    return (
      <div style={appStyles}>
        <Grid boxes={this.state.boxes} toggle={this.toggle} />
        <Dashboard
          level={this.state.currentLevel}
          moveCount={this.state.moveCount}
          reset={this.setToLevel}
          nextLevel={this.nextLevel}
          prevLevel={this.prevLevel}
        />
      </div>
    );
  }

  nextLevel = () => {
    console.log(Object.keys(this.state.levels).length);
    if (
      this.state.currentLevel < Object.keys(this.state.levels).length &&
      this.state.currentLevel <= this.state.maxLevel
    ) {
      this.setState({ currentLevel: this.state.currentLevel + 1 });
      this.setToLevel(this.state.currentLevel + 1);
    }
  };

  prevLevel = () => {
    if (!(this.state.currentLevel <= 1)) {
      this.setState({ currentLevel: this.state.currentLevel - 1 });
      this.setToLevel(this.state.currentLevel - 1);
    }
  };

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
      maxLevel: !boxes.includes(true)
        ? Math.max(this.state.currentLevel, this.state.maxLevel)
        : this.state.maxLevel,
    });
    console.log(this.state.moveCount);
    if (!boxes.includes(true)) this.levelCompleted();
  };

  setToLevel = level => {
    // const boxes = [...this.state.boxes];
    // const level = this.state.currentLevel;
    const boxes = this.state.boxes.map((box, index) => {
      return this.state.levels[level].includes(index);
    });
    this.setState({ moveCount: 0, boxes, levelCompleted: false });
  };

  levelCompleted = () => {
    console.log('completed');
    localStorage.setItem('maxLevel', this.state.currentLevel);
    this.setToLevel(this.state.currentLevel + 1);
  };
}

export default LightsOut;
