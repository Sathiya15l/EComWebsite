const express = require("express");
const router = express.Router();
const { protect }=require("../middleware/authMiddleware");
const { admin }=require("../middleware/adminMiddleware");

const {
    getCart,
    addToCart,
    updateCart,
    removeFromCart,
    clearCart
} = require("../controller/cartController");


router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.put("/:productId", protect, updateCart);
router.delete("/:productId", protect, removeFromCart);
router.delete("/", protect, clearCart);

module.exports = router;