import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import View from '../common/View/View'
import './Home.scss';

import {homeHeading1, homeHeading2, contactButton, resumeButton, homeIntro} from '../../static/constants'


export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     greeting: ''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
  //     .then(response => response.json())
  //     .then(state => this.setState(state));
  // }

  render() {
    return (
      <View history={this.props.history} view="home">
        <div className="home-container">
          <h1>{homeHeading1}</h1>
          <h2>{homeHeading2}</h2>
          <p>{homeIntro}</p>
          <div>
            <Link to={contactButton.url} target={contactButton.target}>{contactButton.text}</Link>
            <a href={resumeButton.url} target={resumeButton.target}>{resumeButton.text}</a>
          </div>
        </div>
      </View>
    );
  }
}
