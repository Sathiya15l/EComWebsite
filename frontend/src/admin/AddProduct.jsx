import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import '../styles/AddProduct.css';



const AddProduct = ()=>{
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData,setFormData] = useState({name:'',description:'',price: '', category: '', stock: ''});
    const [image, setImage]=useState(null);
    const [loading,setLoading] = useState(false);
    // useEffect(() => {
    //     if (!user || user.role !== "admin") {
    //     navigate("/");
    // }
    // }, [user, navigate]);
    
    if (!user || user.role !== 'admin') {        
        return null;
    }
    console.log("Submit clicked");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if (!image) { return alert("Please select an image");}
        setLoading(true);
        const data = new FormData();
        data.append('name',formData.name);
        data.append('description',formData.description);
        data.append('price',formData.price);
        data.append('category',formData.category);
        data.append('stock',formData.stock);
        data.append("image", image);

        try{
            const res=await fetch('/api/products',{method:'POST',
                headers:{Authorization:`Bearer ${user.token}`},
                body:data
            });
            console.log(res.status);
            const responseData = await res.json();
            console.log(responseData);
            if(res.ok){
                alert('Product created successfully with cloudinary Image URL');
                navigate('/shop');
            }else{
                alert(responseData.message || 'Error creating product');
            }

        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    };

    return(
        <div className="add-product-form">
            <h2 className="form-title">Add New Product</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="text" placeholder="Product Name" required 
                onChange={(e)=>setFormData({...formData,name:e.target.value})} className="form-input" style={inputStyle}/>
                <textarea placeholder="Description" required rows="4" 
                onChange={(e)=>setFormData({...formData,description:e.target.value})} className="form-input" style={inputStyle} />
                <input type="text" placeholder="Price" required 
                onChange={(e)=>setFormData({...formData,price:e.target.value})} className="form-input" style={inputStyle} />
                <input type="text" placeholder="Category" required 
                onChange={(e)=>setFormData({...formData,category:e.target.value})} className="form-input" style={inputStyle}/>
                <input type="text" placeholder="Stock Quantity" required 
                onChange={(e)=>setFormData({...formData,stock:e.target.value})} className="form-input" style={inputStyle}/>
                <div className="form-image-container">
                    <label className="form-label">Upload Product Image(Cloudinary)</label>
                    <input type="file" className="form-input-image" accept="image/*" required 
                    onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <button type="submit" className="form-submit-button" disabled={loading}>
                    {loading? 'Uploading & Creating..':'Publish Product'}

                </button>
            </form>
        </div>
    );
};

const inputStyle = {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px'
};

export default AddProduct;