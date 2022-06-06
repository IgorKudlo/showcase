import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);

    const handleBasketShow = () => {
        setIsBasketShow(!isBasketShow);
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(res => res.json())
            .then(json => {
                setGoods(json.shop);
                setLoading(false);
            })
    }, []);

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            setOrder([...order, { ...item, quantity: 1 }]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (item.id === orderItem.id) {
                    return {...orderItem, quantity: orderItem.quantity + 1}
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
    }

    return (
        <main className="container content">
            <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
            {
                loading
                    ? <Preloader/>
                    : <GoodsList goods={goods} addToCart={addToCart}/>
            }
            {
                isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow}/>
            }
        </main>
    );
};

export default Shop;