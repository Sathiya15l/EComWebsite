import React from "react";
import { Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const {user, logout} = useContext(AuthContext);
    const cartItems = useSelector((state)=>state.cart.cartItems);
    //const cartItems = [];
    const navigate = useNavigate();
    const handleLogout = () =>{
        logout();
        navigate('/login');
    };
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to= "/">
                <img src="https://res.cloudinary.com/dxsfir8ob/image/upload/v1782131367/logbg_ei26ib.png" alt="MyShop Logo" className="navbar-logo" />
                MYShop
                </Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
                {user ? (
                    < >
                      <li><Link to="/profile">Hi, {user.name}</Link></li>
                      {user.role === 'admin' && <li><Link to="/admin">Admin</Link></li>}
                      <li><button onClick={handleLogout} className = "btn-logout"></button></li>
                    </>
                ):(
                    <li><Link to="/login">Login</Link></li>
                )}
                
            </ul>
        </nav>
    );
};

export default Navbar;