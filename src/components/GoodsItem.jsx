import React from 'react';

const GoodsItem = (props) => {
    const {
        mainId: id,
        displayName: name,
        displayDescription: description,
        price: {finalPrice: price},
        displayAssets: [{background: background}]

    } = props;

    return (
        <div className="card">
            <div className="card-image">
                <img src={background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn">Buy</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price}$</span>
            </div>
        </div>
    );
};

export default GoodsItem;