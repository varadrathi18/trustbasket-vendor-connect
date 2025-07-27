import { useState } from "react";
import { Upload, Eye, EyeOff, Plus, X } from "lucide-react";

export const SupplierRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryCities, setDeliveryCities] = useState<string[]>([""]);
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    companyName: "",
    gstNumber: "",
    bankDetails: "",
  });

  const [files, setFiles] = useState({
    shopLicense: null as File | null,
    catalog: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

  const addCityField = () => {
    setDeliveryCities([...deliveryCities, ""]);
  };

  const removeCityField = (index: number) => {
    setDeliveryCities(deliveryCities.filter((_, i) => i !== index));
  };

  const updateCity = (index: number, value: string) => {
    const newCities = [...deliveryCities];
    newCities[index] = value;
    setDeliveryCities(newCities);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    console.log("Supplier Registration:", { ...formData, deliveryCities, files });
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Registration submitted successfully!");
    }, 1000);
  };

  return (
    <div className="trust-card max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Supplier Registration</h2>
      
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
              <label className="trust-label">Shop/Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="trust-input"
                required
                placeholder="Enter company name"
              />
            </div>
            <div>
              <label className="trust-label">GST Number (Optional)</label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleInputChange}
                className="trust-input"
                placeholder="Enter GST number"
              />
            </div>
            <div>
              <label className="trust-label">Bank Details for Credit Payments *</label>
              <textarea
                name="bankDetails"
                value={formData.bankDetails}
                onChange={handleInputChange}
                className="trust-input"
                rows={3}
                required
                placeholder="Account number, IFSC code, bank name"
              />
            </div>
          </div>
        </div>

        {/* Delivery Cities */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Delivery Locations</h3>
          <div className="space-y-3">
            {deliveryCities.map((city, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => updateCity(index, e.target.value)}
                  className="trust-input flex-1"
                  placeholder="Enter city name"
                  required
                />
                {deliveryCities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeCityField(index)}
                    className="p-3 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addCityField}
              className="flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Plus className="mr-2" size={20} />
              Add Another City
            </button>
          </div>
        </div>

        {/* Document Uploads */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Document Uploads</h3>
          <div className="space-y-4">
            <div>
              <label className="trust-label">Shop License Upload *</label>
              <div className="trust-input flex items-center justify-between p-4">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange(e, "shopLicense")}
                  className="hidden"
                  id="license-upload"
                  required
                />
                <label
                  htmlFor="license-upload"
                  className="flex items-center cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <Upload className="mr-2" size={20} />
                  {files.shopLicense ? files.shopLicense.name : "Choose License (PDF or Image)"}
                </label>
              </div>
            </div>
            <div>
              <label className="trust-label">Product Catalog Upload (Optional)</label>
              <div className="trust-input flex items-center justify-between p-4">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={(e) => handleFileChange(e, "catalog")}
                  className="hidden"
                  id="catalog-upload"
                />
                <label
                  htmlFor="catalog-upload"
                  className="flex items-center cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <Upload className="mr-2" size={20} />
                  {files.catalog ? files.catalog.name : "Choose CSV/Excel File"}
                </label>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                You can add products manually after registration
              </p>
            </div>
          </div>
        </div>

        {/* Combo Deal Section */}
        <div className="bg-accent/50 p-4 rounded-lg border border-accent">
          <h4 className="font-semibold mb-2 text-accent-foreground">Create Combo Deals</h4>
          <p className="text-sm text-accent-foreground mb-3">
            Bundle products with discounts to attract more customers. You can create combos after adding your products.
          </p>
          <div className="flex items-center text-sm">
            <span className="text-lg mr-2">✅</span>
            <span>Verified suppliers with combo deals are shown higher in search.</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="trust-button-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Register as Supplier"}
        </button>
      </form>
    </div>
  );
};