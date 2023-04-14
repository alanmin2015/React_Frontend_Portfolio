
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import React from 'react';
import About from './components/About/About';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Project from './components/Project/Project';

function App() {
  return (
    <div >
  
     <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/skill">
          <Skill />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
      </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
