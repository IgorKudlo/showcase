import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';

const Shop = () => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <main className="container content">
            {
                loading
                    ? <Preloader/>
                    : <GoodsList goods={goods}/>
            }
        </main>
    );
};

export default Shop;