'use client';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { Product } from './types/product';
import Navbar from './components/navbar';
import Slider from './components/slider';

const categories: Product['category'][] = ['Cuenta', 'Tarjeta', 'Fondo', 'Seguro'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Slider />

      <div className="p-4">
        <h1 className="text-2xl text-blue-600 font-bold mb-6">Catálogo de Productos</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 overflow-auto">
          <button
            className={`px-4 py-2 rounded border text-sm font-medium ${
              selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded border text-sm font-medium ${
                selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}