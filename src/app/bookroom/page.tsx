import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from '@/components/ui/card'
import { BathIcon, CalendarDaysIcon, CoffeeIcon, TvIcon, WifiIcon } from 'lucide-react'
const page = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Book Your Stay</h1>
            <p className="mt-3 text-lg text-muted-foreground">Choose your room, dates, and guest details.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Room Selection</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="room-type" className="block text-sm font-medium text-muted-foreground">
                  Room Type
                </label>
                <Select >
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deluxe">Deluxe Room</SelectItem>
                    <SelectItem value="suite">Suite</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-muted-foreground">
                  Guests
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Dates of Stay</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="check-in" className="block text-sm font-medium text-muted-foreground">
                  Check-in
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="mt-1 w-full flex items-center justify-between">
                      <span>04/01/2024</span>
                      <CalendarDaysIcon className="w-5 h-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label htmlFor="check-out" className="block text-sm font-medium text-muted-foreground">
                  Check-out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="mt-1 w-full flex items-center justify-between">
                      <span>04/05/2024</span>
                      <CalendarDaysIcon className="w-5 h-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 max-w-[276px]">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Room Details</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-dark-wood-european-classic-bedroom-suite-hotel_105762-2164.jpg?t=st=1725286273~exp=1725289873~hmac=5e36a79e190e5c80fac79eedec49199cb180633a36e18d25ea66e073fa94b5e8&w=996"
                  alt="Room Image"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Deluxe Room</h3>
                  <p className="text-muted-foreground">
                    Spacious room with king-size bed, en-suite bathroom, and city views.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-medium">Amenities</h4>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <WifiIcon className="w-5 h-5" />
                      Free WiFi
                    </li>
                    <li className="flex items-center gap-2">
                      <TvIcon className="w-5 h-5" />
                      Flat-screen TV
                    </li>
                    <li className="flex items-center gap-2">
                      <CoffeeIcon className="w-5 h-5" />
                      Coffee maker
                    </li>
                    <li className="flex items-center gap-2">
                      <BathIcon className="w-5 h-5" />
                      Ensuite bathroom
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Pricing &amp; Availability</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Room Rate</span>
                <span className="font-medium">$250 / night</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Taxes &amp; Fees</span>
                <span className="font-medium">$50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total</span>
                <span className="font-medium text-2xl">$1,250</span>
              </div>
              <div>
                <p className="text-muted-foreground">The selected room is available for your dates.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Guest Information</h2>
            <form className="mt-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    Name
                  </label>
                  <Input type="text" id="name" placeholder="First and Last Name" className="mt-1 w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    Email
                  </label>
                  <Input type="email" id="email" placeholder="you@example.com" className="mt-1 w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">
                  Phone
                </label>
                <Input type="tel" id="phone" placeholder="(123) 456-7890" className="mt-1 w-full" />
              </div>
              <div>
                <label htmlFor="requests" className="block text-sm font-medium text-muted-foreground">
                  Special Requests
                </label>
                <Textarea
                  id="requests"
                  rows={3}
                  placeholder="e.g. Early check-in, extra towels, etc."
                  className="mt-1 w-full"
                />
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Payment</h2>
            <div className="mt-4">
              <Card>
                <CardContent>
                  <form>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="card-number" className="block text-sm font-medium text-muted-foreground">
                          Card Number
                        </label>
                        <Input type="text" id="card-number" placeholder="0000 0000 0000 0000" className="mt-1 w-full" />
                      </div>
                      <div>
                        <label htmlFor="expiry-date" className="block text-sm font-medium text-muted-foreground">
                          Expiry Date
                        </label>
                        <div className="mt-1 flex gap-2">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="MM" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="01">01</SelectItem>
                              <SelectItem value="02">02</SelectItem>
                              <SelectItem value="03">03</SelectItem>
                              <SelectItem value="04">04</SelectItem>
                              <SelectItem value="05">05</SelectItem>
                              <SelectItem value="06">06</SelectItem>
                              <SelectItem value="07">07</SelectItem>
                              <SelectItem value="08">08</SelectItem>
                              <SelectItem value="09">09</SelectItem>
                              <SelectItem value="10">10</SelectItem>
                              <SelectItem value="11">11</SelectItem>
                              <SelectItem value="12">12</SelectItem>
                            </SelectContent>
                          </Select>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="YY" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="24">24</SelectItem>
                              <SelectItem value="25">25</SelectItem>
                              <SelectItem value="26">26</SelectItem>
                              <SelectItem value="27">27</SelectItem>
                              <SelectItem value="28">28</SelectItem>
                              <SelectItem value="29">29</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <label htmlFor="cvc" className="block text-sm font-medium text-muted-foreground">
                        CVC
                      </label>
                      <Input type="text" id="cvc" placeholder="123" className="mt-1 w-full" />
                    </div>
                    <div className="mt-6">
                      <Button type="submit" className="w-full">
                        Book Now
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page