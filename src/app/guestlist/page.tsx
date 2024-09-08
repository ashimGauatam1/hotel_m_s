"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, FilePenIcon, UserCheck2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import axios from "axios";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
const page = () => {
  const [searchGuest, setSearchGuest] = useState("");
  const [filteredGuests, setFilteredGuests] = useState<Guests[]>([]);

  interface Guests {
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

  useEffect(() => {
    const getGuests = async () => {
      const response = await axios.get("/api/get-all-guests");
      console.log(response.data.guests);
      setFilteredGuests(response.data.guests);
    };
    getGuests();
  }, []);

  const handleCheckOut = async(ID: string) => async (event: React.MouseEvent<HTMLButtonElement>) => {
    const response=await axios.post('/api/check-out',{
      id:ID
    })
    console.log(response)
  }
  return (
    <div>
      <Card className="col-span-2 lg:col-span-2 -ml-2">
        <CardHeader>
          <Link
            href={"/staffpage"}
            className="ml-20 hover:bg-teal-700 bg-black text-white py-2 px-4 rounded w-fit"
          >
            Dashboard
          </Link>
          <CardTitle className="text-center ">Total Present Guest List</CardTitle>
          <div className="relative w-full max-w-md mx-auto">
            <UserCheck2Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground mx-auto -mr-2 mb-10" />
            <Input
              type="search"
              placeholder="Search guests..."
              className="rounded-md w-80 mx-auto"
              value={searchGuest}
              onChange={(e) => setSearchGuest(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>S.N.</TableHead>
                  <TableHead className="text-center">Guest</TableHead>
                  <TableHead>Room Number</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Requests</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGuests.map((guest, index) => (
                  <TableRow key={index}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar className="border w-10 h-10">
                          <AvatarImage
                            src="/placeholder-user.jpg"
                            alt="@username"
                          />
                          <AvatarFallback>
                            {guest.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                          <div className="font-medium">{guest.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {guest.phone}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">{guest.roomnum}
                      <p className="text-gray-500">
                      {guest.roomtype}
                      </p>
                    </TableCell>
                    <TableCell className="text-center">{guest.numberofguests}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          guest.status === "checked"
                            ? "success"
                            : "destructive"
                        }
                        className="text-xs"
                      >
                        {guest.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{guest.checkin ? new Date(guest.checkin).toISOString().split('T')[0] : ''}</TableCell>
                    <TableCell>{guest.checkin ? new Date(guest.checkout).toISOString().split('T')[0] : ''}</TableCell>
                    <TableCell>{guest.requests}</TableCell>
                    
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2">
                        <Button variant="default" className="hover:bg-red-600" onClick={handleCheckOut(guest._id)}>checkout</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
