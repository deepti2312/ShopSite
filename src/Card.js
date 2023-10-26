import './Card.css';
import React from "react";
import { Button } from 'react-bootstrap';
import { addToCart, markFavourite, unmarkFavourite, removeFromCart } from './Reducers';
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
                    <Button className='btn1' onClick={addCarts}>Add to cart</Button>
                    <Button className='btn2' onClick={addFavourite}>Mark favourite</Button>
                </div>

            </div>
        </>
    )
}

function Carts({ product }) {

    const { name, description, price, image } = product
    const dispatch = useDispatch();

    const removeCarts = () => {
        dispatch(removeFromCart(product))
    }
    const moveToFavourite = () => {
        dispatch(markFavourite(product))
        dispatch(removeFromCart(product))
    }

    return (
        <>
            <div className='productCard'>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{description}</p>
                <p>Price : {price}</p>
                <div className='btn'>
                    <Button className='btn1' onClick={removeCarts}>Remove Cart</Button>
                    <Button className='btn2' onClick={moveToFavourite}>Move to Favourites</Button>
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
                    <Button className='btn1' onClick={addCarts}>Add to cart</Button>
                    <Button className='btn2' onClick={removeFavourite}>Remove favourite</Button>
                </div>

            </div>
        </>
    )
}

export { Products, Carts, Favourites };
