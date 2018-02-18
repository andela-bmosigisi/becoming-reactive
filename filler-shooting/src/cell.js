import React, { Component } from 'react';
import { CELL_SIZE } from './constants';

export default class Cell extends Component {
  renderInnerCell() {
    const { filled } = this.props;
    const style = {
      backgroundColor: filled ? '#404040': '#E0E0E0',
      height: '100%',
      width: '100%',
    };

    return <div style={style} />
  }

  render() {
    const style = {
      height: CELL_SIZE,
      width: CELL_SIZE,
      padding: CELL_SIZE / 10,
      display: 'inline-block',
      boxSizing: 'border-box',
    };

    return (
      <div style={style}>
        { this.renderInnerCell() }
      </div>
    );
  }
}
