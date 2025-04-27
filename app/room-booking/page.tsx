"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Building2, Check, Clock, Search, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RoomBookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleBooking = () => {
    setBookingSuccess(true)
    setTimeout(() => setBookingSuccess(false), 3000)
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Room Booking System</h1>
          <p className="text-gray-500">Reserve and manage campus spaces</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">My Bookings</Button>
          <Button>New Booking</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Rooms</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">For today's bookings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Currently in use</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1-3 PM</div>
            <p className="text-xs text-muted-foreground">Highest room utilization</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mt-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Find a Room</CardTitle>
            <CardDescription>Search for available rooms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <div className="grid gap-2">
                  <Calendar mode="single" selected={date} onSelect={setDate} className="border rounded-md p-3" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="building">Building</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="building">
                    <SelectValue placeholder="Select building" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Buildings</SelectItem>
                    <SelectItem value="main">Main Building</SelectItem>
                    <SelectItem value="science">Science Center</SelectItem>
                    <SelectItem value="library">Library</SelectItem>
                    <SelectItem value="student">Student Center</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="room-type">Room Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="room-type">
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="classroom">Classroom</SelectItem>
                    <SelectItem value="lab">Laboratory</SelectItem>
                    <SelectItem value="conference">Conference Room</SelectItem>
                    <SelectItem value="study">Study Room</SelectItem>
                    <SelectItem value="auditorium">Auditorium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-time">Start Time</Label>
                  <Select defaultValue="9">
                    <SelectTrigger id="start-time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8:00 AM</SelectItem>
                      <SelectItem value="9">9:00 AM</SelectItem>
                      <SelectItem value="10">10:00 AM</SelectItem>
                      <SelectItem value="11">11:00 AM</SelectItem>
                      <SelectItem value="12">12:00 PM</SelectItem>
                      <SelectItem value="13">1:00 PM</SelectItem>
                      <SelectItem value="14">2:00 PM</SelectItem>
                      <SelectItem value="15">3:00 PM</SelectItem>
                      <SelectItem value="16">4:00 PM</SelectItem>
                      <SelectItem value="17">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Select defaultValue="11">
                    <SelectTrigger id="end-time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9">9:00 AM</SelectItem>
                      <SelectItem value="10">10:00 AM</SelectItem>
                      <SelectItem value="11">11:00 AM</SelectItem>
                      <SelectItem value="12">12:00 PM</SelectItem>
                      <SelectItem value="13">1:00 PM</SelectItem>
                      <SelectItem value="14">2:00 PM</SelectItem>
                      <SelectItem value="15">3:00 PM</SelectItem>
                      <SelectItem value="16">4:00 PM</SelectItem>
                      <SelectItem value="17">5:00 PM</SelectItem>
                      <SelectItem value="18">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="capacity">Minimum Capacity</Label>
                <Input id="capacity" type="number" placeholder="Enter number of people" defaultValue="10" />
              </div>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" /> Find Rooms
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Available Rooms</CardTitle>
            <CardDescription>Rooms matching your search criteria</CardDescription>
          </CardHeader>
          <CardContent>
            {bookingSuccess ? (
              <div className="flex flex-col items-center justify-center p-6 border rounded-md">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-medium">Booking Confirmed!</h3>
                <p className="text-sm text-gray-500 mt-1">Room 101 - Main Building</p>
                <p className="text-sm text-gray-500">Tomorrow, 9:00 AM - 11:00 AM</p>
                <Button variant="outline" className="mt-4">
                  View My Bookings
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Room</TableHead>
                    <TableHead>Building</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Features</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Room 101</TableCell>
                    <TableCell>Main Building</TableCell>
                    <TableCell>Classroom</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant="outline">Projector</Badge>
                        <Badge variant="outline">Whiteboard</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={handleBooking}>
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Room 203</TableCell>
                    <TableCell>Science Center</TableCell>
                    <TableCell>Laboratory</TableCell>
                    <TableCell>24</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant="outline">Lab Equipment</Badge>
                        <Badge variant="outline">Computers</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={handleBooking}>
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Conference Room A</TableCell>
                    <TableCell>Library</TableCell>
                    <TableCell>Conference Room</TableCell>
                    <TableCell>12</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant="outline">Video Conf</Badge>
                        <Badge variant="outline">Whiteboard</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={handleBooking}>
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Study Room 3</TableCell>
                    <TableCell>Library</TableCell>
                    <TableCell>Study Room</TableCell>
                    <TableCell>8</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant="outline">Quiet Zone</Badge>
                        <Badge variant="outline">Whiteboard</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={handleBooking}>
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Auditorium</TableCell>
                    <TableCell>Student Center</TableCell>
                    <TableCell>Auditorium</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Badge variant="outline">AV System</Badge>
                        <Badge variant="outline">Stage</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" onClick={handleBooking}>
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
