import React from "react";
import "./App.css";

class Projects extends React.Component {
  render() {
    return (
      <section id="projects" className="section has-text-centered dark">
        <div className="has-text-centered is-size-2 dark  ">
          <h1>Projects</h1>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <a
              href="https://github.com/mattwong59/Beer-Cat-Tourism-App"
              target="_blank"
              rel="noopener noreferrer"
              className="project-title tile is-child is-size-4"
            >
              <figure className="image is-256x256">
                <img
                  src={require("./docs/beer-cat-browser-frame.png")}
                  alt="Screenshot of beer cat tours page."
                />
                Beer Cat Tourism App
                <p className="is-size-5">React, Ruby on Rails, HTML, CSS</p>
              </figure>
            </a>
          </div>

          <div className="tile is-parent">
            <a
              href="https://github.com/mattwong59/chatty-app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-title is-size-4 tile is-child"
            >
              <figure className="image is-256x256">
                <img
                  src={require("./docs/chatty-2users.png")}
                  alt="Screenshot of chatty with 2 users sending messages."
                />
                Chatty App
                <p className="is-size-5">React, WebSockets, Express, CSS</p>
              </figure>
            </a>
          </div>

          <div className="tile is-parent">
            <a
              href="https://github.com/mattwong59/decider_midterm"
              target="_blank"
              rel="noopener noreferrer"
              className="project-title is-size-4 tile is-child"
            >
              <figure className="image is-256x256">
                <img
                  src={require("./docs/decider-poll-browser-frame.png")}
                  alt="Screenshot of decider home page."
                />
                Decider
                <p className="is-size-5">
                  Node, Express, EJS, PSQL, SASS, AJAX.
                </p>
              </figure>
            </a>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <a
              href="https://github.com/mattwong59/jungle-rails"
              target="_blank"
              rel="noopener noreferrer"
              className="project-title is-size-4 tile is-child"
            >
              <figure className="image is-256x256">
                <img
                  src={require("./docs/product-page.png")}
                  alt="Screenshot of jungle's product page."
                />
                Jungle
                <p className="is-size-5">Ruby on Rails, Ruby</p>
              </figure>
            </a>
          </div>

          <div className="tile is-parent">
            <figure className="image is-256x256">
              <a
                href="https://github.com/mattwong59/tweeter"
                target="_blank"
                rel="noopener noreferrer"
                className="project-title is-size-4 tile is-child"
              >
                <img
                  src={require("./docs/tweeter-browser-frame.png")}
                  alt="Screenshot of tweeter home page"
                />
                Tweeter
                <p className="is-size-5">
                  HTML, CSS, JS, jQuery, AJAX, Node, Express, MongoDB
                </p>
              </a>
            </figure>
          </div>

          <div className="tile is-parent">
            <figure className="image is-256x256">
              <a
                href="https://github.com/mattwong59/tinyApp"
                target="_blank"
                rel="noopener noreferrer"
                className="project-title is-size-4 tile is-child"
              >
                <img
                  src={require("./docs/tiny-app-browser-frame.png")}
                  alt="Screenshot of tiny app urls page."
                />
                Tiny App
                <p className="is-size-5">Node, Express</p>
              </a>
            </figure>
          </div>
        </div>

        <a
          href="https://github.com/mattwong59"
          className="button is-medium is-inverted"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon is-centered">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
      </section>
    );
  }
}

export default Projects;
