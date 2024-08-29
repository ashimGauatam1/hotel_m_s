"use clinet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Fragment } from "react";

const CarouselComponent = () => {
  return (
    <Fragment>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="carousel-items flex -mt-10">
              <div className="carousel-item min-w-full flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1724936052~exp=1724939652~hmac=b2d60105d94beb8eb36612f71a6b00d89c0c4daeae89a01025478686e9e78f09&w=996"
                  alt="Hotel 1"
                  className="w-full h-[35rem] object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Hotel Luxury</h2>
                  <p>
                    Experience the ultimate in luxury with top-notch amenities
                    and services.
                  </p>
                </div>
              </div>
              <div className="carousel-item min-w-full flex-shrink-0">
                <img
                  src="hotel2.jpg"
                  alt="Hotel 2"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Beachside Resort</h2>
                  <p>Enjoy stunning ocean views and direct beach access.</p>
                </div>
              </div>
              <div className="carousel-item min-w-full flex-shrink-0">
                <img
                  src="hotel3.jpg"
                  alt="Hotel 3"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Mountain Retreat</h2>
                  <p>
                    Relax in a serene mountain setting with excellent hiking
                    trails.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Fragment>
  );
};

export default CarouselComponent;
