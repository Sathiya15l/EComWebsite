import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Disclaimer from './pages/Disclaimer'
import ReturnPolicy from './pages/ReturnPolicy'
import Register from './pages/Register'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Shop from './pages/Shop'
import AdminDashboard from './admin/AdminDashboard'
import AddProduct from './admin/AddProduct'
import AdminProducts from './admin/AdminProducts'
import AdminOrders from './admin/AdminOrders'
import EditProduct from './admin/EditProduct'
import AdminUsers from './admin/AdminUsers'
import Cart from './pages/cart'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'
import OrderSuccess from './pages/OrderSuccess'

function App() {
  return (
    // <h1>Hello World</h1>
    
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="/admin" element={<AdminDashboard />}/>
          <Route path="/admin/add-product" element={<AddProduct />}/>
          <Route path='/admin/products' element={<AdminProducts />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ordersuccess" element={<OrderSuccess />}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App
