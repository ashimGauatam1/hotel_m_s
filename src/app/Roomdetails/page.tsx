"use client"
import { CheckIcon, CoffeeIcon, TvIcon, WifiIcon } from 'lucide-react'

import { Button, DayPickerProvider } from 'react-day-picker'

const page = () => {
  return (
    <DayPickerProvider initialProps={{ mode: 'single' }}>
    <div className='-mt-10'>
        <section className="w-full py-5 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Room Options</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find the perfect room for your needs, from cozy studios to spacious suites.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Deluxe</h3>
              <span className="text-green-600 font-semibold">$179/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Spacious and comfortable, ideal for couples or small families.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Separate living and sleeping areas
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Full kitchen with appliances
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Spacious bathroom with tub and shower
              </li>
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
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Superior</h3>
              <span className="text-green-600 font-semibold">$179/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Spacious and comfortable, ideal for couples or small families.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Separate living and sleeping areas
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Full kitchen with appliances
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Spacious bathroom with tub and shower
              </li>
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
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Executive</h3>
              <span className="text-green-600 font-semibold">$229/night</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Ideal for business travelers or those seeking extra space and amenities.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Separate living room and bedroom
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Fully equipped kitchen with high-end appliances
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Luxurious bathroom with spa-like amenities
              </li>
              <li>
                <WifiIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                High-speed WiFi
              </li>
              <li>
                <TvIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Large flat-screen TV
              </li>
              <li>
                <CoffeeIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Nespresso coffee machine
              </li>
            </ul>
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Family</h3>
              <span className="text-green-600 font-semibold">$249/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Ideal for families or groups, with ample space and privacy.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Two separate bedrooms with queen-size beds
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Full kitchen with dining area
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Two bathrooms with tub and shower
              </li>
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
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Penthouse</h3>
              <span className="text-green-600 font-semibold">$399/night</span>
            </div>
            <p className="text-muted-foreground mt-2">
              Luxurious and spacious, with stunning views and premium amenities.
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Expansive living and dining areas
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Gourmet kitchen with high-end appliances
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Luxurious master suite with spa-like bathroom
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Private balcony with panoramic views
              </li>
              <li>
                <WifiIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                High-speed WiFi
              </li>
              <li>
                <TvIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Multiple flat-screen TVs
              </li>
            </ul>
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Oceanview</h3>
              <span className="text-green-600 font-semibold">$279/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Enjoy stunning ocean views from the comfort of your room.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Panoramic ocean views from private balcony
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Spacious living and sleeping areas
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Fully equipped kitchen
              </li>
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
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Honeymoon</h3>
              <span className="text-green-600 font-semibold">$179/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Romantic and intimate, perfect for a couples getaway.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                King-size bed with plush bedding
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Luxurious bathroom with deep soaking tub
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Private balcony with stunning views
              </li>
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
                Complimentary champagne and chocolates
              </li>
            </ul>
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
           
          </div>
           <div className="bg-card p-6 rounded-lg shadow-lg shadow-gray-300">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Standard</h3>
              <span className="text-green-600 font-semibold">$99/night</span>
            </div>
            <p className="text-muted-foreground mt-2">Compact and efficient, perfect for solo travelers or couples.</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Kitchenette with mini-fridge and microwave
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Comfortable queen-size bed
              </li>
              <li>
                <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                Ensuite bathroom with shower
              </li>
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
              <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-dark">
  Book Now
</button>
          </div>
        </div>
      </div>
    </section>
    </div>
    
    </DayPickerProvider>
  )
}

export default page