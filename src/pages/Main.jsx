import React from 'react';

import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from '../components/index'

import {fetchPizzas} from "../redux/actions/pizzas";
import {setCategory, setSortBy} from "../redux/actions/filters";

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

function Main() {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {sortBy, category} = useSelector(({filters}) => filters);

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
        //todo I GOT A CYBERBULLIED FROM THIS PIECE OF SHIT!
    }, [])

    const onSelectorType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categories}
                />

                <SortPopup
                    items={sortItems}
                    activeSortType={sortBy.type}
                    onCLickSortType={onSelectorType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>)
                        : Array(12)
                            .fill(0)
                            .map((_, index) => <PizzaLoadingBlock key={index}/>)
                }
            </div>
        </div>
    )
}

export default Main;