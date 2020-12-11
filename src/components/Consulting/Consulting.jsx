import React, { Component } from 'react';

import View from '../common/View/View'
import Article from '../common/Article/Article'
import { clients, consultingHeadings, consultingParagraphs } from '../../static/data'
import './Consulting.scss';


export default class Consulting extends Component {
  constructor(props) {
    super(props)
    this.displayClients = this.displayClients.bind(this)
  }

  displayClients() {
    return clients.map((client) => (
      <a href={client.url} target="_blank">
        {client.company} {client.project && `- ${client.project}`} - {client.year}
      </a>
    ));
  }

  render() {
    return (
      <View history={this.props.history} view="consulting">
        <div className="consulting-container">
          <Article headings={consultingHeadings} paragraphs={consultingParagraphs} />
          <div className="clients-container">
            {this.displayClients()}
          </div>
        </div>
      </View>
    );
  }
}
