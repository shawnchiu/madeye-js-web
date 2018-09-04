import React, { Component } from 'react';
import PieDoughnutChart from './components/PieDoughnutChart';

export default class Dashboard extends Component {
  static displayName = 'Dashboard';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard-page">
        <PieDoughnutChart />
      </div>
    );
  }
}
