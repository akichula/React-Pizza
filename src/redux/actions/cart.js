export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PiZZA_CART',
    payload: pizzaObj
})

export const clearCart = () => ({
    type: 'CLEAR_CART'
})
