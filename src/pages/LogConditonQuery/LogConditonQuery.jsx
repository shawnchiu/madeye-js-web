import React, { Component } from 'react';
import FilterTable from './components/FilterTable';

export default class LogConditonQuery extends Component {
  static displayName = 'LogConditonQuery';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="log-conditon-query-page">
        <FilterTable />
      </div>
    );
  }
}
