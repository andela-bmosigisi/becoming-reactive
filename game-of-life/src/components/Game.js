import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

class Game extends Component {
  constructor() {
    super();
    this.dimensions = 40;
    let cells = Array(this.dimensions);
    for (var i = 0; i < this.dimensions; i++) {
      cells[i] = Array(this.dimensions).fill(0);
    }

    this.state = {
      cells: cells
    };
  }

  startSimulation() {
    this.props.intervalId = setInterval(
      () => {
        this.refreshCellState()
      }, 1000
    );
  }

  resetSimulation() {
    clearInterval(this.props.intervalId);
  }

  refreshCellState() {

  }

  handleCellClick(index) {
    let newCells = [];
    newCells = this.state.cells.map((value, index) => {
      return value.slice();
    })
    let i = Math.floor(index/this.dimensions),
      j = index - (this.dimensions * i);

    newCells[i][j] = newCells[i][j] ? 0 : 1;

    this.setState({
      cells: newCells
    });
  }

  render() {
    return (
      <div className="game">
        <Board dimensions={this.dimensions} cells={this.state.cells}
          handleCellClick={(i) => this.handleCellClick(i) } />
        <Controls
          start={() => this.startSimulation()}
          reset={() => this.resetSimulation()}
        />
      </div>
    );
  }
}

export default Game;
