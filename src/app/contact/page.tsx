import { MailOpenIcon, MapPinnedIcon, PhoneCallIcon } from 'lucide-react'
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
const page = () => {
  return (
    <div>
         <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground text-lg md:text-xl italic">
          Get in touch with our team for any inquiries or assistance.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-4">
              <PhoneCallIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-muted-foreground">+977 9864452384</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MailOpenIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-muted-foreground">info@daikohotel.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPinnedIcon className="w-8 h-8 text-primary" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-muted-foreground">Lakeside Street 5, Pokhara, Gandakī 33411</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea id="message" rows={5} placeholder="Enter your message" />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page