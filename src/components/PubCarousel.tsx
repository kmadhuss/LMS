import React from "react";
import PubCard from "./PubCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Pub {
  id: string;
  name: string;
  image: string;
  distance: string;
  rating: number;
}

interface PubCarouselProps {
  pubs?: Pub[];
  onPubClick?: (pubId: string) => void;
}

const PubCarousel = ({
  pubs = [
    {
      id: "1",
      name: "The Vintage Bar",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=300&h=200&fit=crop",
      distance: "0.3 miles away",
      rating: 4.8,
    },
    {
      id: "2",
      name: "Craft & Draft",
      image:
        "https://images.unsplash.com/photo-1546854810-9337d12ca882?q=80&w=300&h=200&fit=crop",
      distance: "0.7 miles away",
      rating: 4.5,
    },
    {
      id: "3",
      name: "The Beer Garden",
      image:
        "https://images.unsplash.com/photo-1538488881038-e252a119ace7?q=80&w=300&h=200&fit=crop",
      distance: "1.2 miles away",
      rating: 4.6,
    },
    {
      id: "4",
      name: "Whiskey & Co",
      image:
        "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=300&h=200&fit=crop",
      distance: "1.5 miles away",
      rating: 4.7,
    },
  ],
  onPubClick = (pubId: string) => console.log(`Pub clicked: ${pubId}`),
}: PubCarouselProps) => {
  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Trending Pubs Near You</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pubs.map((pub) => (
              <CarouselItem key={pub.id} className="pl-4 basis-auto">
                <PubCard
                  name={pub.name}
                  image={pub.image}
                  distance={pub.distance}
                  rating={pub.rating}
                  onClick={() => onPubClick(pub.id)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default PubCarousel;
