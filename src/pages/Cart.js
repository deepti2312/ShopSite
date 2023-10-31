import './Cart.css';
import { useSelector } from 'react-redux'
import { TotalCart } from '../Card'

const Cart = () => {
    const data = useSelector((state) => state.shop.cart);
    let total = 0
    data.map((item) => total += item.price * item.quantity)
    return (
        <>
            <div>
                <div className="cart">
                    {data.map((item) => {
                        return <TotalCart key={item.id} product={item} />
                    })}
                </div><br />
                <div className="total">
                    <h4>Total Price: {total}rs.</h4>
                </div>
            </div><br />
        </>
    )
}

export default Cart;
