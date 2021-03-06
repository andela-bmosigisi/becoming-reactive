import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  centeredFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  gameOver: {
    fontSize: 30,
    fontWeight: 500,
  },
  formGroup: {
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  label: {
    marginRight: 20,
  },
};

export default class SettingsScene extends Component {
  renderOverScene() {
    return <div style={{ ...style.gameOver, ...style.centeredFlex }}>Game Over!</div>;
  }

  renderSettingsScene() {
    const {
      onRequestLevelChange,
      onRequestSpeedChange,
      onRequestStartGame,
      level,
      speed,
    } = this.props;

    return (
      <div style={style.fullWidth}>
        <div style={{ ...style.leftFlex, ...style.formGroup }}>
          <span style={style.label}>Level:</span>
          <select onChange={(e) => onRequestLevelChange(Number(e.target.value))} value={level}>
            { Array(10).fill(0).map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>) }
          </select>
        </div>
        <div style={{ ...style.leftFlex, ...style.formGroup }}>
          <span style={style.label}>Speed:</span>
          <select onChange={(e) => onRequestSpeedChange(Number(e.target.value))} value={speed}>
            { Array(10).fill(0).map((_, index) => <option key={index} value={index + 1}>{index + 1}</option>) }
          </select>
        </div>
        <div style={{ ...style.formGroup }}>
          <button onClick={onRequestStartGame}> Start Game </button>
        </div>
      </div>
    );
  }

  render() {
    const { showOverScene, showSettingsScene } = this.props;

    return (
      <div>
        { showOverScene && this.renderOverScene() }
        { showSettingsScene && this.renderSettingsScene() }
      </div>
    );
  }
}

SettingsScene.propTypes = {
  showOverScene: PropTypes.bool.isRequired,
  showSettingsScene: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  onRequestLevelChange: PropTypes.func.isRequired,
  onRequestSpeedChange: PropTypes.func.isRequired,
  onRequestStartGame: PropTypes.func.isRequired,
};
