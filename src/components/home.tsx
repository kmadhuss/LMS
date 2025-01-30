import React, { useState } from "react";
import Header from "./Header";
import PubCarousel from "./PubCarousel";
import ProductGrid from "./ProductGrid";
import BottomNav from "./BottomNav";

interface HomeProps {
  onSearch?: (query: string) => void;
  onVoiceSearch?: () => void;
  onCategorySelect?: (category: string) => void;
  onPubClick?: (pubId: string) => void;
  onQuickBuy?: (productId: string) => void;
  onTabChange?: (tab: "home" | "search" | "cart" | "account") => void;
}

const Home = ({
  onSearch = () => {},
  onVoiceSearch = () => {},
  onCategorySelect = () => {},
  onPubClick = () => {},
  onQuickBuy = () => {},
  onTabChange = () => {},
}: HomeProps) => {
  const [activeTab, setActiveTab] = useState<
    "home" | "search" | "cart" | "account"
  >("home");

  const handleTabChange = (tab: "home" | "search" | "cart" | "account") => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-[60px]">
      <Header
        onSearch={onSearch}
        onVoiceSearch={onVoiceSearch}
        onCategorySelect={onCategorySelect}
      />

      <main className="max-w-7xl mx-auto">
        <PubCarousel onPubClick={onPubClick} />
        <ProductGrid onQuickBuy={onQuickBuy} />
      </main>

      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default Home;
