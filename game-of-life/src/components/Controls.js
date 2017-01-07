import React, { Component } from 'react';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <button className="control-button"
          onClick={() => this.props.random()}>Random</button>
        <button className="control-button"
          onClick={() => this.props.start()}>Start</button>
        <button className="control-button"
          onClick={() => this.props.reset()}>Reset</button>
      </div>
    )
  }
}

export default Controls;
