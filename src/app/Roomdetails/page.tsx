"use client";
import { CheckIcon, CoffeeIcon, TvIcon, WifiIcon } from "lucide-react";
import Link from "next/link";
import { Button, DayPickerProvider } from "react-day-picker";

const roomData = [
  { type: "Deluxe", price: "179.00", description: "Spacious and comfortable, ideal for couples or small families." },
  { type: "Superior", price: "179.00", description: "Spacious and comfortable, ideal for couples or small families." },
  { type: "Executive", price: "229.00", description: "Ideal for business travelers or those seeking extra space and amenities." },
  { type: "Family", price: "249.00", description: "Ideal for families or groups, with ample space and privacy." },
  { type: "Penthouse", price: "399.00", description: "Luxurious and spacious, with stunning views and premium amenities." },
  { type: "Oceanview", price: "279.00", description: "Enjoy stunning ocean views from the comfort of your room." },
  { type: "Honeymoon", price: "179.00", description: "Romantic and intimate, perfect for a couples getaway." },
  { type: "Standard", price: "99.00", description: "Compact and efficient, perfect for solo travelers or couples." },
];

const Page = () => {
  return (
    <DayPickerProvider initialProps={{ mode: "single" }}>
      <div className="-mt-10">
        <section className="w-full py-5 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore Our Room Options
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the perfect room for your needs, from cozy studios to spacious suites.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {roomData.map((room, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{room.type}</h3>
                    <span className="text-green-600 font-semibold">${room.price}/night</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    {room.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                      Example feature 1
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                      Example feature 2
                    </li>
                    {/* Add more features here */}
                    <li>
                      <WifiIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                      Free WiFi
                    </li>
                    <li>
                      <TvIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                      Flat-screen TV
                    </li>
                    <li>
                      <CoffeeIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                      Coffee maker
                    </li>
                  </ul>
                  <Link href={`/book-room?roomtype=${room.type.toLowerCase()}&price=${room.price}`}>
                    <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-800">
                      Book Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </DayPickerProvider>
  );
};

export default Page;
