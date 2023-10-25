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
                <nav className="me-auto" >
                    <Link to="/carts" className='crtbtn'><i class="fa fa-shopping-cart"></i><span className='popup'>{cartsCount.length}</span></Link>
                    <Link to="/favourites" className='crtbtn'><i class="fa fa-heart-o"></i><span className='popup'>{favCount.length}</span></Link>
                    <Link to="/" className='profile'><i class="fa fa-user"></i></Link>
                </nav>
            </div>
        </>
    )
}

export default Header;