import React, { Component } from 'react';

import View from '../common/View/View'
import Article from '../common/Article/Article'

import { projectsHeadings, projectsParagraphs, projectIframeUrl } from '../../static/data'
import './Projects.scss';


export default class Projects extends Component {
  render() {
    return (
      <View history={this.props.history} view="projects">
        <div className="projects-container">
          <Article headings={projectsHeadings} paragraphs={projectsParagraphs} />
          <iframe title="tapsalot" src={projectIframeUrl}></iframe>
        </div>
      </View>
    );
  }
}