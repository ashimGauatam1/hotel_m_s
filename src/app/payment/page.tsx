import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CalendarIcon, CheckCircleIcon, CreditCardIcon, LockKeyholeIcon, MapPinnedIcon, TagIcon } from 'lucide-react'
const page = () => {
  return (
    <div >
        <div className='flex items-center justify-center h-screen'>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="container mx-auto flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-bold mb-4 animate-fadeIn">Payment</h1>
              <Card className="animate-fadeIn">
                <CardContent className="space-y-6 mt-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 ">
                      <Label htmlFor="card-number">
                        <CreditCardIcon className="mr-2 h-5 w-5" />
                        Card Number
                      </Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" className="animate-fadeIn" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiration">
                        <CalendarIcon className="mr-2 h-5 w-5" />
                        Expiration
                      </Label>
                      <div className="grid grid-cols-2 gap-2 animate-fadeIn">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Month" />
                          </SelectTrigger>
                          <SelectContent>
                         
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                           
                             
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">
                      <LockKeyholeIcon className="mr-2 h-5 w-5" />
                      CVV
                    </Label>
                    <Input id="cvv" placeholder="123" className="animate-fadeIn" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="billing-address">
                      <MapPinnedIcon className="mr-2 h-5 w-5" />
                      Billing Address
                    </Label>
                    <Textarea
                      id="billing-address"
                      rows={3}
                      placeholder="123 Main St, Anytown USA"
                      className="animate-fadeIn"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="promo-code">
                      <TagIcon className="mr-2 h-5 w-5" />
                      Promo Code
                    </Label>
                    <div className="flex gap-2 animate-fadeIn">
                      <Input id="promo-code" placeholder="Enter promo code" className="flex-1" />
                      <Button>
                        <CheckCircleIcon className="mr-2 h-5 w-5" />
                        Apply
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex items-center justify-center animate-fadeIn">
            <img
              src="https://img.freepik.com/free-vector/credit-card-payment-concept-illustration_114360-584.jpg?t=st=1725475384~exp=1725478984~hmac=dffd361db56a539fc766bf9409e9df50f6f9fe0ba27a1f1e432f2c501da8b627&w=996"
              alt="Payment Image"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
              style={{ aspectRatio: "400/400", objectFit: "cover" }}
            />
          </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default page