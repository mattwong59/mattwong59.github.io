import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './App.css';

class Employment extends Component {
    render() {
      return (
        <section id="employment" className="section">
          <h1 className="has-text-centered is-size-2">Employment</h1>
          <div className="container is-centered has-text-centered">
            <div className="tile is-ancestor jobs">
            <div className="tile is-parent">
                <div className= "container is-fluid">
                  <h4 className="is-size-5">Ipsos</h4>
                  <p className="has-text-weight-semibold">Junior Developer</p>
                  <p className="date">Aug 2018 to Present</p>
                  <ul className="job-duties">
                    <li>Optimize & develop procedures part of the data warehouse to   improve users' experience
                    </li>
                    <li>Contribute to the planning, development, testing of new features/reports</li>
                    <li>Convert approved specs to reports using HTML, CSS, & SQL</li>
                    <li>Adopt/refine the team's workflow & clearly document work</li>
                    <li>Create daily performance alert emails</li> 
                  </ul>
                </div>
              </div>



              <div className="tile is-parent">
                <div className= "container is-fluid">
                  <h4 className="is-size-5">Bianchina Interiors</h4>
                  <p className="has-text-weight-semibold">Project Manager</p>
                  <p className="date">Feb 2016 to Feb 2018</p>
                  <ul className="job-duties">
                    <li>Developed and maintained inventory and progress records of project</li>
                    <li>Ensured high quality standards with attention to detail</li>
                    <li>Respectively worked in a cross functional workplace using interpersonal skills</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="tile is-ancestor jobs">
            <div className="tile is-parent">
                <div className= "container is-fluid">
                  <h4 className="is-size-5">Study English in Canada (SEC)</h4>
                  <p className="has-text-weight-semibold">ESL Business Protocol Instructor</p>
                  <p className="date">Jun 2015 to Jan 2016</p>
                  <ul className="job-duties">
                    <li>Assessed language skills with attention to detail and delivered constructive criticism in a professional manner</li>
                    <li>Implemented constructive criticism to improve my skills</li>
                    <li>Managed time effectively and met deadlines</li>
                  </ul>
                </div>
              </div>
              <div className="tile is-parent">
                <div className= "container is-fluid">
                  <h4 className="is-size-5">Kid's College (South Korea)</h4>
                  <p className="has-text-weight-semibold">ESL Instructor</p>
                  <p className="date">Mar 2014 to Feb 2015</p>
                  <ul className="job-duties">
                    <li>Collaborated with management and other instructors</li>
                    <li>Documented learning plans and progress clearly and accurately</li>
                    <li>Developed individual plans for each student, to track and monitor their progress toward goals</li>
                  </ul>
                </div>
              </div>
              {/* <div className="tile is-parent">
                <div className= "container is-fluid">
                  <h4 className="is-size-5">King George International College (KGIC)</h4>
                  <p className="has-text-weight-semibold">ESL Instructor</p>
                  <p className="date">Mar 2012 - Feb 2014, Jan 2011 - Sep 2011</p>
                  <ul className="job-duties">
                    <li>Documented complex information with attention to clarity</li>
                    <li>Iterated over lesson plans to meet customer needs</li>
                    <li>Collaborated with co-workers to build a positive learning environment</li>
                  </ul>
                </div>  
              </div> */}
            </div>
          </div>
        </section>
        );
    }
}

export default Employment;          