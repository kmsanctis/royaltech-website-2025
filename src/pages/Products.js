import React, { useState } from 'react';

import ProductCard from '../components/ProductCard/ProductCard';
import ProductModal from '../components/ProductModal/ProductModal';
import productsData from '../data/products.json';

import './Products.css';

function Products() {
  const [products] = useState(productsData);
  const [activeProduct, setActiveProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  /* filter products when a category is chosen */
  const displayedProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const categories = [
    "All",
    "Tube",
    "PL Lamp",
    "Downlight Fitting",
    "60x60 Panel",
    "Floodlight",
    "Highbay",
    "Bulkhead",
    "Lamp",
    "PVC Pipe"
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="products-hero">
        <h1 className="products-hero-title pixel-text-smooth">Our Products</h1>
      </div>

      <div className="product-note">
        <p>
          <strong>Note:</strong> This page is currently under development. Our complete range of products is being updated daily — please check back regularly for the latest additions.
        </p>
      </div>

      <div className="products-summary">
        <p>Explore our wide selection of high-quality electrical products sourced from globally trusted brands. At ROYALTECH, we’re committed to providing reliable, innovative, and cost-effective solutions to meet every project need. Explore our product lineup below.</p>
      </div>

      <h2 className="products-heading">Products Lineup</h2>

      {/* Category buttons */}
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${cat === selectedCategory ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid container" data-aos="fade-up">
        {displayedProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            onOpen={setActiveProduct}
          />
        ))}
      </div>

      {/* Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}

export default Products;
