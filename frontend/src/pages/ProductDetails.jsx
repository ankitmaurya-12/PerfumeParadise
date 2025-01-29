import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ReactStars from 'react-rating-stars-component';
import { motion } from 'framer-motion';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare, faShoppingBag, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import 'react-image-gallery/styles/css/image-gallery.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [selectedSize, setSelectedSize] = useState(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:5000/api/products/${id}`);
        const reviewsResponse = await axios.get(`http://localhost:5000/api/products/${id}/reviews`);
        setProduct(productResponse.data);
        setReviews(reviewsResponse.data);
        setSelectedSize(productResponse.data.sizes[0]);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, [id]);

  // Add this function inside your component
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    
    if (!newReview.comment.trim()) {
      alert('Please write a review before submitting');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/products/${id}/reviews`,
        {
          ...newReview,
          productId: id
        }
      );

      // Add the new review to the reviews array
      setReviews(prevReviews => [...prevReviews, response.data]);
      
      // Reset the form
      setNewReview({ rating: 5, comment: '' });
      
      // Optional: Show success message
      alert('Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    }
  };
  
  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const images = product.images.length > 0 
    ? product.images.map(img => ({
        original: img,
        thumbnail: img
      }))
    : [{
        original: '/api/placeholder/400/400',
        thumbnail: '/api/placeholder/100/100'
      }];

  const shareUrl = window.location.href;

  return (
    <div className="container mx-auto px-4 py-12 mt-20 max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Product Image Section */}
        <div className="relative">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <ImageGallery 
                items={images}
                showPlayButton={false}
                showFullscreenButton={true}
                autoPlay={true}
                slideInterval={3000}
                additionalClass="rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-gray-900"
            >
              {product.name}
            </motion.h1>
            
            <p className="text-xl text-gray-600 font-medium">
              {product.shortDescription}
            </p>
            
            <div className="flex items-center space-x-4">
              <ReactStars
                count={5}
                value={product.rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="text-gray-600 font-medium">({reviews.length} reviews)</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</h2>
          </div>

          {/* Description Toggle Section */}
          <div className="space-y-4">
            <div className="relative">
              <p className={`text-gray-700 text-lg leading-relaxed ${!showFullDescription && 'line-clamp-3'}`}>
                {product.description}
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-gray-900 font-medium flex items-center space-x-2 mt-2 hover:text-gray-600 transition-colors"
              >
                <span>{showFullDescription ? 'Show Less' : 'Read More'}</span>
                <FontAwesomeIcon icon={showFullDescription ? faChevronUp : faChevronDown} />
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Select Size</h3>
            <div className="flex flex-wrap gap-4">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-8 py-3 text-lg border-2 rounded-xl transition-all duration-300 ${
                    selectedSize === size 
                      ? 'border-gray-900 bg-gray-900 text-white' 
                      : 'border-gray-300 hover:border-gray-900'
                  }`}
                >
                  {size}ml
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-gray-900 text-white py-4 rounded-xl text-lg font-semibold hover:bg-black transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
              <span>Add to Cart</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsWishlist(!isWishlist)}
              className={`p-4 rounded-xl border-2 transition-colors duration-300 ${
                isWishlist 
                  ? 'bg-red-50 border-red-500 text-red-500' 
                  : 'border-gray-300 text-gray-600 hover:border-gray-900'
              }`}
            >
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </motion.button>
          </div>

          {/* Product Meta Information */}
          <div className="border-t border-gray-200 pt-6 space-y-4 text-sm text-gray-600">
            <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>Last Updated: {new Date(product.updatedAt).toLocaleDateString()}</p>
            <p>Product ID: {product._id}</p>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Share</h4>
              <FontAwesomeIcon icon={faShare} className="text-gray-600" />
            </div>
            <div className="flex gap-4">
              <FacebookShareButton url={shareUrl}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </motion.button>
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </motion.button>
              </TwitterShareButton>
              <PinterestShareButton url={shareUrl} media={product.images[0]}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
                >
                  <FontAwesomeIcon icon={faPinterestP} />
                </motion.button>
              </PinterestShareButton>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Reviews Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-20"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Customer Reviews</h2>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">{product.rating}</span>
            <ReactStars
              count={5}
              value={product.rating}
              size={20}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
        </div>
        
        {/* Add Review Form */}
        <motion.form 
          onSubmit={handleSubmitReview}
          className="bg-white p-8 rounded-2xl shadow-lg mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Write a Review</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-800 font-medium mb-2">Rating</label>
              <ReactStars
                count={5}
                value={newReview.rating}
                size={32}
                onChange={(rating) => setNewReview({...newReview, rating})}
                activeColor="#ffd700"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium mb-2">Your Review</label>
              <textarea
                rows={4}
                value={newReview.comment}
                onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-gray-900 focus:ring-0 transition-colors duration-300"
                placeholder="Share your thoughts about this product..."
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit" 
              className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-semibold hover:bg-black transition-colors duration-300"
            >
              Submit Review
            </motion.button>
          </div>
        </motion.form>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={review._id} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">{review.userName || 'Anonymous'}</h5>
                    <p className="text-gray-500 text-sm">
                      {new Date(review.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-600 text-lg">No reviews yet. Be the first to review this product!</p>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default ProductDetails;