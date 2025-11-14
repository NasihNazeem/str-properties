import { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ListingsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listings = [
    {
      id: 1,
      title: "Modern Downtown Calgary Condo",
      location: "Calgary, AB",
      propertyType: "Condo",
      beds: 2,
      baths: 2,
      sqft: 1200,
      description:
        "Stunning two-bedroom condo in the heart of downtown Calgary. Features floor-to-ceiling windows with panoramic city views, modern finishes throughout, and steps away from restaurants, shopping, and the C-Train. Perfect for urban professionals seeking convenience and style.",
    },
    {
      id: 2,
      title: "Executive Family Home in Aspen Woods",
      location: "Calgary, AB",
      propertyType: "Single Family",
      beds: 4,
      baths: 3,
      sqft: 2800,
      description:
        "Beautifully maintained family home in the prestigious Aspen Woods community. This spacious property features a gourmet kitchen, finished basement, and professionally landscaped backyard. Close to top-rated schools, WinSport, and quick access to the mountains.",
    },
    {
      id: 3,
      title: "Charming Bungalow in Old Strathcona",
      location: "Edmonton, AB",
      propertyType: "Bungalow",
      beds: 3,
      baths: 2,
      sqft: 1650,
      description:
        "Character-filled bungalow in Edmonton's vibrant Old Strathcona neighborhood. Recently updated with modern amenities while preserving original charm. Walking distance to Whyte Avenue's shops, cafes, and entertainment. Ideal for first-time buyers or investors.",
    },
    {
      id: 4,
      title: "Luxury Penthouse in Eau Claire",
      location: "Calgary, AB",
      propertyType: "Penthouse",
      beds: 3,
      baths: 3,
      sqft: 2200,
      description:
        "Stunning penthouse in Calgary's prestigious Eau Claire district. Features a private rooftop terrace with breathtaking views of the Bow River and downtown skyline. High-end finishes, custom kitchen, and floor-to-ceiling windows create an unparalleled living experience.",
    },
    {
      id: 5,
      title: "Modern Townhouse in Windermere",
      location: "Edmonton, AB",
      propertyType: "Townhouse",
      beds: 3,
      baths: 2,
      sqft: 1800,
      description:
        "Contemporary three-bedroom townhouse in Edmonton's sought-after Windermere community. Open-concept main floor, upgraded appliances, and attached double garage. Minutes from shopping, schools, and recreational facilities. Perfect for growing families.",
    },
  ];

  const itemsPerView = 3; // Show 3 cards at a time on desktop
  const maxIndex = Math.max(0, listings.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Previous Clients
          </h2>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex disabled:opacity-30"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex disabled:opacity-30"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden pr-4">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {listings.map((listing) => (
                <article
                  key={listing.id}
                  className="bg-white rounded-lg shadow-card border border-border overflow-hidden hover:shadow-lg transition-smooth group flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`,
                  }}
                >
                  {/* Content */}
                  <div className="p-6">
                    {/* Property Type Badge */}
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      {listing.propertyType}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      {listing.title}
                    </h2>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{listing.location}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        <span>{listing.beds} Beds</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        <span>{listing.baths} Baths</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        <span>{listing.sqft.toLocaleString()} sq ft</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                      {listing.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsCarousel;
