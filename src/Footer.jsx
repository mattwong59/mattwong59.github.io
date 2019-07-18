import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            
            <div className="level contact">
                <div className="level-left">
                    <div className="level-item">
                        <h3 className=" is-size-4">Contact</h3><br/>
                    </div>
                    <div className="level-item">
                        <ul>
                            {/* <li>
                                <a href="mailto:mattwong59@gmail.com">
                                    <span class="icon is-small">
                                        <i class="fas fa-md fa-envelope"></i>
                                    </span>
                                    <span class="has-text-weight-bold is-size-6">Email: mattwong59@gmail.com</span>
                                </a>
                            </li> */}
                            <li>
                            <a href="https://www.linkedin.com/in/mattwong59">
                                <span className="icon is-small">
                                    <i className="fas fa-md fab fa-linkedin"></i>
                                </span>
                                <span className="has-text-weight-bold is-size-6">LinkedIn: mattwong59</span>
                            </a>
                            </li><br/>
                            <li>
                            <a href="https://github.com/mattwong59">
                                <span className="icon is-small">
                                    <i className="fas fa-md fab fa-github"></i>
                                </span>
                                <span className="has-text-weight-bold is-size-6">GitHub: mattwong59</span>
                            </a>
                            </li><br/>
                            <li>
                                <a href="tel:+6047904193">
                                <span className="icon is-small">
                                    <i className="fas fa-md fas fa-phone"></i>
                                </span>
                                <span className="has-text-weight-bold is-size-6">604-790-4193</span>
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="email-message">
                        <h3 className="has-text-centered is-size-4">
                            Email Me
                        </h3>        
                    <form action="mailto:mattwong59@gmail.com?subject=Hi Matt" method="post"  encType="text/plain">
                        <textarea className="textarea" type="text"  name="message"  placeholder="Enter message here..."/>
                        <br/>
                        <br/>
                        <div className="email-buttons">
                            <input className="button is-medium is-inverted" type="submit" value="Send"/>
                            <input className="button is-medium is-inverted" type="reset" value="Reset"/>
                        </div>
                    </form>
                </div>

                <div className="level-right">
                    <ul className="bottom-nav">
                        <li><a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li><a className="nav-link" href="#employment">Employment</a></li>
                        <li><a className="nav-link" href="#about">About</a></li>
                    </ul>
                </div>
                    
                <h3 className="has-text-centered is-size-6">
                Created by Matt Wong
                </h3>
            </div>
        </footer>
    )
  }
}

export default Footer;