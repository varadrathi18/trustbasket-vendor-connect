import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { VendorRegistration } from "../components/VendorRegistration";
import { SupplierRegistration } from "../components/SupplierRegistration";

export const Register = () => {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type");
  const [userType, setUserType] = useState<"vendor" | "supplier">(
    typeParam === "supplier" ? "supplier" : "vendor"
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Join TrustBasket</h1>
          <p className="text-muted-foreground">Choose your role to get started</p>
        </div>

        {/* Role Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1 flex">
            <button
              onClick={() => setUserType("vendor")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                userType === "vendor"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Street Vendor
            </button>
            <button
              onClick={() => setUserType("supplier")}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                userType === "supplier"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Supplier
            </button>
          </div>
        </div>

        {/* Registration Form */}
        {userType === "vendor" ? <VendorRegistration /> : <SupplierRegistration />}
      </div>
    </div>
  );
};