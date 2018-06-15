import React, { Component } from 'react';
import Box from './Box';

class Grid extends Component {
  render() {
    const gridStyle = {
      height: 299,
      width: 299,
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto',
    };
    return (
      <div style={gridStyle}>
        {this.props.boxes.map((box, index) => {
          return <Box toggle={this.props.toggle} box={box} index={index} />;
        })}
      </div>
    );
  }
}

export default Grid;
