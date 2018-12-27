import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <div className="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/About"} className="nav-link" >About Me</Link>
          </li>
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/Work"} className="nav-link" >My Work</Link>
          </li>
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/Contact"} className="nav-link" >How to Reach Me</Link>
          </li>
        </ul>
      </nav>
    </header>
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

export default Header;
