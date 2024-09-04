
import Link from "next/link";
import React from "react";

const Gallary = () => {
  return (
    <div>
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold font-serif text-teal-900">
              Luxurious Hotel Gallery
            </h1>
            <p className=" text-gray-600 italic ">
              Discover the elegance and comfort of our exclusive hotel suites.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Hotel Check-in */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/full-shot-man-carrying-baggage_23-2149963942.jpg?t=st=1725446206~exp=1725449806~hmac=bf0208e9b0ae88d0480eedaf85d6dca0cbc8016ca51a66eda8b4306029cd6028&w=800"
                alt="Hotel Check-in"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Hotel Check-in
                </p>
              </div>
            </Link>
            {/* Pool Area */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/umbrella-hammocks-pool_1203-174.jpg?uid=R151188965&ga=GA1.1.710948496.1723956977&semt=ais_hybrid"
                alt="Pool Area"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Pool Area</p>
              </div>
            </Link>
            {/* Dining Area */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/luxury-dinner-table-hotel_1150-11071.jpg?t=st=1725446253~exp=1725449853~hmac=bc076aaefc5d7fd0287e6e9a7604137e74a2d351fd6d417142d586c727511121&w=800"
                alt="Dining Area"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">Dining Area</p>
              </div>
            </Link>
            {/* Luxury Bedroom Suite */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/3d-rendering-beautiful-comtemporary-luxury-bedroom-suite-hotel-with-tv_105762-2065.jpg?t=st=1725446279~exp=1725449879~hmac=52bace6aad6f45363d963f7dc2021dee6b918049edaa299f99d2ba8140302a40&w=800"
                alt="Luxury Bedroom Suite"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Luxury Bedroom Suite
                </p>
              </div>
            </Link>
            {/* Luxury Bedroom */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/luxury-bedroom-hotel_1150-10836.jpg?t=st=1725446314~exp=1725449914~hmac=165addbca5986f8a3775a373f2face07995a6beea798dcccc36533cca21a7ad8&w=800"
                alt="Luxury Bedroom"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Luxury Bedroom
                </p>
              </div>
            </Link>
            {/* Hotel Hallway */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/view-luxurious-hotel-hallway_23-2150683499.jpg?t=st=1725446343~exp=1725449943~hmac=f99b19a0fd329c26948940639f03408b93bc225a89e8fb99a39e87be6a0e08fd&w=800"
                alt="Hotel Hallway"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Hotel Hallway
                </p>
              </div>
            </Link>
            {/* Couples in Bed */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/happy-young-couple-playing-with-pillows-bed_23-2147862647.jpg?t=st=1725446387~exp=1725449987~hmac=a63ab3eaf3d6eff52efd4c1e6dead1ac2271038a28cf73da066d59faa97ba6a3&w=800"
                alt="Couples in Bed"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Couples in Bed
                </p>
              </div>
            </Link>
            {/* Waiter Serving Food */}
            <Link href="#" className="relative group" prefetch={false}>
              <img
                src="https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=800&t=st=1725446421~exp=1725447021~hmac=6dd3bdc3e91920137f78a671cd2c3a2ab7fcfa2bb90a9365c8302785e6acb143"
                alt="Waiter Serving Food"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">
                  Waiter Serving Food
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-5xl font-extrabold font-serif text-teal-900 text-center mt-5">
        Ready to experience luxury and comfort?
        </p>
        <p className="mt-2 italic font-serif text-gray-600 text-center -mb-30 ">
        Book your room now! By clicking the below button <span className="text-3xl">👇</span>
        </p>
      <div className="flex justify-center items-center min-h-screen ">
        <Link
          href=""
          className="animate-bounce focus:animate-none hover:animate-none inline-flex text-sm font-medium bg-teal-600 px-4 rounded-lg tracking-wide text-white hover:shadow-xl hover:shadow-black"
        >
          <span className="ml-2 text-5xl p-5">
            Book Now !! ➡️
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Gallary;
