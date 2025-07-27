import { useState } from "react";
import { Upload, Eye, EyeOff } from "lucide-react";

export const VendorRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    shopName: "",
    businessAddress: "",
    city: "",
    state: "",
    pincode: "",
    foodType: "",
    creditMode: "",
    consent: false,
  });

  const [files, setFiles] = useState({
    aadhar: null as File | null,
    shopPhoto: null as File | null,
    shopLicense: null as File | null,
  });

  const foodTypes = [
    "Pav Bhaji",
    "Vada Pav",
    "Chaat",
    "Dosa/Idli",
    "Momos",
    "Roll/Wrap",
    "Tea/Coffee",
    "Juice",
    "Ice Cream",
    "Other",
  ];

  const creditModes = ["UPI", "Bank Transfer", "Cash on Delivery"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: keyof typeof files) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    console.log("Vendor Registration:", formData, files);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Registration submitted successfully!");
    }, 1000);
  };

  return (
    <div className="trust-card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Vendor Registration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="trust-label">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="trust-input"
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="trust-label">Mobile Number *</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="trust-input"
                required
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label className="trust-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="trust-input"
                required
                placeholder="Enter email address"
              />
            </div>
            <div className="relative">
              <label className="trust-label">Password *</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="trust-input pr-12"
                required
                placeholder="Create password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Business Information</h3>
          <div className="space-y-4">
            <div>
              <label className="trust-label">Shop Name *</label>
              <input
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleInputChange}
                className="trust-input"
                required
                placeholder="Enter shop name"
              />
            </div>
            <div>
              <label className="trust-label">Business Address *</label>
              <textarea
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                className="trust-input"
                rows={3}
                required
                placeholder="Enter complete business address"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="trust-label">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="trust-input"
                  required
                  placeholder="City"
                />
              </div>
              <div>
                <label className="trust-label">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="trust-input"
                  required
                  placeholder="State"
                />
              </div>
              <div>
                <label className="trust-label">Pincode *</label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="trust-input"
                  required
                  placeholder="Pincode"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="trust-label">Type of Street Food *</label>
                <select
                  name="foodType"
                  value={formData.foodType}
                  onChange={handleInputChange}
                  className="trust-input"
                  required
                >
                  <option value="">Select food type</option>
                  {foodTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="trust-label">Preferred Credit Mode *</label>
                <select
                  name="creditMode"
                  value={formData.creditMode}
                  onChange={handleInputChange}
                  className="trust-input"
                  required
                >
                  <option value="">Select credit mode</option>
                  {creditModes.map(mode => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Document Uploads */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Document Uploads</h3>
          <div className="space-y-4">
            <div>
              <label className="trust-label">Aadhar Card Upload *</label>
              <div className="trust-input flex items-center justify-between p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "aadhar")}
                  className="hidden"
                  id="aadhar-upload"
                  required
                />
                <label
                  htmlFor="aadhar-upload"
                  className="flex items-center cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <Upload className="mr-2" size={20} />
                  {files.aadhar ? files.aadhar.name : "Choose Aadhar Card Image"}
                </label>
              </div>
            </div>
            <div>
              <label className="trust-label">Shop Photo Upload *</label>
              <div className="trust-input flex items-center justify-between p-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "shopPhoto")}
                  className="hidden"
                  id="shop-photo-upload"
                  required
                />
                <label
                  htmlFor="shop-photo-upload"
                  className="flex items-center cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <Upload className="mr-2" size={20} />
                  {files.shopPhoto ? files.shopPhoto.name : "Choose Shop Photo"}
                </label>
              </div>
            </div>
            <div>
              <label className="trust-label">Shop License Upload *</label>
              <div className="trust-input flex items-center justify-between p-4">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange(e, "shopLicense")}
                  className="hidden"
                  id="shop-license-upload"
                  required
                />
                <label
                  htmlFor="shop-license-upload"
                  className="flex items-center cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <Upload className="mr-2" size={20} />
                  {files.shopLicense ? files.shopLicense.name : "Choose License (PDF or Image)"}
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Consent */}
        <div>
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
              className="mt-1"
              required
            />
            <label className="text-sm text-foreground">
              I agree to repay credit within 7 days and understand the terms and conditions of TrustBasket.
            </label>
          </div>
        </div>

        {/* Credit Information */}
        <div className="bg-accent/50 p-4 rounded-lg border border-accent">
          <p className="text-sm text-accent-foreground flex items-center">
            <span className="text-lg mr-2">💡</span>
            <strong>Credit becomes available after 3 successful transactions with a supplier.</strong>
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="trust-button-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register as Vendor"}
        </button>
      </form>
    </div>
  );
};