import React from 'react';
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

const Main = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);

    const onSelectCategory = React.useCallback((index => {
        dispatch(setCategory(index));
    }),[])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categories}/>
                <SortPopup items={[
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
                ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj => <PizzaBlock key={obj.id} {...obj}/>)
                }
            </div>
        </div>


    )
}

export default Main;