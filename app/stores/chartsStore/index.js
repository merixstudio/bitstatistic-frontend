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
  commits,
  users,
} from './queries';

const options = {
  client,
  onError: error => console.log(error),
};

export default new class ChartsStore {
  @query
  repositories = {
    ...options,
    query: repositories,
  };

  @query users = {
    ...options,
    query: users,
  }

}();
