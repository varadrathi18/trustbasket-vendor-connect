import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export const Login = () => {
  const [userType, setUserType] = useState<"vendor" | "supplier">("vendor");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { userType, ...formData });
    // Handle login
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="trust-card max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your TrustBasket account</p>
        </div>

        {/* User Type Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-muted rounded-lg p-1 flex">
            <button
              onClick={() => setUserType("vendor")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                userType === "vendor"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Login as Vendor
            </button>
            <button
              onClick={() => setUserType("supplier")}
              className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                userType === "supplier"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Login as Supplier
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="trust-label">Email or Mobile Number</label>
            <input
              type="text"
              name="emailOrMobile"
              value={formData.emailOrMobile}
              onChange={handleInputChange}
              className="trust-input"
              required
              placeholder="Enter email or mobile number"
            />
          </div>

          <div className="relative">
            <label className="trust-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="trust-input pr-12"
              required
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="trust-button-primary w-full"
          >
            Sign In
          </button>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-primary hover:text-primary/80"
            >
              Login with OTP instead
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:text-primary/80 font-medium">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};