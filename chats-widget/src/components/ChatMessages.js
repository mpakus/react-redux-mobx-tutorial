import React, { Component } from 'react';
import './ChatMessages.scss';

export default class ChatMessages extends Component {
  render() {
    let messages = this.props.data.map(function(item, i){
      return (
        <div key={i}>
          <strong>{item.name}</strong><br/>
          <p>{item.text}</p>
        </div>
      )
    });
    return (
      <div className="chat-messages">
        {messages}
      </div>
    );
  }
}
