import React, { Component } from 'react';
import './Social.scss';

import {linkedinUrl, githubUrl} from '../../../static/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'


export default class Social extends Component {
  render() {
    return (
      <div className="social-container">
        <a href={linkedinUrl} target="_blank" className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <div className="line">

        </div>
        <a href={githubUrl} target="_blank" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}