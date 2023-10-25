import './Footer.css'
import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>  
            <div className="footer">
                    <Link to="/" className="footerBtn"><i class="fa fa-home"></i></Link>
                    <Link to="/" className="footerBtn"><i class="fa fa-search"></i></Link>
            </div>
        </>
    )
}

export default Footer;