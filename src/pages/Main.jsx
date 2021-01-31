import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

import {Categories, SortPopup, PizzaLoadingBlock} from '../components/index'
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {fetchPizzas} from "../redux/actions/pizzas";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
    {
        name: 'популярности',
        type: 'popular'
    },
    {
        name: 'цене',
        type: 'price'
    },
    {
        name: 'алфавиту',
        type: 'alphabet'
    }
]

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(fetchPizzas())
        }
    }, [])

    const onSelectCategory = React.useCallback((index => {
        dispatch(setCategory(index));
    }), [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categories}/>
                <SortPopup items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
                        : Array(10).fill(<PizzaLoadingBlock/>)
                }
            </div>
        </div>
    )
}

export default Main;