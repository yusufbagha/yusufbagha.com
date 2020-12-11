import React, { Component } from 'react';
import parse from 'html-react-parser';

import './Article.scss';


export default class Article extends Component {
  constructor(props) {
    super(props)
    this.displayHeading = this.displayHeading.bind(this)
    this.displayText = this.displayText.bind(this)
  }

  displayHeading() {
    if (this.props.headings) {
      return this.props.headings.map((heading)  => (
        <h1 key={heading}>{parse(heading)}</h1>
      ))
    }
  }

  displayText() {
    if (this.props.paragraphs) {
      return this.props.paragraphs.map((paragraph)  => (
        <p key={paragraph}>{parse(paragraph)}</p>
      ))
    }
  }

  render() {
    return (
      <div className="article-container">
        {this.displayHeading()}
        {this.displayText()}
      </div>
    );
  }
}