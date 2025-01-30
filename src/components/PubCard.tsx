import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

interface PubCardProps {
  name: string;
  image: string;
  distance: string;
  rating: number;
  onClick?: () => void;
}

const PubCard = ({
  name = "The Local Pub",
  image = "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=300&h=200&fit=crop",
  distance = "0.5 miles away",
  rating = 4.5,
  onClick = () => {},
}: PubCardProps) => {
  return (
    <Card
      className="w-[280px] h-[180px] bg-white cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <CardContent className="p-0 h-full">
        <div className="relative h-full">
          <img
            src={image}
            alt={name}
            className="w-full h-[120px] object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-white rounded-b-lg">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-base truncate">{name}</h3>
                <p className="text-sm text-gray-500">{distance}</p>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PubCard;
