import React, { Component } from 'react';

import View from '../common/View/View'
import './Experience.scss';

import { workHistory } from '../../static/data'


export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.workHistory = this.workHistory.bind(this)
    this.workDescription = this.workDescription.bind(this)
  }

  workDescription(descriptions) {
    return descriptions.map((description)  => (
      <li key={description}>{description}</li>
    ))
  }

  workHistory() {
    return workHistory.map((experience) => (
      <div className="job-container" key={experience.startDate}>
        <div className="job-heading">
          <h2>{experience.company}, {experience.position}, {experience.startDate} - {experience.endDate}</h2>
        </div>
        <div className="job-description">
          {this.workDescription(experience.descriptions)}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <View history={this.props.history} view="experience">
        <div className="experience-container">
          <h1 className="heading">Work Experience</h1>
          {this.workHistory()}
        </div>
      </View>
    );
  }
}