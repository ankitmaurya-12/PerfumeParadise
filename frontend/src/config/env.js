export const config = {
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    imageUrl: import.meta.env.VITE_IMAGE_URL || 'http://localhost:5000/images',
    defaultPerPage: 12,
  };