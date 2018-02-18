import React, { Component } from 'react';
import Game from './game';
import SettingsScene from './settings-scene';
import { CELL_SIZE, X_TILES, Y_TILES, SCENES } from './constants';

const style = {
  minHeight: CELL_SIZE * Y_TILES,
  minWidth: CELL_SIZE * X_TILES,
  background: '#E0E0E0',
  padding: CELL_SIZE / 10,
};

export default class FillerShooting extends Component {
  constructor() {
    super();

    this.state = {
      currentScene: SCENES.SETTINGS,
      level: 1,
      speed: 1,
    };
  }

  handleLevelChange(level) { this.setState({ level }); }

  handleSpeedChange(speed) { this.setState({ speed }); }

  handleChangeScene(scene) { this.setState({ currentScene: scene }); }

  render() {
    const { currentScene, level, speed } = this.state;

    return (
      <div style={style}>
        { currentScene === SCENES.GAME &&
          <Game
            speed={speed}
            level={level}
            onRequestEndGame={this.handleChangeScene.bind(this, SCENES.OVER)}
          />
        }
        { currentScene != SCENES.GAME &&
          <SettingsScene
            showOverScene={currentScene === SCENES.OVER}
            showSettingsScene={currentScene === SCENES.SETTINGS}
            onRequestLevelChange={::this.handleLevelChange}
            onRequestSpeedChange={::this.handleSpeedChange}
            onRequestStartGame={this.handleChangeScene.bind(this, SCENES.GAME)}
            level={level}
            speed={speed}
          />
        }
      </div>
    );
  }
}
