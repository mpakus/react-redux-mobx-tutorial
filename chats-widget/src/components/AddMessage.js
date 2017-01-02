import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './AddMessage.scss';

@observer 
export default class AddMessage extends Component {
  addMessage(e){
    this.props.store.addMessage(this.newMessage.value)
    this.newMessage.value = ''
    this.newMessage.focus()
    e.preventDefault()
    return false
  }

  render() {
    return (
      <div className="add-message">
        <textarea name="addMessage" placeholder="Type your message..." defaultValue="" ref={(ref) => this.newMessage = ref}></textarea>
        <button onClick={this.addMessage.bind(this)}>Send</button>
      </div>
    );
  }
}
