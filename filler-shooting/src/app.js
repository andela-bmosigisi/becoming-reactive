import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';
import SettingsScene from './settings-scene';
import { CELL_SIZE, SCENES } from './constants';

const style = {
  height: CELL_SIZE * 20,
  width: CELL_SIZE * 10,
  background: '#E0E0E0',
};

class FillerShooting extends React.Component {
  constructor() {
    super();

    this.state = {
      currentScene: SCENES.OVER,
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
