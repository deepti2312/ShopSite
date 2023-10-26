import './Header.css'
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Header = () => {
    const cartsCount = useSelector((state) => state.shop.cart)
    const favCount = useSelector((state) => state.shop.favorites)
    return (
        <>
            <div className='navBar'>
                <nav >
                    <div className='Btn'>
                        <Link to="/" className='homeBtn'><i class="fa fa-home"></i></Link>
                        <Link to="/carts" className='crtbtn'><i class="fa fa-shopping-cart"></i><span className='popup'>{cartsCount.length}</span></Link>
                        <Link to="/favourites" className='favbtn'><i class="fa fa-heart-o"></i><span className='popup'>{favCount.length}</span></Link>
                        <Link to="/login" className='profile'><i class="fa fa-user"></i></Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;