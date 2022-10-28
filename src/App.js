
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Contact from './components/Contact';
import ListContainer from './components/ListContainer';
import ItemDetail from './components/ItemDetail';
import { CartContextProvider } from './context/cartContext';

function App() {
  return (
    
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
     <Routes>

       <Route path='/home' element={<Home/>} />     
       <Route path='/cart' element={<Cart/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/shop' element={<ListContainer/>} />
       <Route path='/detail/:id' element={<ItemDetail/>} /> 
       
       
     </Routes>
     <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
