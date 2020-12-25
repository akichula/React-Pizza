import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from "react-router-dom/BrowserRouter";
import Route from 'react-router-dom/Route';


import './index.css';

import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Route exact path={'/'} component={App}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
