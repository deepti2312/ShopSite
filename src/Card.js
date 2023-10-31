import './Card.css';
import React from "react";
import { addToCart, markFavourite, unmarkFavourite, removeFromCart, increment, decrement } from './Reducers';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Products({ product }) {
    const { id, name, description, price, image } = product
    const dispatch = useDispatch();

    const addCarts = () => {
        dispatch(addToCart(product))
    }
    const addFavourite = () => {
        dispatch(markFavourite(product))
    }

    return (
        <>
            <div className='productCard'>
                <Link to={'/product-details/' + id}><img src={image} alt={name} /></Link>
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : {price}</p>
                <div className='btn'>
                    <button className='btn1' onClick={addCarts}>Add to cart</button>
                    <button className='btn2' onClick={addFavourite}>Mark favourite</button>
                </div>

            </div>
        </>
    )
}

function Favourites({ product }) {

    const { name, description, price, image } = product
    const dispatch = useDispatch();

    const addCarts = () => {
        dispatch(addToCart(product))
        dispatch(unmarkFavourite(product))
    }
    const removeFavourite = () => {
        dispatch(unmarkFavourite(product))
    }

    return (
        <>
            <div className='productCard'>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : {price}</p>
                <div className='btn'>
                    <button className='btn1' onClick={addCarts}>Add to cart</button>
                    <button className='btn2' onClick={removeFavourite}>Remove favourite</button>
                </div>

            </div>
        </>
    )
}

function TotalCart({ product }) {
    let { name, description, price, image, quantity } = product
    const dispatch = useDispatch();

    const removeCarts = () => {
        dispatch(removeFromCart(product))
    }
    const moveToFavourite = () => {
        dispatch(markFavourite(product))
        dispatch(removeFromCart(product))
    }
    const incrementQuantity = () => {
        dispatch(increment(product))
    }
    const decrementQuantity = () => {
        dispatch(decrement(product))
    }
    return (
        <>
            <div className='showcart'>
                <img src={image} alt={name} />
                <h4 className='name'>{name}</h4>
                <p className='description'>{description}</p>
                <h6 className='price'>Price : {price}</h6>
                <h6 className='quantity'>Quantity: <button onClick={incrementQuantity}>+</button> {quantity} <button onClick={decrementQuantity}>-</button></h6>
                <button className='btn11' onClick={removeCarts}>Remove Cart</button>
                <button className='btn22' onClick={moveToFavourite}>Move to Favourites</button>
            </div>

        </>
    )
}

export { Products, Favourites, TotalCart };
