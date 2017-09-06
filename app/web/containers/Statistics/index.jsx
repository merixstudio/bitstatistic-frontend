import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Chart } from '../../components';

import './Statistics.scss';

@observer(['charts'])
export default class Statistics extends Component {

  componentWillMount() {
    this.props.charts.fetchRepositories();
  }

  render() {
    const repositories = [...this.props.charts.repositories];

    return (
      <div className="statistics">
        {!!repositories.length && <Chart
          title="Repositories"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          data={repositories}
        />}
      </div>
    );
  }
}
