import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import View from '../common/View/View'
import './Experience.scss';

import {workHistory} from '../../static/constants'


export default class Experience extends Component {
  constructor(props) {
    super(props)
    this.workHistory = this.workHistory.bind(this)
    this.workDescription = this.workDescription.bind(this)
  }

  workDescription(descriptions) {
    return descriptions.map((description)  => (
      <div>{description}</div>
    ))
  }

  workHistory() {
    return workHistory.map((experience) => (
      <div>
        <div>
          <div className="left">
            <h2>{experience.company}, {experience.position}</h2>
          </div>
          <div className="right">
            <h3>{experience.startDate} - {experience.endDate}</h3>
          </div>
        </div>
        {this.workDescription(experience.descriptions)}
      </div>
    ));
  }

  render() {
    return (
      <View history={this.props.history} view="experience">
        <div className="experience">
          <h1>Work Experience</h1>
          {this.workHistory()}
        </div>
      </View>
    );
  }
}