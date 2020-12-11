import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import View from '../common/View/View'
import Article from '../common/Article/Article';
import {homeHeadings, homeParagraphs, contactButton, resumeButton} from '../../static/data'
import './Home.scss';


export default class Home extends Component {
  render() {
    return (
      <View history={this.props.history} view="home">
        <div className="home-container">
          <Article headings={homeHeadings} paragraphs={homeParagraphs} />
          <div className="twin-buttons">
            <Link to={contactButton.url} target={contactButton.target}>{contactButton.text}</Link>
            <a href={resumeButton.url} target={resumeButton.target}>{resumeButton.text}</a>
          </div>
        </div>
      </View>
    );
  }
}
