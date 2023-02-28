import React, { Component } from 'react';
import ViewTopBar from './ViewTopBar';
import ViewBar from './ViewBar';
import ViewHeader from './ViewHeader';
import ViewMain from './ViewMain';

class View extends Component {
  render() {
    return (
      <>
        <ViewTopBar
          updateStage={this.props.updateStage}
          data={this.props.data}
        />

        <div className="wrapper large view">
          <ViewBar data={this.props.data.general} />
          <ViewHeader
            fullName={this.props.data.general.fullName}
            jobTitle={this.props.data.general.jobTitle}
          />
          <ViewMain data={this.props.data} />
        </div>
      </>
    );
  }
}

export default View;
