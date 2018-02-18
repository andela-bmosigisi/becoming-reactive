import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import SettingsScene from './settings-scene';
import { CELL_SIZE, X_TILES, Y_TILES, SCENES } from './constants';

const style = {
  minHeight: CELL_SIZE * Y_TILES,
  minWidth: CELL_SIZE * X_TILES,
  background: '#E0E0E0',
  padding: CELL_SIZE / 10,
};

class FillerShooting extends React.Component {
  constructor() {
    super();

    this.state = {
      currentScene: SCENES.SETTINGS,
    };
  }

  render() {
    const { currentScene } = this.state;

    return (
      <div style={style}>
        { currentScene === SCENES.GAME && <Game /> }
        { currentScene != SCENES.GAME &&
          <SettingsScene
            showOverScene={currentScene === SCENES.OVER}
            showSettingsScene={currentScene === SCENES.SETTINGS}
          />
        }
      </div>
    );
  }
}

ReactDOM.render(<FillerShooting />, document.getElementById('app'));
