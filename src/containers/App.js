import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Education from '../components/Education/Education';
import Activities from '../components/Activities/Activities';
import About from '../components/About/About';
import Main from '../components/Main/Main';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <BrowserRouter basename="/Portfolio">
          <Layout/>
          <Switch>
            <Route exact path="/" component={Main} key="Main"/>
            <Route path="/about" component={About} key="About" />
            <Route path="/activities" component={Activities} key="Activities" />
            <Route path="/projects" component={Projects} key="Projects" />
            <Route path="/education" component={Education} key="Education"/>
            <Route path="/contact" component={Contact} key="Contact"/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
