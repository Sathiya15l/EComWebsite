import React, {useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { setCart } from "../redux/cartSlice";
import '../styles/productDetail.css';

const ProductDetail = ()=>{
    const { id }=useParams();
    const { user }=useContext(AuthContext);
    const [product, setProduct] = useState(null);
    const [loading,setLoading]=useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try {
                const res = await fetch(`/api/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error(error);                
            } finally{
                setLoading(false);
            }
        };
        fetchProduct();
    },[id]);

    const handleAddToCart = async () => 
    {
        if (!product || !user) return;

        try {
            // Add item to backend cart
            await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify({
                    productId: product._id,
                    qty: 1
                })
            });

            // Fetch updated cart
            const res = await fetch("/api/cart", {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });

            const data = await res.json();

            // Update Redux
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

            alert("Successfully added to your cart!");

        } catch (error) {
            console.error(error);
            alert("Failed to add item to cart");
        }
   };
    if(loading)
        return <div className="load-products">Loading Product..</div>;
    if(!product)
        return <div className="no-product">Product Not Found</div>;
    return(
        <div className="product-detail-wrapper">
            <div className="productdisplay">
                <Link to="/" className="link-Home">Home</Link>/
                <Link to="/shop"className="link-Shop">Shop</Link>/{product.category}/
                <span className="spanstyle">{product.name}</span>
            </div>
            <div className="product-detail">
                <div className="detail-image-container">
                    <img src={product.imageUrl} alt={product.name} className="detail-image"/>
                </div>
                <div className="detail-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="detail-price">Rs.{product.price.toFixed(2)}</p>
                    <div className="prod-des">
                        <h4 className="prod-des-title">Product Description</h4>
                        <p className="prod-des-para">{product.description}</p>
                    </div>
                    <div className="cart-action">
                        <button onClick={handleAddToCart} className="btn">Add to shopping Cart</button>
                    </div>
                    <p className="stock-action">
                        {product.stock > 0 ? `In Stock(${product.stock} units available)`:`Temporarily Out of stock`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;