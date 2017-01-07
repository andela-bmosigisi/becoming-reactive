import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  getRows() {
    const dimensions = this.props.dimensions;
    let rows = Array(dimensions);

    for (let i = 0; i < dimensions; i++) {
      rows[i] = [];
      for (let j = 0; j < dimensions; j++) {
        rows[i].push(<Cell key={(i * dimensions) + j} />);
      }
    }

    return rows;
  }

  render() {
    const rows = this.getRows();

    return (
      <div className="board">
        {rows.map((val, index) => {
          return <div className="row" key={index}> {val} </div>;
        })}
      </div>
    );
  }
}

export default Board;
