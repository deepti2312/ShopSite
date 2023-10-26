import './Cart.css';
import Header from "./Header";
import { useSelector } from 'react-redux'
import { TotalCart } from '../Card'
import Footer from './Footer';

const Cart = () => {
    const data = useSelector((state) => state.shop.cart);
    let total = 0
    data.map((item) => total += item.price)
    return (
        <>
            <Header />
            <div>
                <div className="cart">
                    {data.map((item) => {
                        return <TotalCart key={item.id} product={item} />
                    })}
                </div><br/>
                <div className="total">
                    <h4>Total Price: {total}rs.</h4>
                </div>
            </div><br/>
            <Footer />
        </>
    )
}

export default Cart;
