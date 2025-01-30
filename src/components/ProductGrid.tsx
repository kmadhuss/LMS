import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  imageUrl: string;
  brandName: string;
  price: number;
}

interface ProductGridProps {
  products?: Product[];
  onQuickBuy?: (productId: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=800",
      brandName: "Highland Reserve",
      price: 59.99,
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1585975754487-d471263ec7fa?w=800",
      brandName: "Crystal Vodka",
      price: 45.99,
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1611536326696-b52be8ef45f6?w=800",
      brandName: "Bordeaux Red",
      price: 89.99,
    },
    {
      id: "4",
      imageUrl:
        "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800",
      brandName: "Aged Rum",
      price: 69.99,
    },
    {
      id: "5",
      imageUrl:
        "https://images.unsplash.com/photo-1614313511387-1436a4480ebb?w=800",
      brandName: "Single Malt",
      price: 129.99,
    },
    {
      id: "6",
      imageUrl:
        "https://images.unsplash.com/photo-1571193161738-dedf11ad9f7a?w=800",
      brandName: "Premium Gin",
      price: 54.99,
    },
  ],
  onQuickBuy = (productId: string) =>
    console.log(`Quick buy clicked for product ${productId}`),
}: ProductGridProps) => {
  return (
    <div className="w-full min-h-[642px] bg-gray-50 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            brandName={product.brandName}
            price={product.price}
            onQuickBuy={() => onQuickBuy(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
