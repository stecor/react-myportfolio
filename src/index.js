import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter , Route} from 'react-router-dom';


ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={App}/>
      <Route  path={process.env.PUBLIC_URL + "/About"} component={About}/>
      <Route  path={process.env.PUBLIC_URL + "/Work"} component={Work}/>
      <Route  path={process.env.PUBLIC_URL + "/Contact"} component={Contact}/>
    </div>
  </BrowserRouter>), document.getElementById('root'));
