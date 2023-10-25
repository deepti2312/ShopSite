import Header from "./Header";
import { useSelector } from 'react-redux';
import { Favourites } from '../Card';

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
        </>
    )
}

export default Favorite;