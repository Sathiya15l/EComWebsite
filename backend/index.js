const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/connectDB");
const authRoutes = require('./routes/authRoutes');
const path = require('path');

dotenv.config();
connectDB();



const app = express();
app.use(cors(
    {
        origin: ['http://localhost:5173','http://127.0.0.1:5173',process.env.FRONTEND_URL],
        //methods: ['GET','POST','PUT','DELETE'],
        //allowedHeaders: ['Content-Type','Authorization'],
        credentials: true
    }
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("MyShop Backend is working properly");
});

app.use('/api/auth', authRoutes);
app.use('/api/products',require('./routes/productRoutes.js'));
app.use('/api/orders',require('./routes/orderRoutes'));
app.use('/api/payments',require('./routes/paymentRoutes'));
app.use('/api/analytics',require('./routes/analyticsRoutes')); 
app.use("/api/cart", require("./routes/cartRoutes"));

//Serve frontend in production
//
    app.get('/', (req,res)=>{
        res.send("MyShop Backend is running in development mode");
    });
//}

console.log("PORT from env:", process.env.PORT);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

