"use client";
import { Button } from "@/components/ui/button";

import {
  Loader2,
  SearchCheckIcon,
  Trash2Icon,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

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
import Link from "next/link";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

const page = () => {
  interface Booking {
    _id: string;
    name: string;
    address: string;
    phone: string;
    checkin: Date;
    checkout: Date;
    paid: boolean;
    requests: string;
    numberofguests: string;
    roomnum: string;
    status: string;
    roomtype: string;
    amount: string;
    updatedAt:Date
  }
  interface Room {
    roomnum: string;
  }
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) =>
      booking.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [bookings, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const getuser = async () => {
      try {
        const response = await axios.get("/api/get-total-guests");
        const guests = response.data.guests;
        if (Array.isArray(guests)) {
          const formattedGuests = guests.map((guest: any) => ({
            ...guest,
            checkin: new Date(guest.checkin),
            checkout: new Date(guest.checkout),
          }));
          setBookings(formattedGuests);
        } else {
          console.error('Expected guests to be an array:', guests);
          toast({ variant: 'destructive', title: 'Error', description: 'Unexpected data format' });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast({ variant: 'destructive', title: 'Error', description: 'Failed to fetch bookings' });
      }
    };
    getuser();
  }, []);

  if (!user || user.role !== "staff") {
    router.replace('/');
    return null;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-32 w-32 mb-4" />
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-right mr-20 text-primary">
        Welcome<div className="text-teal-500 font-bold">{user.username}</div>
      </h1>
      <div className="flex flex-row gap-4">
        <Link
          href={"/guestlist"}
          className="ml-20 hover:bg-teal-700 bg-black text-white py-2 px-4 rounded"
        >
          List of Active Guests
        </Link>
        <Link
          href={"/guestlist"}
          className="hover:bg-teal-700 bg-black text-white py-2 px-4 rounded"
        >
          Total guestlist
        </Link>
      </div>
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
                <TableHead>Address</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Room</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Check-out</TableHead>
                <TableHead>Requests</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking, index) => (
                <TableRow key={booking._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{booking.name}
                  <div className="text-sm text-muted-foreground">
                            {booking.phone}
                          </div>
                  </TableCell>
                  <TableCell>{booking.address}</TableCell>
                  <TableCell>{booking.numberofguests}</TableCell>
                  <TableCell>{booking.roomtype}</TableCell>
                   <TableCell>{booking.checkin?.toLocaleString()}</TableCell>
                  <TableCell>{booking.updatedAt ? new Date(booking.updatedAt).toISOString().split('T')[0] : ''}</TableCell>
                  <TableCell>{booking.requests}</TableCell>
        
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;