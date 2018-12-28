import React,{Component} from 'react';
import { Link } from 'react-router-dom';



class Header extends Component{

  //Set Initial State Of menu
  state={
    showMenu : true,
    page : this.props.name
  }



  toggleMenu=()=>{
    this.setState(prevState=>({
      showMenu: !prevState.showMenu,
    }));
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
                <li className={(this.state.showMenu)? "nav-item": (this.state.page === "Home")?"nav-item current show":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" >Home</Link>
                </li>
                <li className={(this.state.showMenu)? "nav-item": (this.state.page === "About")?"nav-item current show":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/About"} className="nav-link" >About Me</Link>
                </li>
                <li className={(this.showMenu)? "nav-item": (this.state.page === "Work")?"nav-item current show":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/Work"} className="nav-link" >My Work</Link>
                </li>
                <li className={(this.state.showMenu)? "nav-item":(this.state.page === "Contact")?"nav-item current show":"nav-item show"}>
                  <Link to={process.env.PUBLIC_URL + "/Contact"} className="nav-link" >Reach Me</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )

  }

}


export default Header;
