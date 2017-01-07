import React, { Component } from 'react';

class Cell extends Component {
  render() {
    const isActive = this.props.active ? "active" : "";
    const classNameStr = `${isActive} cell`;

    return (
      <div className={classNameStr}
        onClick={() => this.props.handleClick(this.props.index) }>
      </div>
    );
  }
}

export default Cell;
