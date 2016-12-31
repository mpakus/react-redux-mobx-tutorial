import React, { Component } from 'react';
import './App.css';
import ChatMessages from './components/ChatMessages'
import AddMessage from './components/AddMessage'

export default class App extends Component {
  render() {
    let messages = [
      {name: 'MpaK', text: 'People are always asking me if I know Tyler Durden.'},
      {name: 'Tyler', text: "I am Jack's wasted life."},
      {name: 'Marla', text: "When you have insomnia, you're never really asleep... and you're never really awake."}      
    ] 

    return (
      <div className="app">
        <ChatMessages data={messages} />
        <AddMessage />
      </div>
    );
  }
}
