const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');
const Product = require('../models/Product'); // Import the Product model

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to add a testimonial
router.post('/', async (req, res) => {
  try {
    const { name, message, rating, productId } = req.body;
    
    // Validate if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Create and save the testimonial
    const testimonial = new Testimonial({
      name,
      comment: message, // Assuming 'comment' is equivalent to 'message'
      rating,
      product: productId // Reference the product by its ObjectId
    });

    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: 'Error posting testimonial', error });
  }
});

module.exports = router;
