import {
  computed,
  observable,
  action,
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
  onError: error => console.log(error),
};

export default new class ChartsStore {
  @observable startDate = moment().subtract(7, 'd')._d;

  constructor() {
    query(this, 'commits', {
      ...options,
      query: commits,
      variables: {
        startDate: this.startDate,
      },
    });

    query(this, 'repositories', {
      ...options,
      query: repositories,
    });

    query(this, 'users', {
      ...options,
      query: users,
    });
  }

}();
