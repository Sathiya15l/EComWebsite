const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const User = require("./model/User");
const Product = require("./model/Product");

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/myshop_mern")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

const seedDatabase = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await Product.deleteMany({});
        console.log("Cleared existing data");

        // Hash passwords
        const salt = await bcrypt.genSalt(10);
        const hashedPassword1 = await bcrypt.hash("admin123", salt);
        const hashedPassword2 = await bcrypt.hash("user123", salt);
        const hashedPassword3 = await bcrypt.hash("john123", salt);

        // Create dummy users
        const users = await User.insertMany([
            {
                name: "Admin User",
                email: "admin@myshop.com",
                password: hashedPassword1,
                role: "admin"
            },
            {
                name: "John Doe",
                email: "john@example.com",
                password: hashedPassword2,
                role: "user"
            },
            {
                name: "Jane Smith",
                email: "jane@example.com",
                password: hashedPassword3,
                role: "user"
            }
        ]);
        console.log("✓ Users seeded:", users.length);

        // Create dummy products
        const products = await Product.insertMany([
            {
                name: "Uluthang Kali",
                description: "Traditional black gram health mix rich in calcium, protein and iron. Excellent for strengthening bones and improving immunity.",
                price: 100,
                category: "Traditional Foods",
                stock: 10,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1781833490/nphejv72hcuulxbnebby.jpg",
                ratings: 4.8
            },
            {
                name: "Raagi Simili",
                description: "Nutritious finger millet sweet prepared with jaggery. Rich in calcium and helps improve haemoglobin levels.",
                price: 150,
                category: "Traditional Sweets",
                stock: 10,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1781842225/bzdqrm1jqqitqhifkyuo.jpg",
                ratings: 4.9
            },
            {
                name: "Susiyam Urundai",
                description: "Traditional sweet snack made with Bengal gram, jaggery and coconut. A healthy evening snack rich in protein.",
                price: 160,
                category: "Traditional Sweets",
                stock: 10,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1781842495/knpfpwsosjbtslxb2a0w.jpg",
                ratings: 4.7
            },
            {
                name: "Paniyaram",
                description: "Soft and fluffy paniyaram made from fermented rice and urad batter. Perfect for breakfast or evening snacks.",
                price: 60,
                category: "Traditional Snacks",
                stock: 10,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1781842678/jeiiga3mca5aub7ofeh8.jpg",
                ratings: 4.8
            },
            {
                name: "Thinai Laddu",
                description: "Foxtail millet laddus prepared with jaggery, ghee and nuts. Rich in fibre and minerals.",
                price: 180,
                category: "Millet Sweets",
                stock: 12,
                imageUrl: "https://images.unsplash.com/photo-1556157408-ed905925a4cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGhpbmFpJTIwTGFkZHV8ZW58MHx8MHx8fDA%3D",
                ratings: 4.8
            },
            {
                name: "Kambu Koozh Mix",
                description: "Traditional pearl millet porridge mix that keeps the body cool and provides sustained energy throughout the day.",
                price: 120,
                category: "Health Mixes",
                stock: 20,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1782738746/kambukoozh_elxra5.jpg",
                ratings: 4.7
            },
            {
                name: "Sathu Maavu Health Mix",
                description: "Multi-grain health mix prepared using millets, pulses and nuts. Suitable for children and adults.",
                price: 250,
                category: "Health Mixes",
                stock: 15,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1782738834/sathumavu_rdwokt.jpg",
                ratings: 4.9
            },
            {
                name: "Karuppatti Peanut Balls",
                description: "Roasted peanuts blended with palm jaggery. Rich in protein, iron and natural energy.",
                price: 90,
                category: "Healthy Snacks",
                stock: 25,
                imageUrl: "https://res.cloudinary.com/dxsfir8ob/image/upload/v1782738923/Karuppatti_Peanut_Balls_a2pwem.jpg",
                ratings: 4.8
            }
        ]);

        await Product.insertMany(products);

        console.log("✓ Products seeded:", products.length);

        console.log("\n✅ Database seeding completed successfully!");
        console.log("\nSample Login Credentials:");
        console.log("Admin - Email: admin@myshop.com, Password: admin123");
        console.log("User  - Email: john@example.com, Password: user123");

        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error);
        process.exit(1);
    }
};

seedDatabase();
