import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../Tshirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';



const Home = () => {
    const tShirts= useLoaderData();
    const [cart , setCart] = useState([]);

    const handelAddToCart= (tShirt) =>{
        const exists= cart.find( ts=> ts._id === tShirt._id )

        if(exists){
            toast('You have already added this t-shirt')
        }
        else{
            
            const newCart= [...cart, tShirt];
            setCart(newCart);
        }

    }

    const handelRemoveFromCart= id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    } 

    return (
        <div className='home-container'>
            
            <div className="tShirt-container">
            {
                    tShirts.map(tShirt => <TShirt
                    key={tShirt._id}
                    tShirt={tShirt}
                    handelAddToCart={handelAddToCart}
                    ></TShirt>)
                }
            </div>


          <div className="cart-container">
                <Cart 
                cart={cart}
                handelRemoveFromCart={handelRemoveFromCart}
                ></Cart>
          </div>


        </div>
    );
};

export default Home;