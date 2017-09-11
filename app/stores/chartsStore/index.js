import {
  computed,
  observable,
  action,
  autorun,
} from 'mobx';
import { query } from 'mobx-apollo';

import moment from 'moment';

import client from '../client';

import {
  repositories,
  users,
  commits,
} from './queries';

const options = {
  client,
  cachePolicy: {
    query: true,
    data: false,
  },
  onError: error => console.log(error),
};

class ChartsStore {
  @observable startDate = moment().subtract(7, 'd')._d;

  @action
  changeDate(date) {
    this.startDate = date;
  }

  constructor() {
    query(this, 'repositories', {
      ...options,
      query: repositories,
    });

    query(this, 'users', {
      ...options,
      query: users,
    });
  }

}

const store = new ChartsStore();

autorun(() => {
  query(store, 'commits', {
    ...options,
    query: commits,
    variables: {
      startDate: store.startDate,
    },
  });
});

export default store;
