import {  Route, Routes } from 'react-router-dom'
import './App.css'
import TopProducts from './components/top-products/top-products.component'
import CheckOut from './routes/checkout/checkout.component'
import Navigation from './routes/navigation/navigation.component'
import Shop from './routes/shop/shop.component'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<TopProducts/>}/>
        <Route path="shop/*" element={<Shop/>} />
        <Route path="checkout" element={<CheckOut/>} />
      </Route>
    </Routes>
  )
}

export default App
