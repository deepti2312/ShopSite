import './Component.css';
import React from "react";
import { Products } from './Card';
import Header from './pages/Header';
import { useSelector } from 'react-redux';
import Footer from './pages/Footer';

function Dashboard() {

    const data = useSelector((state) => state.shop.product_data);
    return (
        <>
            <Header />
            <div className='grid-container'>
                {data.map((product) => {
                    return <Products key={product.id} product={product} />
                })}
            </div>
            <Footer />
        </>

    )
}

export default Dashboard;
