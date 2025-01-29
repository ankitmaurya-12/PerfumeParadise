const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products'); // Import once
const testimonialRoutes = require('./routes/testimonials'); // Import once

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use the product and testimonial routes as middleware
app.use('/api/products', productRoutes);
app.use('/api/testimonials', testimonialRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
  connectTimeoutMS: 30000         // 30 seconds
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
