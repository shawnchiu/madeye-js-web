import React, { Component } from 'react';
import EnhanceTable from './components/EnhanceTable';

export default class Business extends Component {
  static displayName = 'Business';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="business-page">
        <EnhanceTable />
      </div>
    );
  }
}
