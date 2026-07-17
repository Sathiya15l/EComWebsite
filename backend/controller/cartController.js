const Cart = require("../model/Cart");
const Product = require("../model/Product");


// =====================================
// Get Logged-in User's Cart
// =====================================
const getCart = async (req, res) => {
    try {

        let cart = await Cart.findOne({ user: req.user._id })
            .populate("items.product");

        if (!cart) {
            cart = await Cart.create({
                user: req.user._id,
                items: []
            });
        }

        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



// =====================================
// Add Product to Cart
// =====================================
const addToCart = async (req, res) => {

    try {

        const { productId, qty } = req.body;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        let cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            cart = new Cart({
                user: req.user._id,
                items: []
            });

        }

        const itemIndex = cart.items.findIndex(
            item => item.product.toString() === productId
        );

        if (itemIndex > -1) {

            cart.items[itemIndex].qty += qty;

        } else {

            cart.items.push({
                product: productId,
                qty
            });

        }

        await cart.save();

        await cart.populate("items.product");

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




// =====================================
// Update Quantity
// =====================================
const updateCart = async (req, res) => {

    try {

        const { qty } = req.body;

        const { productId } = req.params;

        const cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        const item = cart.items.find(
            item => item.product.toString() === productId
        );

        if (!item) {

            return res.status(404).json({
                message: "Product not found in cart"
            });

        }

        item.qty = qty;

        await cart.save();

        await cart.populate("items.product");

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




// =====================================
// Remove Item
// =====================================
const removeFromCart = async (req, res) => {

    try {

        const { productId } = req.params;

        const cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = cart.items.filter(
            item => item.product.toString() !== productId
        );

        await cart.save();

        await cart.populate("items.product");

        res.status(200).json(cart);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




// =====================================
// Clear Entire Cart
// =====================================
const clearCart = async (req, res) => {

    try {

        const cart = await Cart.findOne({
            user: req.user._id
        });

        if (!cart) {

            return res.status(404).json({
                message: "Cart not found"
            });

        }

        cart.items = [];

        await cart.save();

        res.status(200).json({
            message: "Cart cleared successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};




module.exports = {

    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart

};