import { useState } from "react";
import { X, AlertTriangle, CreditCard } from "lucide-react";

interface CreditModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
    supplier: string;
    trustScore: number;
  };
}

export const CreditModal = ({ isOpen, onClose, product }: CreditModalProps) => {
  const [advanceAmount, setAdvanceAmount] = useState(Math.floor(product.price * 0.3)); // 30% advance
  const balanceAmount = product.price - advanceAmount;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h2 className="text-xl font-bold">Request Credit</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Success Message */}
          <div className="bg-success/10 border border-success rounded-lg p-4 text-center">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎉</span>
            </div>
            <h3 className="font-semibold text-success mb-2">You are eligible for credit!</h3>
            <p className="text-sm text-muted-foreground">
              You've completed 3+ successful transactions with {product.supplier}
            </p>
          </div>

          {/* Product Details */}
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2">{product.name}</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Supplier: {product.supplier}</p>
              <p>Total Amount: ₹{product.price}</p>
            </div>
          </div>

          {/* Payment Breakdown */}
          <div className="space-y-4">
            <h4 className="font-semibold">Payment Details</h4>
            
            <div className="bg-background border border-border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span>Pay now (Advance):</span>
                <span className="font-semibold text-primary">₹{advanceAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Pay in 7 days:</span>
                <span className="font-semibold">₹{balanceAmount}</span>
              </div>
              <hr className="border-border" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>₹{product.price}</span>
              </div>
            </div>

            {/* Trust Score Warning */}
            {product.trustScore < 75 && (
              <div className="bg-warning/10 border border-warning rounded-lg p-3 flex items-center">
                <AlertTriangle className="text-warning mr-3 flex-shrink-0" size={20} />
                <div className="text-sm">
                  <p className="font-medium text-warning">Low Trust Score Warning</p>
                  <p className="text-muted-foreground">
                    Supplier may reject credit requests from vendors with trust score below 75%
                  </p>
                </div>
              </div>
            )}

            {/* Terms */}
            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
              <h5 className="font-medium mb-2">Credit Terms:</h5>
              <ul className="space-y-1">
                <li>• Balance payment due within 7 days of delivery</li>
                <li>• Late payment will affect your trust score</li>
                <li>• Interest charges may apply after 7 days</li>
                <li>• Credit limit may be reduced for late payments</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="trust-button-secondary flex-1"
            >
              Cancel
            </button>
            <button className="trust-button-primary flex-1">
              <CreditCard className="mr-2" size={18} />
              Proceed to Pay ₹{advanceAmount}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};