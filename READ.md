# Perfume Shop E-commerce Application

A full-stack e-commerce application for a perfume shop built with React.js and Node.js.

## Project Structure

### Frontend
```
perfume-shop/frontend/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── config/         # Configuration files
│   ├── App.jsx         # Root component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── .env               # Environment variables
```

### Backend
```
perfume-shop/backend/
├── models/
│   ├── Products.js     # Product schema
│   └── Testimonial.js  # Testimonial schema
├── routes/
│   ├── products.js     # Product routes
│   └── testimonial.js  # Testimonial routes
├── server.js          # Express server setup
├── .env              # Environment variables
├── .gitignore        # Git ignore file
└── package.json      # Dependencies and scripts
```

## Features

- Product browsing and searching
- Detailed product pages
- Customer testimonials
- Contact form
- FAQ section
- About page
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/perfume-shop.git
cd perfume-shop
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

4. Create `.env` files in both frontend and backend directories with necessary environment variables.

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

The application should now be running on `http://localhost:5173` (frontend) and `http://localhost:3000` (backend).

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3000
```

### Backend (.env)
```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

## API Endpoints

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create new product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

### Testimonials
- GET `/api/testimonials` - Get all testimonials
- POST `/api/testimonials` - Create new testimonial
- DELETE `/api/testimonials/:id` - Delete testimonial

## License

This project is licensed under the MIT License - see the LICENSE file for details.