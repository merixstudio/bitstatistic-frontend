import { observable } from 'mobx';
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
  onError: error => console.error(error),
};

class ChartsStore {
  @observable startDate = moment().subtract(7, 'd')._d;

  @query
  repositories = {
    ...options,
    query: repositories,
  };

  @query
  commits = {
    ...options,
    query: commits,
    variables: {
      startDate: moment().subtract(7, 'd')._d,
    },
  };

  @query
  users = {
    ...options,
    query: users,
  };

  changeDate = (date) => {
    this.startDate = date;
    this.commits.ref.refetch({
      startDate: date,
    });
  };
}

export default new ChartsStore();
