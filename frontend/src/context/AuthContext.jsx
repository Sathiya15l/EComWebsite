import React, { createContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart,setCart } from "../redux/cartSlice";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
    const dispatch = useDispatch();
    const [user, setUser] = useState(localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null);
    useEffect(() => {
        const loadCart = async () => {
            if (!user) return;

            try {
                const res = await fetch("/api/cart", {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });

                if (!res.ok) return;

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
            } catch (error) {
                console.error(error);
            }
        };

        loadCart();
    }, [user, dispatch]);

    const login = async (userData) => 
    {
        setUser(userData);
        localStorage.setItem("userInfo", JSON.stringify(userData));

        try {
            const res = await fetch("/api/cart", {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                }
            });

            if (!res.ok) {
                throw new Error("Failed to fetch cart");
            }

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
        } catch (error) {
            console.error("Error loading cart:", error);
        }
   };

    const logout = ()=>{
        dispatch(clearCart());
        setUser(null);
        localStorage.removeItem("userInfo")
    };

    return (
        <AuthContext.Provider value = {{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};