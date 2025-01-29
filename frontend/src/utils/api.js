// src/utils/api.js
import axios from 'axios';
import { config } from '../config/env';

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async (page = 1, limit = config.defaultPerPage) => {
  try {
    const response = await api.get(`/products?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await api.get('/testimonials');
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const submitReview = async (productId, review) => {
  try {
    const response = await api.post(`/products/${productId}/reviews`, review);
    return response.data;
  } catch (error) {
    console.error('Error submitting review:', error);
    throw error;
  }
};