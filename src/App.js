import React from 'react';
import Route from 'react-router-dom/Route';

import './App.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/cart'} component={Cart}/>
            </div>
        </div>
    )
}

export default App;