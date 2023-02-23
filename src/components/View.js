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

        <div className="wrapper large view">
          <ViewBar data={this.props.data.general} />
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

class ViewBar extends Component {
  render() {
    const { email, phone, location, photoUrl } = this.props.data;
    return (
      <div className="view-bar">
        <div className="photo-wrapper">
          <img src={photoUrl} alt="avatar"></img>
        </div>

        <div className="contact-wrapper">
          <div>
            <p className="small">Email</p>
            <p>{email}</p>
          </div>

          <div>
            <p className="small">Phone number</p>
            <p>{phone}</p>
          </div>

          <div>
            <p className="small">Location</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default View;
