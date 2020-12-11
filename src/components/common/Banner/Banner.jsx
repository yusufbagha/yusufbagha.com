import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <a href={this.props.url} 
           target="_blank" rel="noopener noreferrer">
          {this.props.heading}
        </a>
      </div>
    );
  }
}