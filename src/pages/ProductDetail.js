import './ProductDetails.css'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../Card';
import { useSelector } from 'react-redux';


function ProductDetail() {
    const data = useSelector((state) => state.shop.product_data);
    const id = useParams();
    const product = data.find((product) => product.id === Number(id.id))

    return (
        <>
            <div className='profilePage'>

                <div className='details'>
                    <div className='position'>
                        <Products product={product} />
                    </div>
                </div>
                <div className='carts'>
                    {data.map((item) => {
                        return <Products key={item.id} product={item} />
                    })}
                </div>
            </div>

        </>
    )
}

export default ProductDetail;