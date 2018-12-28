import React, { Component } from 'react';
import Header from './Header';
import Portrait from '../images/portrait.jpg';


class About extends Component {


  render() {
    return (

      <div>
        <Header name={"About"}/>
        <main id="About">
          <h1 className="lg-heading">About <span className="text-secondary">Me</span> </h1>
          <h2 className="sm-heading">
            Let me tell you a few things
          </h2>
          <div className="about-info">
            <img src={Portrait} alt="Stefano Corra" className="bio-image"/>
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Illo totam recusandae hic, vitae
                eveniet, eaque harum.
                Similique quisquam, nostrum consequatur
                provident fugiat, nam non tenetur ad aut,
                temporibus asperiores dolorum.</p>
            </div>
            <div className="job job-1">
              <h3>123 Webshop</h3>
              <h6>Full Stack Developer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus assumenda eligendi quam cumque
                voluptate vel excepturi, consectetur aut facilis minima!</p>
            </div>
            <div className="job job-2">
              <h3>Designer ABC</h3>
              <h6>Front End Developer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus assumenda eligendi quam cumque
                voluptate vel excepturi, consectetur aut facilis minima!</p>
            </div>
            <div className="job job-3">
              <h3>WebWorks</h3>
              <h6>Graphic Designer</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus assumenda eligendi quam cumque
                voluptate vel excepturi, consectetur aut facilis minima!</p>
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

export default About;
