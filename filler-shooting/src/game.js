import React, { Component } from 'react';
import Cell from './cell';
import { CELL_SIZE, X_TILES, Y_TILES } from './constants';

export default class Game extends Component {
  constructor() {
    super();

    const emptyGrid = Array(Y_TILES).fill(Array(X_TILES).fill(1, 0, X_TILES), 0, Y_TILES);
    this.state = {
      grid: emptyGrid,
    };

  }

  buildRow(row, index) {
    const cells = row.map((cell, index) => <Cell key={`cell-${index}`} filled={cell === 1} />);

    return <div key={index} style={{ height: CELL_SIZE }}> {cells} </div>;
  }

  render() {
    const { grid } = this.state;

    return grid.map((row, index) => this.buildRow(row, index));
  }
}
