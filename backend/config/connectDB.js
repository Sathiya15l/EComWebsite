const mongoose = require('mongoose');
const connectDB = async ()=> {
 try{
    console.log("URI:", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected Successfully');
 }
 catch(error)
 {
    console.error('MongoDb Connection Failed', error);
    process.exit(1);
 }
};
module.exports = connectDB;