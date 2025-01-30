import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Mic } from "lucide-react";
import { Badge } from "./ui/badge";

interface HeaderProps {
  onSearch?: (query: string) => void;
  onVoiceSearch?: () => void;
  onCategorySelect?: (category: string) => void;
  categories?: string[];
}

const Header = ({
  onSearch = () => {},
  onVoiceSearch = () => {},
  onCategorySelect = () => {},
  categories = ["Whiskey", "Vodka", "Wine", "Beer", "Gin", "Rum", "Tequila"],
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    onCategorySelect(category);
  };

  return (
    <div className="w-full bg-white shadow-sm p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSearch} className="flex gap-2 mb-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search for drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={onVoiceSearch}
            className="flex-shrink-0"
          >
            <Mic className="h-4 w-4" />
          </Button>
        </form>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
