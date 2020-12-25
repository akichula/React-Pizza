import React from 'react';

import './App.css';

import {Header} from "./components";
import Main from "./pages/Main";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
        </div>
    )
}

export default App;