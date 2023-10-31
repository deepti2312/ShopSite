import './Component.css';
import React from "react";
import { Products } from './Card';
import { useSelector } from 'react-redux';
import Search from './pages/Search';

function Dashboard() {

    const data = useSelector((state) => state.shop.product_data);
    return (
        <>
            <div className='page'>
                <div className='searchBar'>
                    <Search />
                </div>
                <div className='grid-container'>
                    {data.map((product) => {
                        return <Products key={product.id} product={product} />
                    })}
                </div>
            </div>
        </>

    )
}

export default Dashboard;
