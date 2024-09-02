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
      <Carousel className="w-full h-auto">
        <CarouselContent>
          <CarouselItem>
            
            <div className="carousel-item min-w-full flex-shrink-0 -mt-20">
              <div className="carousel-item min-w-full flex-shrink-0">
                <img
                  src="https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?t=st=1724936052~exp=1724939652~hmac=b2d60105d94beb8eb36612f71a6b00d89c0c4daeae89a01025478686e9e78f09&w=996"
                  alt="Luxury Hotel Resort"
                  className="w-full h-[30rem] object-cover"
                />
                <div className="p-4 text-center bg-teal-200">
                  <h2 className="text-xl font-bold mb-2">
                    Luxury Hotel Resort
                  </h2>
                  <p className="text-gray-600 italic text-sm font-semibold">
                    Experience the ultimate luxury with top-notch amenities and
                    stunning poolside views.
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item min-w-full flex-shrink-0 -mt-20">
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg?t=st=1724942596~exp=1724946196~hmac=4c7b01f1e2c7b8adb1e7feb9a16bd712b790f3eb7995f54430123426b6a24197&w=996"
                alt="Elegant Suite"
                className="w-full h-[30rem] object-cover"
              />
              <div className="p-4 text-center bg-teal-200">
                <h2 className="text-xl font-bold mb-2">Elegant Suite</h2>
                <p className="text-gray-600 italic text-sm font-semibold">
                  Indulge in comfort with a beautifully designed bedroom suite
                  and exceptional service.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item min-w-full flex-shrink-0 -mt-20">
              <img
                src="https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg?t=st=1724942391~exp=1724945991~hmac=a312e32f8a2d4ea6f6ffb5921d8419cf1d373c0928a431dfdd482794268294a1&w=996"
                alt="Tropical Paradise"
                className="w-full h-[30rem] object-cover"
              />
              <div className="p-4 text-center bg-teal-200">
                <h2 className="text-xl font-bold mb-2">Tropical Paradise</h2>
                <p className="text-gray-600 italic text-sm font-semibold">
                  Relax in a tropical paradise with breathtaking ocean views and
                  cozy hammocks.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item min-w-full flex-shrink-0 -mt-20">
              <img
                src="https://img.freepik.com/free-photo/breakfast-setup-with-egg-salad-sausages-butter-cheese-honey-green-salad_140725-8260.jpg?t=st=1724942845~exp=1724946445~hmac=49751fc124a2ccb1b4e92e9c2740cde68f59771647807a39509205f7911478f1&w=996"
                alt="Gourmet Breakfast"
                className="w-full h-[30rem] object-cover"
              />
              <div className="p-4 text-center bg-teal-200">
                <h2 className="text-xl font-bold mb-2">Gourmet Breakfast</h2>
                <p className="text-gray-600 italic text-sm font-semibold">
                  Start your day with a gourmet breakfast featuring fresh and
                  delicious options.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="carousel-item min-w-full flex-shrink-0 -mt-20">
              <img
                src="https://img.freepik.com/free-photo/dinner-table-with-fried-meat-dishes-sauces_181624-43898.jpg?t=st=1724942886~exp=1724946486~hmac=c12f2dc1e13dc2c556a1ad6ab72ea1187b88879782ac1e20c9393614c247f67f&w=996"
                alt="Exquisite Dining"
                className="w-full h-[30rem] object-cover"
              />
              <div className="p-4 text-center bg-teal-200">
                <h2 className="text-xl font-bold mb-2">Exquisite Dining</h2>
                <p className="text-gray-600 italic text-sm font-semibold">
                  Enjoy an exquisite dining experience with a variety of savory
                  dishes and fine cuisine.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Fragment>
  );
};

export default CarouselComponent;
