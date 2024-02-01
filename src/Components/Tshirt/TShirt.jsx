import React from 'react';
import './TShirt.css';

const TShirt = ({tShirt , handelAddToCart}) => {
    const {picture, price, name} = tShirt
    return (
        <div className='t-shirt'>
            <img src={picture}></img>
            <p>Price: ${price}</p>
            <button onClick={ ()=> handelAddToCart(tShirt)} className=''>Buy</button>
        </div>
    );
};

export default TShirt;