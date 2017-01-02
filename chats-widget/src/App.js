import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import './App.css';
import ChatMessages from './components/ChatMessages'
import AddMessage from './components/AddMessage'
import AppStore from './AppStore'

// remove window for prod
let store = window.store = new AppStore()

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <ChatMessages store={store} />
        <AddMessage store={store} />
        <DevTools />
      </div>
    );
  }
}
