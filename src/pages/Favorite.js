import Header from "./Header";
import { useSelector } from 'react-redux';
import { Favourites } from '../Card';
import Footer from './Footer';

const Favorite = () => {

    const data = useSelector((state) => state.shop.favorites);
    return (
        <>
            <Header />
            <div className='grid-container'>
                {data.map((item) => {
                    return <Favourites key={item.id} product={item} />
                })}
            </div>
            <Footer />
        </>
    )
}

export default Favorite;