import {  Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/product-card/product-card.component'
import CheckOut from './routes/checkout/checkout.component'
import Navigation from './routes/navigation/navigation.component'
import Shop from './routes/shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Shop/>}/>
        <Route path="shop/*" element={<Shop/>} />
        <Route path="checkout" element={<CheckOut/>} />
      </Route>
    </Routes>
  )
}

export default App
