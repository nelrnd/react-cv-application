import React, { Component } from 'react';

class WorkFormSection extends Component {
  render() {
    const { companyName, positionTitle, dateOfWork, mainTasks } =
      this.props.data;

    return (
      <div className='form-section'>
        <h2>Work experience</h2>

        {this.props.data.map((item, index) => {
          return (
            <WorkFormUnit
              data={item}
              key={index}
              index={index}
              handleChange={this.props.handleChange}
            />
          );
        })}
      </div>
    );
  }
}

class WorkFormUnit extends Component {
  render() {
    const { data, index, handleChange } = this.props;
    const { companyName, positionTitle, dateOfWork, mainTasks } = data;
    return (
      <div>
        <div>
          <label htmlFor={'company-name-' + index}>Company name</label>
          <input
            type='text'
            id={'company-name-' + index}
            placeholder='Facebook'
            value={companyName}
            onChange={(event) =>
              handleChange(event, 'companyName', 'work', index)
            }
          />
        </div>

        <div>
          <label htmlFor={'position-title-' + index}>Position title</label>
          <input
            type='text'
            id={'position-title-' + index}
            placeholder='Junior front-end developer'
            value={positionTitle}
            onChange={(event) =>
              handleChange(event, 'positionTitle', 'work', index)
            }
          />
        </div>

        <div>
          <label htmlFor={'date-of-work-' + index}>Date of work</label>
          <input
            type='text'
            id={'date-of-work-' + index}
            placeholder='2022 - 2023'
            value={dateOfWork}
            onChange={(event) =>
              handleChange(event, 'dateOfWork', 'work', index)
            }
          />
        </div>

        <div>
          <label htmlFor={'main-tasks-' + index}>
            Main tasks/achievements
            <span className='details'> (separated by commas)</span>
          </label>
          <textarea
            rows='3'
            id={'main-tasks-' + index}
            placeholder='Example 1, Example 2, Example 3'
            value={mainTasks}
            onChange={(event) =>
              handleChange(event, 'mainTasks', 'work', index)
            }
          ></textarea>
        </div>
      </div>
    );
  }
}

export default WorkFormSection;
