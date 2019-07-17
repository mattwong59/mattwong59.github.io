import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <section className="hero is-small">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <h2 className="logo">MW</h2>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="name">Matt Wong</h1>
            <h2 className="is-size-4 has-text-weight-semibold">
              Full Stack Web Developer
            </h2>

            <section className="section has-text-weight-semibold">
              <div className="container is-fluid">
                {/* <h2 class="title">Summary</h2> */}
                <p>
                  Dedicated developer driven by curiousity to learn new
                  languages/frameworks. Proven ability to quickly adapt &
                  evolve. Experience with Javascript, React, Node, SQL,
                  HTML5/CSS3. Positive, collaborative, & accountable team member
                  who loves to learn & share ideas. I like to balance my love
                  for coding, video games, & tech with running half-marathons,
                  cooking new recipes, and surviving hot yoga classes.
                </p>
              </div>
            </section>
          </div>
        </div>
        <nav className="tabs has-text-weight-semibold">
          <div className="container">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#employment">Employment</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
          </div>
        </nav>
        {/* </div> */}
      </section>
    );
  }
}

export default Header;
