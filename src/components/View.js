import React, { Component } from 'react';
import ViewTopBar from './ViewTopBar';
import ViewProfileSection from './ViewProfileSection';
import ViewEducationSection from './ViewEducationSection';
import ViewWorkSection from './ViewWorkSection';

class View extends Component {
  render() {
    return (
      <>
        <ViewTopBar updateStage={this.props.updateStage} />

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

export default View;
