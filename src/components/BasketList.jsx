import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const {order = [], handleBasketShow} = props;

    const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity, 0)

    return (
        <div className="collection basket-list">
            <li className="collection-item active">Basket</li>
            {
                order.length
                    ? order.map(item => <BasketItem key={item.id} {...item}/>)
                    : <li className="collection-item">Empty basket</li>
            }
            <li className="collection-item active">Total price: {totalPrice}$</li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </div>
    );
};

export default BasketList;