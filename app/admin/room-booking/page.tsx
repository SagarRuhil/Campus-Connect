"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  Download,
  Filter,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Plus,
  Search,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminRoomBooking() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedBuilding, setSelectedBuilding] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const handleLogout = () => {
    router.push("/login")
  }

  // Sample room booking data
  const bookingData = [
    {
      id: 1,
      roomName: "Lecture Hall A",
      building: "Science Building",
      requestedBy: "Prof. John Smith",
      date: "2023-05-20",
      timeSlot: "09:00 - 11:00",
      purpose: "Physics Lecture",
      status: "Approved",
      capacity: 120,
      equipment: ["Projector", "Audio System", "Whiteboard"],
    },
    {
      id: 2,
      roomName: "Computer Lab 101",
      building: "Technology Center",
      requestedBy: "Dr. Emily Johnson",
      date: "2023-05-21",
      timeSlot: "13:00 - 15:00",
      purpose: "Programming Workshop",
      status: "Pending",
      capacity: 40,
      equipment: ["Computers", "Projector", "Whiteboard"],
    },
    {
      id: 3,
      roomName: "Conference Room B",
      building: "Administration Building",
      requestedBy: "Dean Michael Brown",
      date: "2023-05-22",
      timeSlot: "10:00 - 12:00",
      purpose: "Faculty Meeting",
      status: "Approved",
      capacity: 25,
      equipment: ["Video Conference System", "Whiteboard"],
    },
    {
      id: 4,
      roomName: "Seminar Room 202",
      building: "Arts Building",
      requestedBy: "Prof. Sarah Davis",
      date: "2023-05-22",
      timeSlot: "14:00 - 16:00",
      purpose: "Literature Seminar",
      status: "Rejected",
      capacity: 50,
      equipment: ["Projector", "Audio System"],
    },
    {
      id: 5,
      roomName: "Laboratory 305",
      building: "Science Building",
      requestedBy: "Dr. David Wilson",
      date: "2023-05-23",
      timeSlot: "09:00 - 12:00",
      purpose: "Chemistry Experiment",
      status: "Approved",
      capacity: 30,
      equipment: ["Lab Equipment", "Safety Gear"],
    },
    {
      id: 6,
      roomName: "Lecture Hall C",
      building: "Business Building",
      requestedBy: "Prof. Jessica Taylor",
      date: "2023-05-24",
      timeSlot: "11:00 - 13:00",
      purpose: "Economics Lecture",
      status: "Pending",
      capacity: 100,
      equipment: ["Projector", "Audio System", "Whiteboard"],
    },
    {
      id: 7,
      roomName: "Study Room 105",
      building: "Library",
      requestedBy: "Student Council",
      date: "2023-05-25",
      timeSlot: "15:00 - 18:00",
      purpose: "Group Study Session",
      status: "Approved",
      capacity: 15,
      equipment: ["Whiteboard"],
    },
    {
      id: 8,
      roomName: "Auditorium",
      building: "Main Building",
      requestedBy: "Events Committee",
      date: "2023-05-26",
      timeSlot: "18:00 - 21:00",
      purpose: "Annual Ceremony",
      status: "Pending",
      capacity: 500,
      equipment: ["Full AV System", "Stage Lighting", "Microphones"],
    },
  ]

  // Filter booking data based on search query and filters
  const filteredData = bookingData.filter((booking) => {
    const matchesSearch =
      booking.roomName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.requestedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.purpose.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesBuilding = selectedBuilding === "all" || booking.building === selectedBuilding
    const matchesStatus = selectedStatus === "all" || booking.status === selectedStatus

    return matchesSearch && matchesBuilding && matchesStatus
  })

  // Room availability data
  const roomAvailability = [
    { building: "Science Building", total: 25, available: 12, booked: 13 },
    { building: "Technology Center", total: 18, available: 5, booked: 13 },
    { building: "Administration Building", total: 10, available: 4, booked: 6 },
    { building: "Arts Building", total: 15, available: 9, booked: 6 },
    { building: "Library", total: 12, available: 3, booked: 9 },
    { building: "Main Building", total: 20, available: 7, booked: 13 },
    { building: "Business Building", total: 14, available: 6, booked: 8 },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-sm">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-700">
          <Building2 className="h-6 w-6" />
          <span>CampusConnect</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              3
            </span>
          </Button>
          <Button variant="outline" size="icon" className="relative">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-teal-500 text-[10px] font-medium text-white flex items-center justify-center">
              5
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
              <AvatarFallback className="bg-teal-100 text-teal-800">AD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <div className="text-sm font-medium">Admin User</div>
              <div className="text-xs text-gray-500">admin@campus.edu</div>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-20 mt-16 w-64 border-r bg-white md:static shadow-sm"
          >
            <nav className="grid gap-2 p-4 text-sm">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/attendance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <BookOpen className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="/admin/room-booking"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
              >
                <Calendar className="h-4 w-4" />
                Room Booking
              </Link>
              <Link
                href="/admin/energy-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Zap className="h-4 w-4" />
                Energy Management
              </Link>
              <Link
                href="/admin/safety-alerts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Shield className="h-4 w-4" />
                Safety & Alerts
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="/admin/user-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Users className="h-4 w-4" />
                User Management
              </Link>
              <Link
                href="/admin/settings"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Room Booking Management</h2>
                <p className="text-muted-foreground">Manage and approve room booking requests.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="mr-2 h-3.5 w-3.5" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export
                </Button>
                <Button size="sm" className="h-8 bg-teal-600 hover:bg-teal-700">
                  <Plus className="mr-2 h-3.5 w-3.5" />
                  Add Room
                </Button>
              </div>
            </div>

            <Tabs defaultValue="bookings" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
                <TabsTrigger value="bookings">Booking Requests</TabsTrigger>
                <TabsTrigger value="rooms">Room Availability</TabsTrigger>
              </TabsList>
              <TabsContent value="bookings" className="space-y-4 mt-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search bookings..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedBuilding} onValueChange={setSelectedBuilding}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select building" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Buildings</SelectItem>
                        <SelectItem value="Science Building">Science Building</SelectItem>
                        <SelectItem value="Technology Center">Technology Center</SelectItem>
                        <SelectItem value="Administration Building">Administration Building</SelectItem>
                        <SelectItem value="Arts Building">Arts Building</SelectItem>
                        <SelectItem value="Library">Library</SelectItem>
                        <SelectItem value="Main Building">Main Building</SelectItem>
                        <SelectItem value="Business Building">Business Building</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="Approved">Approved</SelectItem>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Room</TableHead>
                        <TableHead>Building</TableHead>
                        <TableHead>Requested By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time Slot</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredData.map((booking) => (
                        <TableRow key={booking.id} className="hover:bg-teal-50/30">
                          <TableCell className="font-medium">{booking.roomName}</TableCell>
                          <TableCell>{booking.building}</TableCell>
                          <TableCell>{booking.requestedBy}</TableCell>
                          <TableCell>{booking.date}</TableCell>
                          <TableCell>{booking.timeSlot}</TableCell>
                          <TableCell>{booking.purpose}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                booking.status === "Approved"
                                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                                  : booking.status === "Rejected"
                                    ? "bg-red-100 text-red-800 hover:bg-red-200"
                                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm" className="h-8 px-2 py-0">
                                View
                              </Button>
                              {booking.status === "Pending" && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 px-2 py-0 text-green-600 border-green-200 hover:bg-green-50 hover:text-green-700"
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-8 px-2 py-0 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                  >
                                    Reject
                                  </Button>
                                </>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="rooms" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-3">
                  {roomAvailability.map((building, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                        <CardTitle>{building.building}</CardTitle>
                        <CardDescription>
                          {building.available} of {building.total} rooms available
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium">Available</div>
                          <div className="text-sm text-green-600">{building.available}</div>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full mb-4">
                          <div
                            className="h-2 bg-green-500 rounded-full"
                            style={{ width: `${(building.available / building.total) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm font-medium">Booked</div>
                          <div className="text-sm text-orange-600">{building.booked}</div>
                        </div>
                        <div className="h-2 w-full bg-gray-100 rounded-full">
                          <div
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${(building.booked / building.total) * 100}%` }}
                          ></div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Button variant="outline" size="sm" className="w-full">
                            View Rooms
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Room Calendar</CardTitle>
                    <CardDescription>View room bookings by date</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="h-[400px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-gray-500">Room Booking Calendar</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
