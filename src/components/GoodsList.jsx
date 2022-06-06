import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const {goods = [], addToCart} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {
                goods.map(item => {
                    return <GoodsItem key={item.mainId} {...item} addToCart={addToCart}/>
                })
            }
        </div>
    );
};

export default GoodsList;