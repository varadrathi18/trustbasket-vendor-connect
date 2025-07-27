import { ShoppingCart, Package } from "lucide-react";

interface ComboItem {
  name: string;
  quantity: string;
}

interface ComboDeal {
  id: string;
  name: string;
  supplier: string;
  items: ComboItem[];
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  category: string;
}

export const CombosPage = () => {
  const combos: ComboDeal[] = [
    {
      id: "1",
      name: "Pav Bhaji Starter Pack",
      supplier: "Mumbai Masala Co.",
      items: [
        { name: "Onions", quantity: "2 kg" },
        { name: "Tomatoes", quantity: "2 kg" },
        { name: "Potatoes", quantity: "3 kg" },
        { name: "Pav Bhaji Masala", quantity: "200g" },
        { name: "Butter", quantity: "500g" }
      ],
      originalPrice: 450,
      discountedPrice: 380,
      discount: 15,
      category: "Street Food Essentials"
    },
    {
      id: "2",
      name: "Chaat Master Bundle",
      supplier: "Delhi Spice House",
      items: [
        { name: "Sev", quantity: "1 kg" },
        { name: "Chaat Masala", quantity: "250g" },
        { name: "Tamarind Chutney", quantity: "500ml" },
        { name: "Mint Chutney", quantity: "500ml" },
        { name: "Papdi", quantity: "500g" }
      ],
      originalPrice: 320,
      discountedPrice: 275,
      discount: 14,
      category: "Chaat Essentials"
    },
    {
      id: "3",
      name: "Tea Stall Combo",
      supplier: "Chai Suppliers Ltd.",
      items: [
        { name: "Tea Leaves", quantity: "1 kg" },
        { name: "Milk Powder", quantity: "1 kg" },
        { name: "Sugar", quantity: "2 kg" },
        { name: "Ginger", quantity: "500g" },
        { name: "Cardamom", quantity: "100g" }
      ],
      originalPrice: 600,
      discountedPrice: 510,
      discount: 15,
      category: "Beverages"
    }
  ];

  const ComboCard = ({ combo }: { combo: ComboDeal }) => (
    <div className="trust-card hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{combo.name}</h3>
          <p className="text-muted-foreground text-sm">{combo.supplier}</p>
          <span className="trust-badge-success mt-2">{combo.category}</span>
        </div>
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
          <Package className="text-primary" size={32} />
        </div>
      </div>

      {/* Items List */}
      <div className="mb-4">
        <h4 className="font-medium mb-2 text-sm">Items included:</h4>
        <div className="grid grid-cols-1 gap-1">
          {combo.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm bg-muted/50 px-3 py-1 rounded">
              <span>{item.name}</span>
              <span className="text-muted-foreground">{item.quantity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-2xl font-bold text-primary">₹{combo.discountedPrice}</span>
          <span className="text-lg text-muted-foreground line-through">₹{combo.originalPrice}</span>
          <span className="trust-badge bg-success/10 text-success">
            {combo.discount}% OFF
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          You save ₹{combo.originalPrice - combo.discountedPrice}
        </p>
      </div>

      {/* Action Button */}
      <button className="trust-button-primary w-full flex items-center justify-center">
        <ShoppingCart className="mr-2" size={18} />
        Buy Combo
      </button>
    </div>
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Combo Deals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save money with our specially curated combo packages designed for street food vendors
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="font-semibold mb-2">Save Money</h3>
            <p className="text-sm text-muted-foreground">
              Get up to 20% discount on bulk purchases
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="font-semibold mb-2">Complete Packages</h3>
            <p className="text-sm text-muted-foreground">
              Everything you need for your business in one order
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Quick Setup</h3>
            <p className="text-sm text-muted-foreground">
              Start your business faster with ready-made bundles
            </p>
          </div>
        </div>

        {/* Combos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {combos.map(combo => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Combo?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our suppliers to create a personalized combo package for your specific needs
          </p>
          <button className="trust-button-primary">
            Request Custom Combo
          </button>
        </div>
      </div>
    </div>
  );
};