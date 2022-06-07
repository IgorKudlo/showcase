import React, {useContext, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';
import {ShopContext} from '../context';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
    const { loading, order, isBasketShow, alertName, setGoods } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY,
            }
        }).then(res => res.json())
            .then(json => {
                setGoods(json.shop);
            })
    }, []);

    return (
        <main className="container content">
            <Cart quantity={order.length}/>
            {
                loading
                    ? <Preloader/>
                    : <GoodsList/>
            }
            {isBasketShow && <BasketList/>}
            {alertName && <Alert/>}
        </main>
    );
};

export default Shop;