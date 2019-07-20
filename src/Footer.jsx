import React, { Component } from 'react';
import './App.css';

// !NEED TO FIX RESPONSIVENESS ON MOBILE

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className="container has-text-centered">
              <a className= "margin-left" href="https://www.linkedin.com/in/mattwong59" target="_blank">
                <span className="icon">
                    <i className="fas fa-2x fab fa-linkedin"></i>
                </span>
                <span className="has-text-weight-bold is-size-6"></span>
            </a>

            <a className= "margin-left" href="https://github.com/mattwong59" target="_blank">
                <span className="icon">
                    <i className="fas fa-2x fab fa-github"></i>
                </span>
                <span className="has-text-weight-bold is-size-6"></span>
            </a>

            <a className= "margin-left" href="mailto:mattwong59@gmail.com?Subject=Hi%20Matt" target="_blank">
                <span className="icon">
                    <i class="fas fa-2x fa-envelope"></i>
                </span>
                <span className="has-text-weight-bold is-size-6"> </span> 
            </a>

            <div>
                <h3 className="is-size-6 margin-top">
                    Created by Matt Wong
                </h3>
            </div>
                            
            {/* <div className="columns is-mobile">
                <div className="column">
                    <h3 className=" is-size-4">Contact</h3>
                    <br/>
                    <ul id="contact">

                        <li>
                        <a href="https://www.linkedin.com/in/mattwong59" target="_blank">
                            <span className="icon">
                                <i className="fas fa-lg fab fa-linkedin"></i>
                            </span>
                            <span className="has-text-weight-bold is-size-6"> mattwong59</span>
                        </a>
                        </li>
                        <br/>
                        <li>
                        <a href="https://github.com/mattwong59" target="_blank">
                            <span className="icon">
                                <i className="fas fa-lg fab fa-github"></i>
                            </span>
                            <span className="has-text-weight-bold is-size-6"> mattwong59</span>
                        </a>
                        </li>
                        <br/>
                        <li>
                            <a href="tel:+6047904193">
                                <span className="icon">
                                    <i className="fas fa-lg fa-phone"></i>
                                </span>
                                <span className="has-text-weight-bold is-size-6"> 604-790-4193</span>
                            </a>
                        </li>
                        <br/>
                        <li>
                            <a href="mailto:mattwong59@gmail.com?Subject=Hi%20Matt" target="_blank">
                                <span className="icon">
                                    <i class="fas fa-lg fa-envelope"></i>
                                </span>
                                <span className="has-text-weight-bold is-size-6"> mattwong59@gmail.com</span> 
                            </a>
                        </li>
                    </ul>
                </div>
         
                <div className="column is-half has-text-centered is-hidden-mobile">
                        <h3 className="is-size-4">
                            Email Me
                        </h3>        
                    <form action="mailto:mattwong59@gmail.com?
                                    subject=Hi%20Matt" method="post"  encType="text/plain">
                        <textarea className="textarea" type="text"  placeholder="Enter message here..."/>
                        <br/>
                        <br/>
                        <div className="email-buttons">
                            <input className="button is-medium is-inverted" type="submit" value="Send"/>
                            <input className="button is-medium is-inverted" type="reset" value="Reset"/>
                        </div>
                    </form>
                    <h3 className="is-size-6 margin-top">
                        Created by Matt Wong
                    </h3>
                </div>

                <div className="column">
                    <h3 className=" is-size-4 has-text-right">Sections</h3>
                    <br/>
                    <ul id="sections" className="bottom-nav">
                        <li><a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li><a className="nav-link" href="#employment">Employment</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div> */}
            </div>
        </footer>
    )
  }
}

export default Footer;