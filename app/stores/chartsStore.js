import {
  observable,
  action,
} from 'mobx';

import moment from 'moment';

class ChartsStore {
  @observable repositories = [];
  @observable isFetching = false;

  @action fetchRepositories() {
    // temp static solution
    this.repositories = [
      { date: moment().format('DD/MM/YYYY'), commits: 44 },
      { date: moment().day(-1).format('DD/MM/YYYY'), commits: 65 },
      { date: moment().day(-2).format('DD/MM/YYYY'), commits: 33 },
      { date: moment().day(-6).format('DD/MM/YYYY'), commits: 63 },
      { date: moment().day(-4).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-7).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-24).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-8).format('DD/MM/YYYY'), commits: 43 },
      { date: moment().day(-16).format('DD/MM/YYYY'), commits: 43 },
    ];
  }
}

export default new ChartsStore();
