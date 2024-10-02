
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainHome from './pages/MainHome'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import './App.css'

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainHome />} />
        
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
