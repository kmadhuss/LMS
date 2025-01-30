import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Minus, Plus } from "lucide-react";

interface BuyBottleDialogProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    brandName: string;
    price: number;
    imageUrl: string;
  };
  onBuy: (quantity: number) => void;
}

const BuyBottleDialog = ({
  isOpen = true,
  onClose = () => {},
  product = {
    brandName: "Premium Whiskey",
    price: 59.99,
    imageUrl:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800",
  },
  onBuy = () => {},
}: BuyBottleDialogProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    if (value >= 1) setQuantity(value);
  };

  const handleBuy = () => {
    onBuy(quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Buy {product.brandName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <img
              src={product.imageUrl}
              alt={product.brandName}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold">{product.brandName}</h3>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Quantity:</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                className="w-20 text-center"
                min={1}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Total:</span>
            <span className="text-xl font-bold">
              ${(product.price * quantity).toFixed(2)}
            </span>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleBuy}>Buy Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BuyBottleDialog;
