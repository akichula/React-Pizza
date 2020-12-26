import React from 'react';
import Route from 'react-router-dom/Route';

import './App.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

const App = () => {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((response) => response.json())
            .then((json) => setPizzas(json.pizzas));
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
                <Route exact path={'/'} render={() => <Main items={pizzas}/>}/>
                <Route exact path={'/cart'} component={Cart}/>
            </div>
        </div>
    )
}

export default App;