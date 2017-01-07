import React, { Component } from 'react';

class Cell extends Component {

  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    let isActive = this.state.active ? "active" : "inactive";
    let classNameStr = `${isActive} cell`;

    return (
      <div className={classNameStr}>
      </div>
    );
  }
}

export default Cell;
