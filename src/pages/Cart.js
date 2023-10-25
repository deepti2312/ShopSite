import Header from "./Header";
import { useSelector } from 'react-redux'
import { Carts } from '../Card'
import Footer from './Footer';

const Cart = () => {
    const data = useSelector((state) => state.shop.cart);
    let total = 0
    data.map((item) => total += item.price)
    return (
        <>
            <Header />
            <div className='grid-container'>
                {data.map((item) => {
                    return <Carts key={item.id} product={item} />
                })}
            </div>
            <div>
                <h3>Total Price: {total}rs.</h3>
            </div>
            <Footer />
        </>
    )
}

export default Cart;
