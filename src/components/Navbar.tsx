import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">TrustBasket</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`trust-nav-link ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/marketplace"
              className={`trust-nav-link ${isActive('/marketplace') ? 'text-primary' : ''}`}
            >
              Marketplace
            </Link>
            <Link
              to="/combos"
              className={`trust-nav-link ${isActive('/combos') ? 'text-primary' : ''}`}
            >
              Combo Deals
            </Link>
            <Link
              to="/help"
              className={`trust-nav-link ${isActive('/help') ? 'text-primary' : ''}`}
            >
              Help
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-foreground hover:text-primary transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            {isAuthenticated ? (
              <>
                <Link
                  to={user?.type === 'vendor' ? '/vendor-dashboard' : '/supplier-dashboard'}
                  className="trust-button-secondary flex items-center space-x-2"
                >
                  <User size={18} />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={logout}
                  className="trust-button-primary flex items-center space-x-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="trust-button-secondary"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="trust-button-primary"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`trust-nav-link ${isActive('/') ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/marketplace"
                className={`trust-nav-link ${isActive('/marketplace') ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                to="/combos"
                className={`trust-nav-link ${isActive('/combos') ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Combo Deals
              </Link>
              <Link
                to="/help"
                className={`trust-nav-link ${isActive('/help') ? 'text-primary' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                {isAuthenticated ? (
                  <>
                    <Link
                      to={user?.type === 'vendor' ? '/vendor-dashboard' : '/supplier-dashboard'}
                      className="trust-button-secondary text-center flex items-center justify-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={18} />
                      <span>Dashboard</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="trust-button-primary text-center flex items-center justify-center space-x-2"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="trust-button-secondary text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="trust-button-primary text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};