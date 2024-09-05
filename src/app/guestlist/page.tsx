"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckIcon, FilePenIcon, UserCheck2Icon} from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
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
const page = () => {
  const [searchGuest, setSearchGuest] = useState("");
  const filteredGuests = useMemo(() => {
    return [
      {
        name: "Olivia Smith",
        email: "olivia@example.com",
        room: 201,
        checkIn: "2023-06-01",
        checkOut: "2023-06-05",
        status: "Checked-in",
      },
      {
        name: "Noah Williams",
        email: "noah@example.com",
        room: 301,
        checkIn: "2023-06-03",
        checkOut: "2023-06-07",
        status: "Checked-in",
      },
      {
        name: "Emma Brown",
        email: "emma@example.com",
        room: 401,
        checkIn: "2023-06-05",
        checkOut: "2023-06-10",
        status: "Checked-in",
      },
      {
        name: "Liam Johnson",
        email: "liam@example.com",
        room: 501,
        checkIn: "2023-06-07",
        checkOut: "2023-06-12",
        status: "Checked-out",
      },
    ].filter(
      (guest) =>
        guest.name.toLowerCase().includes(searchGuest.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchGuest.toLowerCase())
    );
  }, [searchGuest]);
  return (
    <div>
       
            
      <Card className="col-span-2 lg:col-span-2">
        <CardHeader>
      <Link href={"/staffpage"} className="ml-20 hover:bg-teal-700 bg-black text-white py-2 px-4 rounded w-fit">
      Dashboard</Link>
          <CardTitle className="text-center">Guest List</CardTitle>
          <div className="relative w-full max-w-md mx-auto" >
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
                  <TableHead>Guest</TableHead>
                  <TableHead>Room</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGuests.map((guest, index) => (
                  <TableRow key={index}>
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
                            {guest.email}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{guest.room}</TableCell>
                    <TableCell>{guest.checkIn}</TableCell>
                    <TableCell>{guest.checkOut}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          guest.status === "Checked-in"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {guest.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="text-blue-500"
                        >
                          <FilePenIcon className="w-4 h-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className={`${
                            guest.status === "Checked-in"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          <CheckIcon className="w-4 h-4" />
                          <span className="sr-only">Check-out</span>
                        </Button>
                        <Button className="-mr-20 ml-5">Check Out</Button>
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
