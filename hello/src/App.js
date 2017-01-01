import React, { Component } from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages'

export default class App extends Component {
  render() {
    let messages = [
      {name: 'MpaK', text: 'People are always asking me if I know Tyler Durden.'},
      {name: 'Tyler', text: "I am Jack's wasted life."},
      {name: 'Marla', text: "When you have insomnia, you're never really asleep... and you're never really awake."}      
    ] 

    return (
      <div className="App">
        <ChatMessages data={messages} />
      </div>
    );
  }
}
