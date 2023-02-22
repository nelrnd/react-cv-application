import React, { Component } from 'react';

class ViewTopBar extends Component {
  render() {
    return (
      <div className='view-top-bar wrapper'>
        <button className='secondary'>Edit</button>
        <button className='primary'>Download</button>
      </div>
    );
  }
}

export default ViewTopBar;
