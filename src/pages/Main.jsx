import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components/index'

import {fetchPizzas} from "../redux/actions/pizzas";
import {setCategory} from "../redux/actions/filters";

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

const Main = (callback, deps) => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {sortBy, category} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(fetchPizzas());
        }

    }, [])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
        //todo I GOT A CYBERBULLIED FROM THIS PIECE OF SHIT!
    }, [category, sortBy])

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
                        ? items.map(obj => <PizzaBlock key={obj.id}  isLoading={true} {...obj}/>)
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Main;