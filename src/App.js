import Dashboard from './Component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Nopage from './pages/Nopage'
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/favourites' element={<Favorite />} />
        <Route path='/product-details/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
