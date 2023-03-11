import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ProductProvider } from './contexts/product.context'
import { CartProvider } from './contexts/cart.context'
import './index.css'
import { SaleProvider } from './contexts/sale.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <ProductProvider>
          <SaleProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </SaleProvider>
        </ProductProvider>
      </BrowserRouter>
  </React.StrictMode>
)
