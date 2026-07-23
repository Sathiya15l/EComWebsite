import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCart } from '../redux/cartSlice';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from "react";
import { api } from '../utils/api';

import '../styles/cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    if (user) {
        loadCart();
    }}, [user]);

  const loadCart = async () =>{

        const res = await fetch(api("/api/cart"), {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        const data = await res.json();

        dispatch(
            setCart(
                data.items.map(item => ({
                    _id: item.product._id,
                    name: item.product.name,
                    price: item.product.price,
                    imageUrl: item.product.imageUrl,
                    qty: item.qty
                }))
            )
        );
    };

  const handleRemove = async (id) => {

        await fetch(api(`/api/cart/${id}`), {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        await loadCart();
    };
  const handleUpdateQty = async (item, qty) => {

        if (qty <= 0) return;

        await fetch(api(`/api/cart/${item._id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ qty })
        });

        await loadCart();
   };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop">Go Shopping</Link></p>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="qty-controls">
                    <button onClick={() => handleUpdateQty(item, item.qty - 1)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => handleUpdateQty(item, item.qty + 1)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item._id)} className="btn-remove">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
            <button onClick={() => navigate('/checkout')} className="btn btn-checkout">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;