"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Building2,
  CalendarIcon,
  Check,
  Clock,
  Home,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StudentRoomBooking() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [bookingSuccess, setBookingSuccess] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  const handleBooking = () => {
    setBookingSuccess(true)
    setTimeout(() => setBookingSuccess(false), 3000)
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-700">
          <Building2 className="h-6 w-6" />
          <span>CampusConnect</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
              <AvatarFallback className="bg-teal-100 text-teal-800">JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-500">student@campus.edu</div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-20 mt-16 w-64 border-r bg-background md:static"
          >
            <nav className="grid gap-2 p-4 text-sm">
              <Link
                href="/student/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/student/attendance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <BookOpen className="h-4 w-4" />
                My Attendance
              </Link>
              <Link
                href="/student/room-booking"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
              >
                <CalendarIcon className="h-4 w-4" />
                Book a Room
              </Link>
              <Link
                href="/student/schedule"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Clock className="h-4 w-4" />
                My Schedule
              </Link>
              <Link
                href="/student/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/student/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Button
                variant="ghost"
                className="flex items-center justify-start gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-red-50 hover:text-red-900"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </nav>
          </motion.aside>
        )}
        <main className="flex-1 p-4 md:p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-teal-800">Room Booking</h1>
                <p className="text-gray-500">Reserve study rooms and meeting spaces</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700">My Bookings</Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">Available Rooms</CardTitle>
                  <Building2 className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">For today's bookings</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">My Bookings</CardTitle>
                  <CalendarIcon className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Upcoming this week</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
                  <Users className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">1-3 PM</div>
                  <p className="text-xs text-muted-foreground">Highest room utilization</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-6">
              <Card className="md:col-span-1">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Find a Room</CardTitle>
                  <CardDescription>Search for available rooms</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
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
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      <Search className="mr-2 h-4 w-4" /> Find Rooms
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Available Rooms</CardTitle>
                  <CardDescription>Rooms matching your search criteria</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {bookingSuccess ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex flex-col items-center justify-center p-6 border rounded-md"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium">Booking Confirmed!</h3>
                      <p className="text-sm text-gray-500 mt-1">Room 101 - Main Building</p>
                      <p className="text-sm text-gray-500">Tomorrow, 9:00 AM - 11:00 AM</p>
                      <Button variant="outline" className="mt-4">
                        View My Bookings
                      </Button>
                    </motion.div>
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
                        <TableRow className="hover:bg-teal-50 transition-colors">
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
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleBooking}>
                              Book
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-teal-50 transition-colors">
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
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleBooking}>
                              Book
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-teal-50 transition-colors">
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
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleBooking}>
                              Book
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-teal-50 transition-colors">
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
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleBooking}>
                              Book
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-teal-50 transition-colors">
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
                            <Button size="sm" className="bg-teal-600 hover:bg-teal-700" onClick={handleBooking}>
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
          </motion.div>
        </main>
      </div>
    </div>
  )
}
