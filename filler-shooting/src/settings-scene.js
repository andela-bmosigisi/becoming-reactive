import React, { Component } from 'react';

export default class SettingsScene extends Component {
  renderOverScene() {
    const style = {
      fontSize: 30,
      fontWeight: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    };

    return <div style={style}>Game Over!</div>;
  }

  renderSettingsScene() {
    return <div>Settings</div>;
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
