import React, { Component } from 'react';

class ViewProfileSection extends Component {
  render() {
    return (
      <div className="view-section">
        <h3>Profile</h3>

        <p>{this.props.profile}</p>
      </div>
    );
  }
}

export default ViewProfileSection;
