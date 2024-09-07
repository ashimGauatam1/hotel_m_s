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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Label } from "@radix-ui/react-label";
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
  }
  interface Room {
    roomnum: string;
  }
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const [loading,Setloading]=useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [room, setRoom] = useState("");
  const [ID, setID] = useState("");
  const [staff, setStaff] = useState("");
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
      const response = await axios.get("/api/get-all-booking");
      setBookings(response.data.guests);
    };
    getuser();
    const intervalId = setInterval(getuser, 10000);

  return () => clearInterval(intervalId);
  }, []);

  const handleCheckIn = async () => {
    Setloading(true)
    try {
      const response = await axios.post("/api/checkin", {
        roomnum: room,
        id: ID,
        staff: staff,
      });
      console.log(response)
      if (response.status == 200) {
       
        toast({
          title:"Success",
          variant:"success",
          description:response.data.message,
        }) 
      }
      
    } catch (error) {
      console.log(error);
      toast({
        title:"Error",
        variant:"destructive",
        description:`${error.response.data.message}`,
      })
    }
    finally{
    Setloading(false)
    }
  };

  return (
    <>
      {
          user?.role!="staff"? <>
          {router.replace('/')}
          </>:
        <>
        {!bookings?<>
          <div className="flex flex-col items-center justify-center min-h-screen">
  <Loader2 className="animate-spin h-32 w-32 mb-4" />
  <p className="text-xl font-semibold">Loading...</p>
</div>
        </>
        :
          <div>
            <h1 className="text-xl font-bold text-right mr-20 text-primary">
              Welcome<div className="text-teal-500 font-bold">{user.username}</div>
            </h1>
            <Link
              href={"/guestlist"}
              className="ml-20 hover:bg-teal-700 bg-black text-white py-2 px-4 rounded"
            >
              List of Guests
            </Link>
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
                      <TableHead>Payment</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking, index) => (
                      <TableRow key={booking._id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{booking.name}</TableCell>
                        <TableCell>{booking.address}</TableCell>
                        <TableCell>{booking.numberofguests}</TableCell>
                        <TableCell>{booking.roomtype}</TableCell>
                        <TableCell>{booking.amount}</TableCell>
                        <TableCell>
                          {booking.checkin?.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {booking.checkout?.toLocaleString()}
                        </TableCell>
                        <TableCell>{booking.requests}</TableCell>
                        <TableCell>
                          {booking.paid ? (
                            <Badge
                              variant="secondary"
                              className="bg-green-500 text-white"
                            >
                              Paid
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-red-500 text-white text-center"
                            >
                              Not Paid
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => {
                                    setID(booking._id);
                                    console.log(booking._id)
                                  }}
                                >
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
                                        required
                                        id="roomnum"
                                        type="text"
                                        placeholder="Enter room number"
                                        onChange={(e) => {
                                          setRoom(e.target.value);
                                        }}
                                        
                                      />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="staff">Staff Name</Label>
                                      <Input
                                      required
                                        id="staff"
                                        type="text"
                                        placeholder="Enter staff name"
                                        onChange={(e) => {
                                          setStaff(e.target.value);
                                        }}
                                      />
                                    </div>
                                  </CardContent>
                                  <CardFooter>
                                    <Button
                                      className="ml-auto hover:bg-teal-600"
                                      onClick={handleCheckIn}
                                    >
                                    {loading?<><Loader2 className="w-5 h-5 animate-spin mr-2"/> <div>Checking In ....</div></>:<div> Check In</div>}
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
}</>
      }
    </>
  );
};

export default page;
