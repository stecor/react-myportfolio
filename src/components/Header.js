import React,{Component} from 'react';
import { Link } from 'react-router-dom';



class Header extends Component{

  //Set Initial State Of menu
  state={
    showMenu : true
  }



  toggleMenu=()=>{
    this.setState(prevState=>({
      showMenu: !prevState.showMenu,
    }));
    console.log(this.state.showMenu);
  }


  render(){

    return(

        <div>
          <header>
            <div className={(this.state.showMenu)? "menu-btn":"menu-btn close"} onClick={this.toggleMenu}>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
              <div className="btn-line"></div>
            </div>

            <nav className={(this.state.showMenu)? "menu":"menu show"}>
              <div className={(this.state.showMenu)? "menu-branding":"menu-branding show"}>
                <div className="portrait"></div>
              </div>
              <ul className={(this.state.showMenu)? "menu-nav":"menu-nav show"}>
                <li className={(this.state.showMenu)? "nav-item current":"nav-item current show"}>
                  <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" >Home</Link>
                </li>
                <li className={(this.state.showMenu)? "nav-item":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/About"} className="nav-link" >About Me</Link>
                </li>
                <li className={(this.showMenu)? "nav-item":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/Work"} className="nav-link" >My Work</Link>
                </li>
                <li className={(this.state.showMenu)? "nav-item":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/Contact"} className="nav-link" >Reach Me</Link>
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
      )

  }

}


export default Header;
