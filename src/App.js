import React from 'react';
import Route from 'react-router-dom/Route';
import {useDispatch} from "react-redux";
import axios from "axios";


import {setPizzas} from "./redux/actions/pizzas";
import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";

import './css/App.css';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3004/pizzas').then(({data}) => {
            dispatch(setPizzas(data))
        });
    })

    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
                <Route exact path={'/'} component={Main} />}/>
                <Route exact path={'/cart'} component={Cart}/>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return ({
//         items: state.pizzas.items
//     })
// }
//
// const mapDispatchToProps = {
//     setPizzas,
// }


export default App;