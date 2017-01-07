import React, { Component } from 'react';
import Board from './Board';
import Controls from './Controls';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Board dimensions={20} />
        <Controls />
      </div>
    );
  }
}

export default Game;
