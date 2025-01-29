const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true // This will map to the 'message' field in your POST request
  },
  rating: {
    type: Number,
    required: true
  },
  product: { // Reference the product by its ObjectId
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);


// {
//   "name": "Ankit Maurya",
//   "message": "Nice Smell, that aroma is mind blowing",
//   "rating": 5,
//   "productId": "6797d4a1a0f8bde905fbae58"  // Use a valid product's ObjectId
// }
