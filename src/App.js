import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import request from 'superagent'

import NewQuote from './components/NewQuote'
import Home from './components/Home'
import Detail from './components/Detail'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/new' component={NewQuote} />
        <Route path='/quote/:quoteId' component={Detail} />
      </Switch>
    )
  }
}

export default App;
