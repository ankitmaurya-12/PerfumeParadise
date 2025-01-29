import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API using the .env variable
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/products`); // Use VITE_API_URL for Vite
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    

    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">All Perfume Products</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                // {/* Use _id instead of id */}
                <Link key={product._id} to={`/product/${product._id}`}> 
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={product.images[0] || 'https://images.unsplash.com/photo-1623607037050-ac8e7cce86c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxwZXJmdW1lfGVufDB8fDB8fHww'} // {/* Use a default image if no image is provided */}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.shortDescription}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        <div className="flex">{renderStars(product.rating)}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
