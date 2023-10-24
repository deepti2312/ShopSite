import './Header.css'
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    const showCarts = () => {
        navigate('/carts')
    }

    const showFavourites = () => {
        navigate('/favourites')
    }
    return (
        <>
            <div className='navBar'>
                <nav className="me-auto" >
                    <button className='cartBtn' onClick={showCarts}><i class="fa fa-shopping-cart"></i></button>
                    <button className='cartBtn' onClick={showFavourites}><i class="fa fa-heart-o"></i></button>
                </nav>
            </div>
        </>
    )
}

export default Header;