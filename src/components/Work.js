import React, { Component } from 'react';
import Header from './Header';

class Work extends Component {

  render() {
    return (
      <div>
        <Header name={"Work"}/>
        <main id="home">
          <h1 className="lg-heading">Stefano <span className="text-secondary">Corra</span> </h1>
          <h2 className="sm-heading">
            Web Developer, Programmer & Designer
          </h2>
          <div className="icons">
            <a href="#!">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#!">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
      </div>
    );
  }

}

export default Work;
