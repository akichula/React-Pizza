const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0

};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PiZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {

                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const itemsArray = [].concat.apply([], items);
            const totalPrice = getTotalPrice(itemsArray);

            return {
                ...state,
                items: newItems,
                totalPrice,
                totalCount: itemsArray.length
            }
        }

        case 'CLEAR_CART' :
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0
            }

        default:
            return state;
    }
};

export default cart;
