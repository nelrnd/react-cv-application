import React, { Component } from 'react';
import ViewProfileSection from './ViewProfileSection';
import ViewEducationSection from './ViewEducationSection';
import ViewWorkSection from './ViewWorkSection';

class ViewMain extends Component {
  render() {
    return (
      <div className="view-main">
        <ViewProfileSection profile={this.props.data.general.profile} />
        <hr />
        <ViewEducationSection education={this.props.data.education} />
        <hr />
        <ViewWorkSection work={this.props.data.work} />
      </div>
    );
  }
}

export default ViewMain;
