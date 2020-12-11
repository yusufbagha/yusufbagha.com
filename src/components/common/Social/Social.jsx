import React, { Component } from 'react';

import {linkedinUrl, githubUrl} from '../../../static/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import './Social.scss';


export default class Social extends Component {
  render() {
    return (
      <div className="social-container">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <div className="line">

        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  }
}