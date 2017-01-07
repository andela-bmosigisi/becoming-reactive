import React, { Component } from 'react';

class Cell extends Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    const isActive = this.state.active ? "active" : "";
    const classNameStr = `${isActive} cell`;

    return (
      <div className={classNameStr}>
      </div>
    );
  }
}

export default Cell;
