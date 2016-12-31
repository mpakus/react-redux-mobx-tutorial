import React, { Component } from 'react';
import './AddMessage.scss';

export default class AddMessage extends Component {
  render() {
    return (
      <div className="add-message">
        <textarea name="addMessage"></textarea>
        <button>Send</button>
      </div>
    );
  }
}
