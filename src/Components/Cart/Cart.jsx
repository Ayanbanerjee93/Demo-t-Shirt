import React from 'react';
import './Cart.css';
const Cart = ({cart, handelRemoveFromCart}) => {
    console.log(cart)
    return (
        <div className='cart'>
            <h2>order summery {cart.length}</h2>
            {
                cart.map(tshirt => <p 

                    key={tshirt._id}

                    >{tshirt.name} <button onClick={ ()=> handelRemoveFromCart(tshirt._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Cart;