import React, { Component } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './CVDocument';

class ViewTopBar extends Component {
  render() {
    return (
      <div className="view-top-bar wrapper large">
        <button className="secondary" onClick={() => this.props.updateStage(3)}>
          Edit
        </button>
        <button className="primary">
          <PDFDownloadLink
            style={{ color: 'white', textDecoration: 'none' }}
            document={
              <CVDocument
                general={this.props.data.general}
                education={this.props.data.education}
                work={this.props.data.work}
              />
            }
            fileName={
              this.props.data.general.fullName
                .toLowerCase()
                .split(' ')
                .join('-') + '-cv.pdf'
            }
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </button>
      </div>
    );
  }
}

export default ViewTopBar;
