import { Plus, Edit, Eye, CheckCircle, Clock, AlertTriangle, TrendingUp } from "lucide-react";

export const SupplierDashboard = () => {
  const supplier = {
    name: "Rajesh Gupta",
    companyName: "Mumbai Masala Co.",
    totalProducts: 24,
    activeCombos: 3,
    pendingOrders: 5,
    monthlyRevenue: 45000
  };

  const pendingOrders = [
    {
      id: "ORD001",
      vendor: "Raj's Pav Bhaji Corner",
      items: "Onions 2kg, Tomatoes 2kg",
      amount: 180,
      paymentType: "Credit",
      vendorTrustScore: 85,
      date: "2024-01-25"
    },
    {
      id: "ORD002",
      vendor: "Delhi Chaat House", 
      items: "Masala 500g, Oil 1L",
      amount: 320,
      paymentType: "Cash",
      vendorTrustScore: 72,
      date: "2024-01-25"
    }
  ];

  const products = [
    { id: 1, name: "Fresh Onions", price: 25, unit: "kg", stock: 500, status: "Active" },
    { id: 2, name: "Tomatoes", price: 30, unit: "kg", stock: 200, status: "Active" },
    { id: 3, name: "Pav Bhaji Masala", price: 120, unit: "500g", stock: 50, status: "Low Stock" }
  ];

  const combos = [
    { id: 1, name: "Pav Bhaji Starter Pack", items: 5, price: 380, orders: 12 },
    { id: 2, name: "Masala Collection", items: 4, price: 250, orders: 8 },
    { id: 3, name: "Vegetable Bundle", items: 6, price: 200, orders: 15 }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {supplier.name}</h1>
            <p className="text-muted-foreground">{supplier.companyName}</p>
          </div>
          <div className="flex gap-3">
            <button className="trust-button-secondary">
              <Plus className="mr-2" size={18} />
              Add Product
            </button>
            <button className="trust-button-primary">
              <Plus className="mr-2" size={18} />
              Create Combo
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">📦</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">{supplier.totalProducts}</h3>
            <p className="text-sm text-muted-foreground">Total Products</p>
          </div>

          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎁</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold">{supplier.activeCombos}</h3>
            <p className="text-sm text-muted-foreground">Active Combos</p>
          </div>

          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <Clock className="text-warning" size={24} />
              <span className="trust-warning-text text-sm">Pending</span>
            </div>
            <h3 className="text-2xl font-bold text-warning">{supplier.pendingOrders}</h3>
            <p className="text-sm text-muted-foreground">New Orders</p>
          </div>

          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-success" size={24} />
              <span className="trust-success-text text-sm">This Month</span>
            </div>
            <h3 className="text-2xl font-bold text-success">₹{supplier.monthlyRevenue.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Revenue</p>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="trust-card mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Pending Orders</h2>
            <button className="trust-button-secondary text-sm">View All</button>
          </div>

          <div className="space-y-4">
            {pendingOrders.map((order) => (
              <div key={order.id} className="border border-border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold">{order.vendor}</h3>
                    <p className="text-sm text-muted-foreground">Order #{order.id} • {order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">₹{order.amount}</p>
                    <span className={`trust-badge ${
                      order.paymentType === "Credit" ? "trust-badge-warning" : "trust-badge-success"
                    }`}>
                      {order.paymentType}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm mb-3">{order.items}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm text-muted-foreground mr-2">Vendor Trust Score:</span>
                    <span className={`font-medium ${
                      order.vendorTrustScore >= 80 ? "trust-success-text" : 
                      order.vendorTrustScore >= 60 ? "trust-warning-text" : "trust-error-text"
                    }`}>
                      {order.vendorTrustScore}%
                    </span>
                    {order.vendorTrustScore < 70 && order.paymentType === "Credit" && (
                      <AlertTriangle className="ml-2 text-warning" size={16} />
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="trust-button-secondary text-sm py-1 px-3">
                      Reject
                    </button>
                    <button className="trust-button-primary text-sm py-1 px-3">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Products Management */}
          <div className="trust-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Products</h2>
              <button className="trust-button-secondary text-sm">
                <Plus className="mr-1" size={16} />
                Add Product
              </button>
            </div>

            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price}/{product.unit} • Stock: {product.stock}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`trust-badge ${
                      product.status === "Active" ? "trust-badge-success" : "trust-badge-warning"
                    }`}>
                      {product.status}
                    </span>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Combo Management */}
          <div className="trust-card">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Combo Deals</h2>
              <button className="trust-button-secondary text-sm">
                <Plus className="mr-1" size={16} />
                Create Combo
              </button>
            </div>

            <div className="space-y-3">
              {combos.map((combo) => (
                <div key={combo.id} className="flex justify-between items-center p-3 border border-border rounded-lg">
                  <div>
                    <h3 className="font-medium">{combo.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {combo.items} items • ₹{combo.price} • {combo.orders} orders
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <Eye size={16} />
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <Edit size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};