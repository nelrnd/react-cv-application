import React, { Component } from 'react';

class FormEducationSection extends Component {
  render() {
    return (
      <div className="form-section">
        <h2>Education</h2>

        {this.props.data.map((item, index) => {
          return (
            <FormEducationUnit
              data={item}
              key={index}
              index={index}
              handleChange={this.props.handleChange}
              removeSchool={this.props.removeSchool}
              positionSchool={this.props.positionSchool}
            />
          );
        })}

        <button className="outline center" onClick={this.props.addSchool}>
          Add new education
        </button>
      </div>
    );
  }
}

class FormEducationUnit extends Component {
  render() {
    const { data, index, handleChange } = this.props;
    const { schoolName, titleOfStudy, dateOfStudy } = data;
    return (
      <div className="unit">
        <div>
          <label htmlFor={'school-name-' + index}>School name</label>
          <input
            type="text"
            id={'school-name-' + index}
            placeholder="The Odin Project"
            value={schoolName}
            onChange={(event) =>
              handleChange(event, 'schoolName', 'education', index)
            }
          />
        </div>

        <div>
          <label htmlFor={'title-of-study-' + index}>Title of study</label>
          <input
            type="text"
            id={'title-of-study-' + index}
            placeholder="Full Stack JavaScript"
            value={titleOfStudy}
            onChange={(event) =>
              handleChange(event, 'titleOfStudy', 'education', index)
            }
          />
        </div>

        <div>
          <label htmlFor={'date-of-study-' + index}>Date of study</label>
          <input
            type="text"
            id={'date-of-study-' + index}
            placeholder="2020 - 2022"
            value={dateOfStudy}
            onChange={(event) =>
              handleChange(event, 'dateOfStudy', 'education', index)
            }
          />
        </div>

        <div className="btn-row">
          <button
            className="small"
            onClick={() => this.props.removeSchool(index)}
          >
            Remove
          </button>

          <button
            className="small"
            onClick={() => this.props.positionSchool(index, index - 1)}
          >
            ▲ Go up
          </button>

          <button
            className="small"
            onClick={() => this.props.positionSchool(index, index + 1)}
          >
            ▼ Go down
          </button>
        </div>
      </div>
    );
  }
}

export default FormEducationSection;