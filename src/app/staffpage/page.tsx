"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  CheckIcon,
  FilePenIcon,
  SearchCheckIcon,
  Trash2Icon,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

const page = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState([
    {
      id: 1,
      s_n: 1,
      name: "John Doe",
      checkIn: "2023-06-01",
      checkOut: "2023-06-05",
      payment: "Paid",
    },
    {
      id: 2,
      s_n: 2,
      name: "Jane Smith",
      checkIn: "2023-06-10",
      checkOut: "2023-06-15",
      payment: "Not Paid",
    },
    {
      id: 3,
      s_n: 3,
      name: "Bob Johnson",
      checkIn: "2023-07-01",
      checkOut: "2023-07-07",
      payment: "Paid",
    },
    {
      id: 4,
      s_n: 4,
      name: "Sarah Lee",
      checkIn: "2023-07-15",
      checkOut: "2023-07-20",
      payment: "Not Paid",
    },
  ]);
  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [bookings, searchTerm]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
 
      {
        //   user?.role!="staff"? <>
        //   {router.replace('/')}
        //   </>:
        <>
          <div>
            <h1 className='text-xl font-bold text-right mr-20 text-primary'>Welcome </h1>
            <Link href={"/guestlist"} className="ml-20 hover:bg-teal-700 bg-black text-white py-2 px-4 rounded">
            
            List of Guests</Link>
            <div className="container mx-auto py-8 ">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Booking Management</h1>
                <div className="relative w-full max-w-md">
                  <SearchCheckIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search bookings..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.N.</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Check-in</TableHead>
                      <TableHead>Check-out</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.s_n}</TableCell>
                        <TableCell>{booking.name}</TableCell>
                        <TableCell>{booking.checkIn}</TableCell>
                        <TableCell>{booking.checkOut}</TableCell>
                        <TableCell>
                          {booking.payment === "Paid" ? (
                            <Badge
                              variant="secondary"
                              className="bg-green-500 text-white"
                            >
                              {booking.payment}
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-red-500 text-white"
                            >
                              {booking.payment}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="icon">
                                  <FilePenIcon className="h-4 w-4" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent>
                                <Card className="w-full max-w-sm">
                                  <CardHeader>
                                    <CardTitle>Check In</CardTitle>
                                    <CardDescription>
                                      Enter the room number and staff name.
                                    </CardDescription>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="room">Room Number</Label>
                                      <Input
                                        id="room"
                                        type="text"
                                        placeholder="Enter room number"
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="staff">Staff Name</Label>
                                      <Input
                                        id="staff"
                                        type="text"
                                        placeholder="Enter staff name"
                                      />
                                    </div>
                                  </CardContent>
                                  <CardFooter>
                                    <Button className="ml-auto hover:bg-teal-600">
                                      Check In
                                    </Button>
                                  </CardFooter>
                                </Card>
                              </PopoverContent>
                            </Popover>

                            <Button variant="outline" size="icon">
                              <Trash2Icon className="h-4 w-4" />
                              <span className="sr-only">Delete</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default page;
