import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Main from './Main';
import '../../styles/Preview.css';

function Preview({ general, education, work, setStage }) {
  return (
    <div className="preview">
      <Sidebar general={general} />
      <Header general={general} />
      <Main general={general} education={education} work={work} />
    </div>
  );
}

export default Preview;
