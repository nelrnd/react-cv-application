import React from 'react';
import { Link } from 'react-router-dom';
import CVDocument from '../CVDocument';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { IconContext } from 'react-icons';
import {
  HiOutlinePencilSquare,
  HiOutlineDocumentArrowDown,
} from 'react-icons/hi2';

function PreviewControl({ general, education, work }) {
  return (
    <IconContext.Provider
      value={{
        size: '1.2rem',
        style: { verticalAlign: 'bottom', marginRight: 4 },
      }}
    >
      <div className="preview-control-bar">
        <Link to="/edit" className="button second">
          <HiOutlinePencilSquare /> Edit
        </Link>

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
              loading ? (
                'Loading...'
              ) : (
                <>
                  <HiOutlineDocumentArrowDown /> Download PDF
                </>
              )
            }
          </PDFDownloadLink>
        </button>
      </div>
    </IconContext.Provider>
  );
}

export default PreviewControl;
