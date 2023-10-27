import Dashboard from './Component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import Nopage from './pages/Nopage'
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Protected from './pages/Protected';


function App() {

  let login = JSON.parse(localStorage.getItem('login'))

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/carts' element={<Protected Component={login ? Cart : Login} />} />
        <Route path='/favourites' element={<Protected Component={login ? Favorite : Login} />} />
        <Route path='/product-details/:id' element={<Protected Component={login ? ProductDetail : Login} />} />
        <Route path='/profile' element={<Protected Component={login ? Profile : Login} />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Nopage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
