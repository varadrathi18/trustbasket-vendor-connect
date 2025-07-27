import { CreditCard, TrendingUp, Clock, CheckCircle, AlertTriangle, Star } from "lucide-react";

export const VendorDashboard = () => {
  const vendor = {
    name: "Raj Kumar",
    shopName: "Raj's Pav Bhaji Corner",
    trustScore: 82,
    creditLimit: 5000,
    creditUsed: 1200,
    creditRemaining: 3800,
    pendingDues: 800,
    dueDate: "2024-02-01"
  };

  const orders = [
    {
      id: "ORD001",
      date: "2024-01-25",
      supplier: "Mumbai Masala Co.",
      amount: 450,
      status: "Delivered",
      paymentMode: "Cash",
      items: "Onions, Tomatoes, Masala"
    },
    {
      id: "ORD002", 
      date: "2024-01-24",
      supplier: "Fresh Vegetable Hub",
      amount: 320,
      status: "Credit",
      paymentMode: "Credit",
      items: "Potatoes, Capsicum"
    },
    {
      id: "ORD003",
      date: "2024-01-23",
      supplier: "Spice World",
      amount: 180,
      status: "Paid",
      paymentMode: "UPI",
      items: "Garam Masala, Salt"
    }
  ];

  const creditUnlocked = [
    { supplier: "Mumbai Masala Co.", limit: 2000 },
    { supplier: "Fresh Vegetable Hub", limit: 1500 }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Hello, {vendor.name}</h1>
          <p className="text-muted-foreground">{vendor.shopName}</p>
        </div>

        {/* Credit Alert */}
        {vendor.pendingDues > 0 && (
          <div className="bg-warning/10 border border-warning rounded-lg p-4 mb-6 flex items-center">
            <AlertTriangle className="text-warning mr-3" size={24} />
            <div>
              <p className="font-medium text-warning">Payment Due in 2 Days</p>
              <p className="text-sm text-muted-foreground">
                Amount: ₹{vendor.pendingDues} | Due Date: {vendor.dueDate}
              </p>
            </div>
          </div>
        )}

        {/* Success Banners */}
        {creditUnlocked.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {creditUnlocked.map((credit, index) => (
              <div key={index} className="bg-success/10 border border-success rounded-lg p-4 flex items-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🎉</span>
                </div>
                <div>
                  <p className="font-medium text-success">Credit Unlocked!</p>
                  <p className="text-sm text-muted-foreground">
                    {credit.supplier} - ₹{credit.limit} limit available
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Trust Score */}
          <div className="trust-card text-center">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="w-20 h-20 rounded-full border-4 border-muted flex items-center justify-center relative">
                <span className="text-2xl font-bold text-primary">{vendor.trustScore}%</span>
                <div 
                  className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent transform -rotate-90"
                  style={{ 
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + (vendor.trustScore / 100) * 50}% 0%, ${50 + (vendor.trustScore / 100) * 50}% 100%, 50% 100%)`
                  }}
                ></div>
              </div>
            </div>
            <h3 className="font-semibold">Trust Score</h3>
            <p className="text-sm text-muted-foreground">Good standing</p>
          </div>

          {/* Credit Used */}
          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <CreditCard className="text-primary" size={24} />
              <span className="trust-success-text text-sm">Available</span>
            </div>
            <h3 className="text-2xl font-bold">₹{vendor.creditUsed.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Credit Used</p>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${(vendor.creditUsed / vendor.creditLimit) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Credit Remaining */}
          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="text-success" size={24} />
              <span className="trust-success-text text-sm">Remaining</span>
            </div>
            <h3 className="text-2xl font-bold text-success">₹{vendor.creditRemaining.toLocaleString()}</h3>
            <p className="text-sm text-muted-foreground">Available Credit</p>
          </div>

          {/* Upcoming Dues */}
          <div className="trust-card">
            <div className="flex items-center justify-between mb-2">
              <Clock className="text-warning" size={24} />
              <span className="trust-warning-text text-sm">Due Soon</span>
            </div>
            <h3 className="text-2xl font-bold text-warning">₹{vendor.pendingDues}</h3>
            <p className="text-sm text-muted-foreground">Pending Dues</p>
          </div>
        </div>

        {/* Orders Table */}
        <div className="trust-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
            <button className="trust-button-secondary text-sm">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2">Order ID</th>
                  <th className="text-left py-3 px-2">Date</th>
                  <th className="text-left py-3 px-2">Supplier</th>
                  <th className="text-left py-3 px-2">Items</th>
                  <th className="text-left py-3 px-2">Amount</th>
                  <th className="text-left py-3 px-2">Payment</th>
                  <th className="text-left py-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium">{order.id}</td>
                    <td className="py-3 px-2 text-muted-foreground">{order.date}</td>
                    <td className="py-3 px-2">{order.supplier}</td>
                    <td className="py-3 px-2 text-sm">{order.items}</td>
                    <td className="py-3 px-2 font-semibold">₹{order.amount}</td>
                    <td className="py-3 px-2">
                      <span className={`trust-badge ${
                        order.paymentMode === "Credit" ? "trust-badge-warning" :
                        order.paymentMode === "Cash" ? "trust-badge-success" : 
                        "bg-primary/10 text-primary"
                      }`}>
                        {order.paymentMode}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className={`trust-badge ${
                        order.status === "Delivered" ? "trust-badge-success" :
                        order.status === "Credit" ? "trust-badge-warning" :
                        "trust-badge-success"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};