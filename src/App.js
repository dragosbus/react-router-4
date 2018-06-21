import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/teachers" component={Teachers}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
