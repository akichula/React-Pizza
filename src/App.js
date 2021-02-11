import React from 'react';

import Route from 'react-router-dom/Route';

import {Header} from "./components";
import {Main, Cart} from "./pages";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
                <Route exact path={'/'} component={Main}/>
                <Route exact path={'/cart'} component={Cart}/>
            </div>
        </div>
    );
}

export default App;