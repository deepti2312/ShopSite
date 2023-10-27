import './Header.css'
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    const cartsCount = useSelector((state) => state.shop.cart)
    const favCount = useSelector((state) => state.shop.favorites)
    const navigate = useNavigate();
    
    const handleLogout = () => {
        let login = false
        localStorage.setItem('login', JSON.stringify(login))
        navigate('/login')
    }
    const login = JSON.parse(localStorage.getItem('login'))
    
    return (
        <>

            {login ? <div className='navBar'>
                <nav >
                    <div className='Btn'>
                        <Link to="/" className='homeBtn'><i class="fa fa-home"></i></Link>
                        <div className='Btn11'>
                            <Link to="/carts" className='crtbtn'><i class="fa fa-shopping-cart"></i><span className='popup'>{cartsCount.length}</span></Link>
                            <Link to="/favourites" className='favbtn'><i class="fa fa-heart-o"></i><span className='popup'>{favCount.length}</span></Link>
                        </div>
                        <Dropdown className='dropdown'>
                            <Dropdown.Toggle className='icon'><i class="fa fa-user"></i></Dropdown.Toggle>
                            <Dropdown.Menu className='menu'>
                                <Dropdown.Item><Link to="/profile" className='font-color'>View profile</Link></Dropdown.Item>
                                <Dropdown.Item><Link to="/login" className='font-color' onClick={handleLogout}>Logout</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                </nav>
            </div> :
                <div className='navBar'>
                    <nav >
                        <div className='Btn'>
                            <Link to="/" className='homeBtn'><i class="fa fa-home"></i></Link>
                            <Link to="/login" className='profile2'><i class="fa fa-user"></i></Link>
                        </div>
                    </nav>
                </div>
            }

        </>
    )
}

export default Header;
