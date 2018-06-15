import React, { Component } from 'react';

class Box extends Component {
  render() {
    const boxStyle = {
      height: 50,
      width: 50,
      backgroundColor: this.props.box ? 'blue' : 'white',
      border: '1px solid black',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div style={boxStyle} onClick={() => this.props.toggle(this.props.index)}>
        {this.props.index}
      </div>
    );
  }
}

const boxStyle = {
  height: 50,
  width: 50,
};

export default Box;
