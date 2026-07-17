import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await fetch('/api/products');
                console.log("Status",res.status);
                const data =await res.json();
                console.log("Data",data);
                setProducts(data.slice(0,4));
            }catch(error){
                console.error(error);
            }finally{
                setLoading(false);
            }

        };
        fetchProducts();
    },[]);
    return (
        <div className="home-container">
            <div className="hero-banner">
                <h1>Welcome to MYShop</h1>
                <p>Your one stop shop for all your traditional and healthy food items. Explore our wide range of products and find exactly what you're looking for!</p>
                
            </div>
            <h2>Featured Products</h2>
            {loading ? 
            (<div className="loading-state">Loading products...</div>):
            (<div className="featured-products-grid">
                {products.length > 0 ? (
                    products.map((product)=><ProductCard key={product._id} product={product} />)
                ) : (
                    <div className="empty-state">No featured products available right now.</div>
                )}
            </div>)
            }
        </div>
    );
};
export default Home;
