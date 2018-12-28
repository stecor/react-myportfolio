import React, { Component } from 'react';
import Header from './Header';
import Project1 from '../images/projects/project1.jpg';
import Project2 from '../images/projects/project2.jpg';
import Project3 from '../images/projects/project3.jpg';
import Project4 from '../images/projects/project4.jpg';
import Project5 from '../images/projects/project5.jpg';

class Work extends Component {

  render() {
    return (
      <div>
        <Header name={"Work"}/>
        <main id="work">
          <h1 className="lg-heading">My <span className="text-secondary">Work</span> </h1>
          <h2 className="sm-heading">
            Check out some of my projects
          </h2>
          <div className="projects">

            <div className="item">
              <a href="#/">
                <img src={Project1} alt="project1"/>
                <a href="#" className="btn-light">
                  <i className="fas fa-eye"></i> Project
                </a>
                <a href="#" className="btn-dark">
                  <i className="fab fa-github"></i> Github
                </a>
              </a>
            </div>

            <div className="item">
              <a href="#/">
                <img src={Project2} alt="project2"/>
                <a href="#" className="btn-light">
                  <i className="fas fa-eye"></i> Project
                </a>
                <a href="#" className="btn-dark">
                  <i className="fab fa-github"></i> Github
                </a>
              </a>
            </div>

            <div className="item">
              <a href="#/">
                <img src={Project3} alt="project3"/>
                <a href="#" className="btn-light">
                  <i className="fas fa-eye"></i> Project
                </a>
                <a href="#" className="btn-dark">
                  <i className="fab fa-github"></i> Github
                </a>
              </a>
            </div>

            <div className="item">
              <a href="#/">
                <img src={Project4} alt="project4"/>
                <a href="#" className="btn-light">
                  <i className="fas fa-eye"></i> Project
                </a>
                <a href="#" className="btn-dark">
                  <i className="fab fa-github"></i> Github
                </a>
              </a>
            </div>

            <div className="item">
              <a href="#/">
                <img src={Project5} alt="project5"/>
                <a href="#" className="btn-light">
                  <i className="fas fa-eye"></i> Project
                </a>
                <a href="#" className="btn-dark">
                  <i className="fab fa-github"></i> Github
                </a>
              </a>
            </div>

          </div>
        </main>

        <footer id="main-footer">
          Copyright &copy; 2018
        </footer>
      </div>
    );
  }

}

export default Work;
