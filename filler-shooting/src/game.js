import React, { Component } from 'react';
import Cell from './cell';
import { CELL_SIZE, X_TILES, Y_TILES, CONTROLS } from './constants';
import ControllerA from './controllers/keyboard';

export default class Game extends Component {
  constructor(props) {
    super(props);

    const { level, speed } = props;
    const emptyGrid = this.getEmptyGrid();
    const playerCenterX = Math.floor(X_TILES / 2);
    emptyGrid[Y_TILES - 1][playerCenterX] = 1;
    emptyGrid[Y_TILES - 2][playerCenterX] = 1;
    emptyGrid[Y_TILES - 1][playerCenterX - 1] = 1;
    emptyGrid[Y_TILES - 1][playerCenterX + 1] = 1;

    // set up controllers
    this.controllerA = new ControllerA();
    this.controllerA.bindController();

    this.state = {
      grid: emptyGrid,
      lastActionTimestamp: this.controllerA.getActions().timestamp,
      playerCenterX,
      level,
      speed,
    };

    this.startInterval();
  }

  getEmptyGrid() {
    return new Array(Y_TILES).fill(0).map(() => new Array(X_TILES).fill(0, 0, X_TILES));
  }

  startInterval() {
    this.intervalId = setInterval(::this.updateGame, 100);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  componentWillUnmount() {
    this.controllerA.unbindController();
    this.stopInterval();
  }

  updateGame() {
    let grid;
    const actions = this.controllerA.getActions();

    if (actions.timestamp !== this.state.lastActionTimestamp) {
      this.controllerA.resetActions();
      let centerX = this.state.playerCenterX - actions.LEFT + actions.RIGHT;
      centerX = centerX < 0 ? 0 : centerX;
      centerX = centerX >= X_TILES ? X_TILES - 1 : centerX;
      grid = this.drawPlayer(centerX, this.getEmptyGrid());
      this.setState({
        grid,
        playerCenterX: centerX,
        lastActionTimestamp: actions.timestamp,
      });
    }

    // Draw a new line and shift the others here
    // if((this.timestamp - new Date().getTime()) >= 1000) {

    // }
  }

  // return new grid with player drawn.
  drawPlayer(centerPieceX, grid) {
    const newGrid = grid.slice();

    newGrid[Y_TILES - 1][centerPieceX] = 1;
    newGrid[Y_TILES - 2][centerPieceX] = 1;

    // check if edge pieces are within range and draw.
    if ((centerPieceX - 1) >= 0) {
      newGrid[Y_TILES - 1][centerPieceX - 1] = 1;
    }
    if ((centerPieceX + 1) < X_TILES) {
      newGrid[Y_TILES - 1][centerPieceX + 1] = 1;
    }

    return newGrid;
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
