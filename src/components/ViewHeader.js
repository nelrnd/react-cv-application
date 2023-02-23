import React, { Component } from 'react';

class ViewHeader extends Component {
  render() {
    return (
      <header className="view-header">
        <h1>{this.props.fullName}</h1>
        <h2>{this.props.jobTitle}</h2>
      </header>
    );
  }
}

export default ViewHeader;
