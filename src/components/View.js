import React, { Component } from 'react';
import ViewTopBar from './ViewTopBar';
import GeneralViewSection from './GeneralViewSection';
import EducationViewSection from './EducationViewSection';
import WorkViewSection from './WorkViewSection';

class View extends Component {
  render() {
    return (
      <>
        <ViewTopBar updateStage={this.props.updateStage} />

        <div className='wrapper'>
          <GeneralViewSection data={this.props.data.general} />
          <hr />
          <EducationViewSection data={this.props.data.education} />
          <hr />
          <WorkViewSection data={this.props.data.work} />
        </div>
      </>
    );
  }
}

export default View;
