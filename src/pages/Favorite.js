import './Favourite.css';
import { useSelector } from 'react-redux';
import { Favourites } from '../Card';

const Favorite = () => {

    const data = useSelector((state) => state.shop.favorites);
    return (
        <>
            <div className='fav-grid-container'>
                {data.map((item) => {
                    return <Favourites key={item.id} product={item} />
                })}
            </div>
        </>
    )
}

export default Favorite;