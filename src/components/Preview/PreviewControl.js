import React from 'react';
import CVDocument from '../CVDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';

function PreviewControl({ setStage, general, education, work }) {
  return (
    <div className="preview-control-bar">
      <button className="second" onClick={() => setStage(3)}>
        Edit
      </button>

      <button className="main">
        <PDFDownloadLink
          document={
            <CVDocument general={general} education={education} work={work} />
          }
          fileName={`${general.fullName
            .toLowerCase()
            .split(' ')
            .join('-')}-cv.pdf`}
          style={{ color: 'white', textDecoration: 'none' }}
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </button>
    </div>
  );
}

export default PreviewControl;
