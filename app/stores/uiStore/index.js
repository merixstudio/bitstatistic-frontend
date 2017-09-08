import {
  observable,
  action,
} from 'mobx';

class UiStore {
  @observable deviceWidth = 320;

  @action changeDeviceWidth(width) {
    this.deviceWidth = width;
  }
}

export default new UiStore();
