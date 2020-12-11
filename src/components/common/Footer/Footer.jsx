import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Footer.scss';

import { footerButton } from '../../../static/constants'

export default class Footer extends Component {
  render() {
    return (
      <a className="footer" href={footerButton.url} target="_blank">
        &copy; {footerButton.text}
      </a>
    );
  }
}