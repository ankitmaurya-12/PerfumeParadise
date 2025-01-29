// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  sizes: [{
    type: Number,
    required: true
  }],
  rating: {
    type: Number,
    default: 0
  },
  reviews: [{
    userName: String,
    rating: Number,
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);



// {
//   "name": "Perfume X",
//   "description": "A premium perfume with a long-lasting fragrance.",
//   "shortDescription": "Premium long-lasting perfume.",
//   "price": 99.99,
//   "images": [
//     "https://images.unsplash.com/photo-1588177925144-2fd3e4e7ce57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D"
//   ],
//   "sizes": [
//     50, 100
//   ]
// }