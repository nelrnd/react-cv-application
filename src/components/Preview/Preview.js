import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import PreviewControl from './PreviewControl';
import '../../styles/Preview.css';

function Preview({ general, education, work }) {
  return (
    <>
      <PreviewControl general={general} education={education} work={work} />
      <div className="preview">
        <Sidebar general={general} />
        <Header general={general} />
        <Main general={general} education={education} work={work} />
      </div>
    </>
  );
}

export default Preview;
