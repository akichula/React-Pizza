export const setSortBy = ({type, order}) => {
    return {
        type: 'SET_SORT_BY',
        payload: {type, order},
    }
}

export const setCategory = (categoryIndex) => {
    return {
        type: 'SET_CATEGORY',
        payload: categoryIndex,
    }
}

