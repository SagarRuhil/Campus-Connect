"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Home,
  LogOut,
  Menu,
  Settings,
  User,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StudentSchedule() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [currentWeek, setCurrentWeek] = useState(0)

  const handleLogout = () => {
    router.push("/login")
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const hours = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

  // Sample schedule data
  const scheduleData = [
    {
      day: "Monday",
      startTime: "10:00",
      endTime: "11:30",
      course: "Computer Science 101",
      location: "Room 101",
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      day: "Monday",
      startTime: "13:00",
      endTime: "14:30",
      course: "Mathematics 201",
      location: "Room 203",
      color: "bg-green-100 border-green-300 text-green-800",
    },
    {
      day: "Tuesday",
      startTime: "9:00",
      endTime: "10:30",
      course: "Physics 101",
      location: "Science Building",
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
    {
      day: "Wednesday",
      startTime: "10:00",
      endTime: "11:30",
      course: "Computer Science 101",
      location: "Room 101",
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      day: "Wednesday",
      startTime: "15:00",
      endTime: "17:00",
      course: "Physics Lab",
      location: "Science Building",
      color: "bg-purple-100 border-purple-300 text-purple-800",
    },
    {
      day: "Thursday",
      startTime: "11:00",
      endTime: "12:30",
      course: "English 102",
      location: "Humanities Building",
      color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    },
    {
      day: "Friday",
      startTime: "10:00",
      endTime: "11:30",
      course: "Computer Science 101",
      location: "Room 101",
      color: "bg-blue-100 border-blue-300 text-blue-800",
    },
    {
      day: "Friday",
      startTime: "13:00",
      endTime: "14:30",
      course: "Mathematics 201",
      location: "Room 203",
      color: "bg-green-100 border-green-300 text-green-800",
    },
  ]

  // Function to get the position and height for a schedule item
  const getScheduleItemStyle = (startTime: string, endTime: string) => {
    const startHour = Number.parseInt(startTime.split(":")[0])
    const startMinute = Number.parseInt(startTime.split(":")[1])
    const endHour = Number.parseInt(endTime.split(":")[0])
    const endMinute = Number.parseInt(endTime.split(":")[1])

    const startPosition = (startHour - 8) * 60 + startMinute
    const duration = (endHour - startHour) * 60 + (endMinute - startMinute)

    return {
      top: `${startPosition / 15}rem`,
      height: `${duration / 15}rem`,
    }
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Calendar className="h-4 w-4" />
                Book a Room
              </Link>
              <Link
                href="/student/schedule"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-teal-800">My Schedule</h1>
                <p className="text-gray-500">View your weekly class schedule</p>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek - 1)}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="min-w-[100px]">
                  {currentWeek === 0 ? "This Week" : currentWeek === 1 ? "Next Week" : `Week ${currentWeek}`}
                </Button>
                <Button variant="outline" size="icon" onClick={() => setCurrentWeek(currentWeek + 1)}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button className="ml-2 bg-teal-600 hover:bg-teal-700">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Tabs defaultValue="weekly" className="space-y-4">
              <TabsList className="bg-teal-50 text-teal-900">
                <TabsTrigger value="weekly" className="data-[state=active]:bg-white">
                  Weekly View
                </TabsTrigger>
                <TabsTrigger value="daily" className="data-[state=active]:bg-white">
                  Daily View
                </TabsTrigger>
                <TabsTrigger value="list" className="data-[state=active]:bg-white">
                  List View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="weekly" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Your classes for the week</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 overflow-x-auto">
                    <div className="min-w-[800px]">
                      <div className="grid grid-cols-6 gap-4">
                        <div className="col-span-1"></div>
                        {days.map((day) => (
                          <div key={day} className="col-span-1 text-center font-medium">
                            {day}
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-6 gap-4 relative">
                        <div className="col-span-1">
                          {hours.map((hour) => (
                            <div key={hour} className="h-16 border-t border-gray-200 text-xs text-gray-500 -mt-2 pt-1">
                              {hour}
                            </div>
                          ))}
                        </div>

                        {days.map((day) => (
                          <div key={day} className="col-span-1 relative h-[40rem] border-l border-gray-200">
                            {hours.map((hour, index) => (
                              <div key={hour} className="h-16 border-t border-gray-200"></div>
                            ))}

                            {scheduleData
                              .filter((item) => item.day === day)
                              .map((item, index) => (
                                <div
                                  key={index}
                                  className={`absolute left-1 right-1 p-2 rounded-md border ${item.color} shadow-sm transition-transform hover:scale-[1.02] cursor-pointer`}
                                  style={getScheduleItemStyle(item.startTime, item.endTime)}
                                >
                                  <div className="font-medium text-xs">{item.course}</div>
                                  <div className="text-xs">{item.location}</div>
                                  <div className="text-xs mt-1">
                                    {item.startTime} - {item.endTime}
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="daily" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Daily Schedule</CardTitle>
                    <CardDescription>Your classes for today</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Monday</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                          </Button>
                          <Button variant="outline" size="sm">
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {scheduleData
                          .filter((item) => item.day === "Monday")
                          .map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.1 }}
                              className={`p-4 rounded-md border ${item.color} shadow-sm`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium">{item.course}</h4>
                                  <p className="text-sm">{item.location}</p>
                                </div>
                                <Badge variant="outline">
                                  {item.startTime} - {item.endTime}
                                </Badge>
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="list" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>All Classes</CardTitle>
                    <CardDescription>Your complete class schedule</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {days.map((day) => (
                      <div key={day} className="mb-6">
                        <h3 className="font-medium mb-3 text-teal-800">{day}</h3>
                        <div className="space-y-3">
                          {scheduleData
                            .filter((item) => item.day === day)
                            .map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center p-3 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                              >
                                <div className="mr-4 p-2 rounded-full bg-teal-100">
                                  <Clock className="h-5 w-5 text-teal-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium">{item.course}</h4>
                                  <p className="text-sm text-gray-500">{item.location}</p>
                                </div>
                                <Badge variant="outline">
                                  {item.startTime} - {item.endTime}
                                </Badge>
                              </div>
                            ))}
                          {scheduleData.filter((item) => item.day === day).length === 0 && (
                            <p className="text-sm text-gray-500 italic">No classes scheduled</p>
                          )}
                        </div>
                      </div>
                    ))}
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
