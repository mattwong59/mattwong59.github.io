import React, { Component } from 'react';
import Header  from './Header.js';
import Projects  from './Projects.js';
// import Skills  from './Skills.jsx';
import Employment from './Employment.jsx';
import Miscellaneous from './Miscellaneous.jsx';
import Footer from './Footer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        {/* <Skills /> */}
        <Employment />
        <Miscellaneous />
        <Footer />
        </div>
    );
  }
}

export default App;
