import { useState } from "react";
import { Search, Filter, Star, ShoppingCart, CreditCard } from "lucide-react";

interface Product {
  id: string;
  name: string;
  supplier: string;
  city: string;
  price: number;
  unit: string;
  rating: number;
  trustScore: number;
  category: string;
  inStock: boolean;
}

export const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [sortBy, setSortBy] = useState("relevance");

  const categories = [
    "Vegetables", "Spices", "Oil & Ghee", "Rice & Grains", 
    "Dairy", "Meat & Fish", "Condiments", "Snacks"
  ];

  const priceRanges = [
    "Under ₹50", "₹50 - ₹100", "₹100 - ₹200", "₹200 - ₹500", "Above ₹500"
  ];

  const sortOptions = [
    { value: "relevance", label: "Relevance" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Rating" },
    { value: "combo-deals", label: "Combo Deals First" }
  ];

  // Mock data - in real app this would come from API
  const products: Product[] = [
    {
      id: "1",
      name: "Fresh Onions",
      supplier: "Raj Vegetables",
      city: "Mumbai",
      price: 25,
      unit: "kg",
      rating: 4.5,
      trustScore: 85,
      category: "Vegetables",
      inStock: true
    },
    {
      id: "2", 
      name: "Sunflower Oil",
      supplier: "Golden Oil Co.",
      city: "Delhi",
      price: 120,
      unit: "liter",
      rating: 4.8,
      trustScore: 92,
      category: "Oil & Ghee",
      inStock: true
    },
    {
      id: "3",
      name: "Basmati Rice",
      supplier: "Premium Grains",
      city: "Pune",
      price: 80,
      unit: "kg",
      rating: 4.3,
      trustScore: 78,
      category: "Rice & Grains",
      inStock: true
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="trust-product-card">
      <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
        <span className="text-4xl">🥔</span>
      </div>
      
      <h3 className="font-semibold mb-1">{product.name}</h3>
      
      <div className="text-sm text-muted-foreground mb-2">
        <div>{product.supplier} • {product.city}</div>
        <div className="flex items-center mt-1">
          <Star className="fill-warning text-warning mr-1" size={14} />
          <span>{product.rating}</span>
          <span className="mx-2">•</span>
          <span className="trust-success-text">Trust: {product.trustScore}%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <div className="text-lg font-bold text-primary">
          ₹{product.price}/{product.unit}
        </div>
        {product.trustScore > 80 && (
          <div className="trust-badge-success">Verified</div>
        )}
      </div>
      
      <div className="flex gap-2">
        <button className="trust-button-primary flex-1 py-2 text-sm">
          <ShoppingCart className="mr-1" size={16} />
          Add to Cart
        </button>
        <button className="trust-button-secondary py-2 px-3 text-sm">
          <CreditCard size={16} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Raw Materials Marketplace</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search for onion, oil, masala..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="trust-input pl-12"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="trust-card">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="mr-2" size={20} />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-primary"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <label key={range} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range}
                        checked={priceRange === range}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-primary"
                      />
                      <span className="text-sm">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Trust Score Filter */}
              <div>
                <h4 className="font-medium mb-3">Supplier Trust Score</h4>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">90% and above</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">80% and above</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="text-primary" />
                    <span className="text-sm">70% and above</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="trust-input w-auto"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="trust-button-secondary">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};