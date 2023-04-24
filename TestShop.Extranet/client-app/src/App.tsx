import './css/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { ShippingCartPage } from './pages/ShoppingCartPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<ProductsPage productsGridColumnsCount={3}/>} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="shipping-cart" element={<ShippingCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
