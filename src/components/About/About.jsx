import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TextLoop from "react-text-loop";

import View from '../common/View/View'
import './About.scss';

import Image from '../../static/yusuf.png'

import {loopText, contactButton, resumeButton} from '../../static/constants'


export default class About extends Component {
  constructor(props) {
    super(props)
    this.loopText = this.loopText.bind(this)
  }

  loopText() {
    return loopText.map((text) => (
      <span>{text}!</span>
    ))
  }

  render() {
    return (
      <View history={this.props.history} view="about">
        <div className="about-container">
          <h1>
            <TextLoop>{this.loopText()}</TextLoop> I'm Yusuf</h1>
          <div>
            <div className="left">
              <p>I'm a full stack Python &amp; JavaScript engineer from New York. I started programming in 2013 and since then I've founded my own company. Worked as an engineering manager at an early stage startup, and most recently as a full stack engineer at <a href="http://pymetrics.ai" target="_blank">pymetrics</a>. You can learn about my full work history by clicking <Link to="/experience">here</Link>.</p>
              {/* <p>I spend my free time hacking together projects and dreaming big. That's my definition of having fun.</p> */}
              {/* <p>Throughout my career I've working in stressful situations, whether that be pressure from investors or a contractual client deadline.</p> */}
              <div>
                <Link to={contactButton.url} target={contactButton.target}>{contactButton.text}</Link>
                <a href={resumeButton.url} target={resumeButton.target}>{resumeButton.text}</a>
              </div>
            </div>
            <div className="right">
              <img src={Image} />
            </div>
          </div>
        </div>
      </View>
    );
  }
}