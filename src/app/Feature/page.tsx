import React from 'react'
import { WifiIcon,AlarmClockIcon ,LucidePocketKnife, PocketKnifeIcon, HomeIcon, ParkingMeterIcon, SpadeIcon, MenuSquareIcon, BarChart2Icon} from 'lucide-react'

const page = () => {
  return (
    <div>
        <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-3xl md:text-4xl text-black font-serif">Hotel Amenities</h2>
          <p className="mt-2 text-muted-foreground md:text-lg italic">Discover the features that make our hotel stand out.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <WifiIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Free WiFi</h3>
              <p className="text-muted-foreground">Stay connected with high-speed internet.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <AlarmClockIcon className="h-6 w-6 " />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Free Breakfast</h3>
              <p className="text-muted-foreground">Start your day with a delicious breakfast.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <PocketKnifeIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Outdoor Pool</h3>
              <p className="text-muted-foreground">Relax and unwind in our refreshing pool.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <HomeIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Fitness Center</h3>
              <p className="text-muted-foreground">Stay active with our state-of-the-art gym.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ParkingMeterIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Free Parking</h3>
              <p className="text-muted-foreground">Convenient parking available for all guests.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <SpadeIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Spa Services</h3>
              <p className="text-muted-foreground">Indulge in our luxurious spa treatments.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <MenuSquareIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">On-site Restaurant</h3>
              <p className="text-muted-foreground">Enjoy delicious meals at our award-winning restaurant.</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <BarChart2Icon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium">Lounge Bar</h3>
              <p className="text-muted-foreground">Unwind with a cocktail in our cozy lounge bar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page