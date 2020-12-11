import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

import { navLinks, topBanner, initials, enableHeaderResume, headerResumeButton } from '../../../static/constants'
import Banner from '../Banner/Banner'


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.generateNavLinks = this.generateNavLinks.bind(this)
  }

  generateNavLinks() {
    return navLinks.map((link) => (
      <Link 
        to={`/${link.url}`}
        key={link.url}
        className={this.props.view == link.url && 'underline'}>{link.name}</Link>
    ));
  }

  render() {
    return (
      <div className="header-container">
        <Banner heading={topBanner.heading} url={topBanner.url} />
        <div className="header">
          <div className="right">
            <h2 onClick={() => {this.props.history.push('/')}}>{initials}</h2>
          </div>
          <div className="left">
            {this.generateNavLinks()}
            {enableHeaderResume &&
              <a href={headerResumeButton.url} target={headerResumeButton.target} className="resume">{headerResumeButton.text}</a>
            }
          </div>
        </div>
      </div>
    );
  }
}
