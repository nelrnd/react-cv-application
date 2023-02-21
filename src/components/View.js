import React, { Component } from 'react';
import GeneralViewSection from './GeneralViewSection';
import EducationViewSection from './EducationViewSection';
import WorkViewSection from './WorkViewSection';

class View extends Component {
  render() {
    return (
      <div className="wrapper">
        <GeneralViewSection data={this.props.general} />
        <hr />
        <EducationViewSection data={this.props.education} />
        <hr />
        <WorkViewSection data={this.props.work} />
      </div>
    );
  }
}

export default View;
