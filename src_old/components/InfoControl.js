import React, { Component } from 'react';

class InfoControl extends Component {
  render() {
    return (
      <div className="info-control">
        <button onClick={this.props.fillState}>Pre-fill info</button>
        <button onClick={this.props.clearState}>Clear info</button>
      </div>
    );
  }
}

export default InfoControl;
