import Controls from '../controls';
import { CONTROLS } from '../constants';

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  A: 65,
  D: 68,
  SPACE: 32,
  ENTER: 13
};

export default class Keyboard extends Controls {
  constructor() {
    super();
  }

  bindController() {
    window.addEventListener('keydown', this.handleKeys.bind(this, true));
  }

  unbindController() {
    window.removeEventListener('keydown', this.handleKeys);
  }

  handleKeys(value, e){
    switch (e.keyCode) {
      case KEY.LEFT:
      case KEY.A:
        this.setAction(CONTROLS.LEFT);
        return;
      case KEY.RIGHT:
      case KEY.D:
        this.setAction(CONTROLS.RIGHT);
        return;
      case KEY.SPACE:
      case KEY.ENTER:
        this.setAction(CONTROLS.DO);
        return;
    }
  }
}
