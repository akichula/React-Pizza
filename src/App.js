import React from 'react';
import Route from 'react-router-dom/Route';
import {connect} from "react-redux";

import './App.css';

import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import axios from "axios";
import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";


class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzasAction(data.pizzas)
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className='content'>
                    <Route exact path={'/'} render={() => <Main items={this.props.items}/>}/>
                    <Route exact path={'/cart'} component={Cart}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.pizzas.items
    })
}

const mapDispatchToProps = {
    setPizzasAction,
}


export default connect(mapStateToProps, mapDispatchToProps)(App);