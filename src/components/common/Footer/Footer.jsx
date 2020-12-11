import React, { Component } from 'react';
import './Footer.scss';

import { footerButton } from '../../../static/data'

export default class Footer extends Component {
  render() {
    return (
      <a className="footer" href={footerButton.url} target="_blank" rel="noopener noreferrer">
        &copy; {footerButton.text}
      </a>
    );
  }
}