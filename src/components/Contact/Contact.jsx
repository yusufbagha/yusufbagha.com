import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import View from '../common/View/View'
import './Home.scss';

import {homeHeading1, homeHeading2, homeButton1, homeButton2, homeIntro} from '../../static/constants'


export default class Contact extends Component {
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
        <div className="contact-container">
          
        </div>
      </View>
    );
  }
}
