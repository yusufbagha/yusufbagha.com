import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import View from '../common/View/View'
import Article from '../common/Article/Article'
import {contacts, contactHeadings, contactParagraphs} from '../../static/data'
import './Contact.scss';


export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.contactMethods = this.contactMethods.bind(this)
  }

  contactMethods() {
    return contacts.map((contact)  => (
      <div key={contact.text}>
        <a href={contact.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={contact.icon} />
          <p>{contact.text}</p>
        </a>
      </div>
    ))
  }

  render() {
    return (
      <View history={this.props.history} view="contact">
        <div className="contact-container">
          <Article headings={contactHeadings} paragraphs={contactParagraphs} />
          <div className="contact-methods">
            {this.contactMethods()}
          </div>
        </div>
      </View>
    );
  }
}
