import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container has-text-centered">
                <span className="icon">  
                    <a href="https://www.linkedin.com/in/mattwong59" target="_blank">
                    <i className="fas fa-2x fab fa-linkedin"></i>
                    <span className="has-text-weight-bold is-size-6"></span>
                    </a>
                </span>

                <span className="icon icon-padding">
                    <a href="https://github.com/mattwong59" target="_blank">
                        <i className="fas fa-2x fab fa-github"></i>
                        <span className="has-text-weight-bold is-size-6"></span>
                    </a>
                </span>

                <span className="icon">
                    <a href="mailto:mattwong59@gmail.com?Subject=Hi%20Matt" target="_blank">
                    <i class="fas fa-2x fa-envelope"></i>
                    <span className="has-text-weight-bold is-size-6"> </span> 
                    </a>
                </span>

                <h3 className="is-size-6 margin-top">
                    Created by Matt Wong
                </h3>

        {/* BULMA CRED */}
                {/* <a href="https://bulma.io">
                    <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24"/>
                </a> */}
            </div>
        </footer>
    )
  }
}

export default Footer;