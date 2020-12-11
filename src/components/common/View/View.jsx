import React, { Component } from 'react';
import './View.scss';

import Header from '../Header/Header'
import Social from '../Social/Social'
import Footer from '../Footer/Footer'

export default class View extends Component {
  render() {
    return (
      <div className="view-container">
        <Header history={this.props.history} view={this.props.view} />
        <div className="page-container">
          <Social />
          <div class="content-container">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}