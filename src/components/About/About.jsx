import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TextLoop from "react-text-loop";

import View from '../common/View/View'
import Article from '../common/Article/Article'
import { aboutParagraphs, aboutHeading, loopText, contactButton, resumeButton } from '../../static/data'
import Image from '../../static/yusuf.png'
import './About.scss';


export default class About extends Component {
  constructor(props) {
    super(props)
    this.loopText = this.loopText.bind(this)
  }

  loopText() {
    return loopText.map((text) => (
      <span key={text}>{text}!</span>
    ))
  }

  render() {
    return (
      <View history={this.props.history} view="about">
        <div className="about-container">
          <h1 className="heading"><TextLoop>{this.loopText()}</TextLoop> {aboutHeading}</h1>
          <div>
            <div className="left">
              <Article paragraphs={aboutParagraphs} />
              <div className="twin-buttons">
                <Link to={contactButton.url} target={contactButton.target}>{contactButton.text}</Link>
                <a href={resumeButton.url} target={resumeButton.target}>{resumeButton.text}</a>
              </div>
            </div>
            <div className="right">
              <img src={Image} alt="handsome developer" />
            </div>
          </div>
        </div>
      </View>
    );
  }
}