import axios from "axios";

export const setLoaded = (value) => ({
        type: 'SET_LOADING',
        payload: value
})

export const fetchPizzas = () => (dispatch) => {
        dispatch(setLoaded(false))
        axios.get('http://localhost:3004/pizzas').then(({data}) => {
                dispatch(setPizzas(data))
        });
};

export const setPizzas = (items) => ({
        type: 'SET_PIZZAS',
        payload: items,
});

