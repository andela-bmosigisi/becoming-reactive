/**
 * Generic Controls interface.
 * Extend to handle different types of controls e.g. keyboard, gamepad
 */

import { CONTROLS } from './constants';

const actionsMap = {
  [CONTROLS.UP]: 0,
  [CONTROLS.DOWN]: 0,
  [CONTROLS.LEFT]: 0,
  [CONTROLS.RIGHT]: 0,
  [CONTROLS.DO]: 0,
};

export default class Controls {
  constructor() {
    this._queue = Object.assign({
      timestamp: new Date().getTime(),
    }, actionsMap);
  }

  setAction(action) {
    if (!CONTROLS[action]) {
      // If it isn't a valid control, do nothing.
      return;
    }

    this._queue[action]++;
    this._queue.timestamp = new Date().getTime();
  }

  getActions() {
    return Object.assign({}, this._queue);
  }

  resetActions() {
    this._queue = Object.assign({ timestamp: this._queue.timestamp }, actionsMap);
  }

  // should be implemented in the child classes.
  bindControllers() {}

  unbindControllers() {}
}
