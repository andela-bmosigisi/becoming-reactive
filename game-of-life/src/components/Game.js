import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Board dimensions={20} />
      </div>
    );
  }
}

export default Game;
