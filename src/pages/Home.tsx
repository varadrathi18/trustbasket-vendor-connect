import { Link } from "react-router-dom";
import { ShoppingCart, Store, Users, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="trust-hero-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Affordable Raw Materials for
            <span className="text-primary"> Street Vendors</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with trusted suppliers, get raw materials at wholesale prices, 
            and access credit for your street food business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace" className="trust-button-primary inline-flex items-center">
              <ShoppingCart className="mr-2" size={20} />
              Explore Market
            </Link>
            <Link to="/register?type=supplier" className="trust-button-secondary inline-flex items-center">
              <Store className="mr-2" size={20} />
              Sell with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Problems We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="trust-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust Issues</h3>
              <p className="text-muted-foreground">
                Connect with verified suppliers and build lasting business relationships with our trust scoring system.
              </p>
            </div>
            <div className="trust-card text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-success" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">High Costs</h3>
              <p className="text-muted-foreground">
                Get wholesale prices directly from suppliers and save money with our combo deals and bulk ordering.
              </p>
            </div>
            <div className="trust-card text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-warning" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Credit Access</h3>
              <p className="text-muted-foreground">
                Access credit after building trust with suppliers through successful transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Vendors */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works for Vendors</h2>
          <p className="text-center text-muted-foreground mb-12">Simple steps to get started</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Register & Verify</h3>
              <p className="text-sm text-muted-foreground">
                Sign up with your shop details and upload required documents
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Browse & Order</h3>
              <p className="text-sm text-muted-foreground">
                Find raw materials from verified suppliers at wholesale prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Build Trust</h3>
              <p className="text-sm text-muted-foreground">
                Complete transactions to increase your trust score
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-success-foreground font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Access Credit</h3>
              <p className="text-sm text-muted-foreground">
                Unlock credit options after 3 successful purchases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Suppliers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works for Suppliers</h2>
          <p className="text-center text-muted-foreground mb-12">Start selling to street vendors today</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Create Account</h3>
              <p className="text-sm text-muted-foreground">
                Register with business details and GST information
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Add Products</h3>
              <p className="text-sm text-muted-foreground">
                Upload your product catalog and set wholesale prices
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Create Combos</h3>
              <p className="text-sm text-muted-foreground">
                Bundle products with discounts to attract more customers
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mx-auto mb-4 text-success-foreground font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Grow Business</h3>
              <p className="text-sm text-muted-foreground">
                Get orders from verified vendors and expand your reach
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Street Food Business?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Join thousands of vendors and suppliers who trust TrustBasket for their raw material needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?type=vendor" className="bg-background text-primary px-8 py-3 rounded-lg font-medium hover:bg-background/90 transition-colors inline-flex items-center">
              Start as Vendor
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/register?type=supplier" className="border border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors inline-flex items-center">
              Join as Supplier
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};