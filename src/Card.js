import './Card.css';
import React from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addToCart } from './Action';
import store from './store'

function Products({ product }) {
    const { name, description, price, image } = product
    const navigate = useNavigate()

    const addCarts = ({product}) => {
        store.dispatch(addToCart(product))
        navigate('/carts')
    }
    const addFavourite = () => {
        navigate('/favourites')
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
                    <Button className='btn2'onClick={addFavourite}>Mark favourite</Button>
                </div>
                
            </div>
        </>
    )
}

export default Products;