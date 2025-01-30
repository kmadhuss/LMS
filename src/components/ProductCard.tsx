import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import BuyBottleDialog from "./BuyBottleDialog";

interface ProductCardProps {
  imageUrl?: string;
  brandName?: string;
  price?: number;
  onQuickBuy?: (quantity: number) => void;
}

const ProductCard = ({
  imageUrl = "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800&auto=format&fit=crop&q=60",
  brandName = "Premium Whiskey",
  price = 59.99,
  onQuickBuy = (quantity: number) =>
    console.log(`Quick buy clicked, quantity: ${quantity}`),
}: ProductCardProps) => {
  const [showBuyDialog, setShowBuyDialog] = useState(false);
  return (
    <Card className="w-[300px] h-[400px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative h-[65%] overflow-hidden">
          <img
            src={imageUrl}
            alt={brandName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {brandName}
          </h3>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            <Button
              onClick={() => setShowBuyDialog(true)}
              className="flex items-center gap-2"
              variant="default"
            >
              <ShoppingCart className="w-4 h-4" />
              Quick Buy
            </Button>
          </div>
        </div>
      </CardContent>
      <BuyBottleDialog
        isOpen={showBuyDialog}
        onClose={() => setShowBuyDialog(false)}
        product={{ brandName, price, imageUrl }}
        onBuy={onQuickBuy}
      />
    </Card>
  );
};

export default ProductCard;
