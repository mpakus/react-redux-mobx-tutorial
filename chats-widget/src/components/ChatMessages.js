import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './ChatMessages.scss';

@observer
export default class ChatMessages extends Component {
  render() {
    let messages = this.props.store.messages.map(function(item, i){
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
