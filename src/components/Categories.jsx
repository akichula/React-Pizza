import React from 'react'

const Categories = React.memo(({items}) => {
    const [activeItem, setActiveItem] = React.useState(null);
    const onSelectedItems = (index) => {
        setActiveItem(index);
    }
    return (
        <div className="categories">
            <ul>
                <li className={ activeItem === null ? 'active' : ''}
                    onClick={() => {
                        onSelectedItems(null)
                    }}>Все
                </li>
                {items && items.map((name, index) =>
                    <li className={activeItem === index ? 'active' : ''}
                        onClick={() => {
                            onSelectedItems(index)
                        }}
                        key={`${name}_${index}`}>
                        {name}</li>)
                }
            </ul>
        </div>
    )
})

export default Categories;