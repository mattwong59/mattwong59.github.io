import React from "react";
import './App.css';

class Skills extends React.Component {
    render() {
      return (
        <section id="skills" className="section">
        <h1 className="has-text-centered is-size-2">Skills</h1>
            <div className="container">
                {/* <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical">
                        <div className="tile is-child box">
                            <h2 className="title is-size-4">Languages</h2>
                            <ul>
                                    <li>Javascript</li>
                                    <li>Ruby</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                        </div>
                        <div className="tile is-child box">
                            <h2 className="title is-size-4">Database/RDMS</h2>
                        </div>
                        <div className="tile is-child box">
                            <h2 className="title is-size-4">Software</h2>
                        </div>                    
                    </div>
                    <div className="tile is-child box fram-lib">
                        <h2 className="title is-size-4">Frameworks/Libraries</h2>
                    </div>
                </div> */}
            </div>


<div className="tile is-ancestor has-text-centered">
    
  <div className="tile is-vertical is-8">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="is-child box">
            <h2 className="title is-size-4">Database/RDMS</h2>
            <ul className="is-size-5">
                <li>MongoDB</li>
                <li>SQL</li>
                <li>PSQL</li>
            </ul>
        </article>
        <article className="tile is-child box">
            <h2 className="title is-size-4">Software</h2>
            <ul className="is-size-5">
                <li>Git</li>
                <li>GitHub</li>
                <li>Microsoft Office</li>
                <li>Google Suite</li>
            </ul>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box highlight">
            <h2 className="title is-size-4">Languages</h2>
            <ul className="is-size-5">
                <li><i className="fab fa-js"></i>Javascript</li>
                <li>Ruby</li>
                <li><i className="fab fa-html5"></i>HTML</li>
                <li><i className="fab fa-css3-alt"></i>CSS</li>
            </ul>            
        </article>
      </div>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child box">
        <h2 className="title is-size-4">Frameworks/Libraries</h2>
        <div className="columns">
        <div className="column">
        <ul className="is-size-5 has-text-left">
            <li>React</li>
            <li>SASS</li>
            <li>Node JS</li>
            <li>jQuery</li>
            <li>Ruby on Rails</li>
            <li>Express</li>
        </ul>
        </div>
        <div className="column">
        <ul className="is-size-5 has-text-left">
            <li>EJS</li>
            <li>Babel</li>
            <li>WebSockets</li>
            <li>Ajax</li>
            <li>Knex</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
        </ul>
        </div>
        </div>
    </article>
  </div>
</div>




            {/* <div class="container is-fluid">
            <h2 class="title">Skills</h2>
                <nav class="columns"> 
                    <div class="column">
                        <h3 class="has-text-weight-semibold">LANGUAGES:</h3>
                        <div class="columns">
                            <div class="column">
                                <ul>
                                    <li>Javascript</li>
                                    <li>Ruby</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <h3 class="has-text-weight-semibold">FRAMEWORKS/LIBRARIES:</h3>
                        <div class="column">
                            <ul>
                                <li>React</li>
                                <li>SASS</li>
                                <li>Node JS</li>
                                <li>jQuery</li>
                                <li>Ruby on Rails</li>
                                <li>Express</li>
                                <li>EJS</li>
                                <li>Babel</li>
                                <li>WebSockets</li>
                                <li>Ajax</li>
                                <li>Knex</li>
                                <li>Bootstrap</li>
                                <li>Bulma</li>
                            </ul>
                        </div>
                </div>
                <div class="column">
                    <h3 class="has-text-weight-semibold">DATABASE/RDMS:</h3>
                    <ul>
                        <li>MongoDB</li>
                        <li>SQL</li>
                        <li>PSQL</li>
                    </ul>
                </div>
                <div class="column">
                    <h3 class="has-text-weight-semibold">SOFTWARE:</h3>
                    <div class="columns">
                        <div class="column">
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Microsoft Office</li>
                                <li>Google Suite</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </nav>
      </div> */}
        </section>
        );
    }
}

export default Skills;