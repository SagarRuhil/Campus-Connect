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
  Clock,
  Download,
  Filter,
  Home,
  LogOut,
  Menu,
  MessageSquare,
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
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"

export default function AdminAttendance() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedDate, setSelectedDate] = useState("today")

  const handleLogout = () => {
    router.push("/login")
  }

  // Sample attendance data
  const attendanceData = [
    {
      id: 1,
      name: "John Smith",
      studentId: "ST10001",
      course: "Computer Science",
      date: "2023-05-15",
      status: "Present",
      percentage: 92,
    },
    {
      id: 2,
      name: "Emily Johnson",
      studentId: "ST10002",
      course: "Mathematics",
      date: "2023-05-15",
      status: "Present",
      percentage: 88,
    },
    {
      id: 3,
      name: "Michael Brown",
      studentId: "ST10003",
      course: "Physics",
      date: "2023-05-15",
      status: "Absent",
      percentage: 76,
    },
    {
      id: 4,
      name: "Sarah Davis",
      studentId: "ST10004",
      course: "Chemistry",
      date: "2023-05-15",
      status: "Present",
      percentage: 95,
    },
    {
      id: 5,
      name: "David Wilson",
      studentId: "ST10005",
      course: "Biology",
      date: "2023-05-15",
      status: "Late",
      percentage: 82,
    },
    {
      id: 6,
      name: "Jessica Taylor",
      studentId: "ST10006",
      course: "Computer Science",
      date: "2023-05-15",
      status: "Present",
      percentage: 90,
    },
    {
      id: 7,
      name: "Daniel Martinez",
      studentId: "ST10007",
      course: "Mathematics",
      date: "2023-05-15",
      status: "Absent",
      percentage: 65,
    },
    {
      id: 8,
      name: "Sophia Anderson",
      studentId: "ST10008",
      course: "Physics",
      date: "2023-05-15",
      status: "Present",
      percentage: 87,
    },
  ]

  // Filter attendance data based on search query and filters
  const filteredData = attendanceData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCourse = selectedCourse === "all" || student.course === selectedCourse

    return matchesSearch && matchesCourse
  })

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
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
              >
                <BookOpen className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="/admin/room-booking"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
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
                <h2 className="text-2xl font-bold tracking-tight">Attendance Management</h2>
                <p className="text-muted-foreground">Monitor and manage student attendance records.</p>
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
                  <Clock className="mr-2 h-3.5 w-3.5" />
                  Take Attendance
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Overall Attendance</CardTitle>
                  <CardDescription>Average attendance across all courses</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">85%</div>
                    <p className="text-sm text-muted-foreground mt-1">+2% from last month</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Present</div>
                      <div>85%</div>
                    </div>
                    <Progress value={85} className="h-2 bg-gray-200" indicatorClassName="bg-teal-500" />
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Absent</div>
                      <div>10%</div>
                    </div>
                    <Progress value={10} className="h-2 bg-gray-200" indicatorClassName="bg-red-500" />
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Late</div>
                      <div>5%</div>
                    </div>
                    <Progress value={5} className="h-2 bg-gray-200" indicatorClassName="bg-yellow-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Course Breakdown</CardTitle>
                  <CardDescription>Attendance by course</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Computer Science</div>
                        <div>91%</div>
                      </div>
                      <Progress value={91} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Mathematics</div>
                        <div>76%</div>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Physics</div>
                        <div>82%</div>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Chemistry</div>
                        <div>95%</div>
                      </div>
                      <Progress value={95} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Attendance Trends</CardTitle>
                  <CardDescription>Weekly attendance patterns</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[180px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-gray-400" />
                    <span className="ml-2 text-gray-500">Attendance Chart</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                <CardTitle>Student Attendance Records</CardTitle>
                <CardDescription>View and manage individual student attendance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search students..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Courses</SelectItem>
                        <SelectItem value="Computer Science">Computer Science</SelectItem>
                        <SelectItem value="Mathematics">Mathematics</SelectItem>
                        <SelectItem value="Physics">Physics</SelectItem>
                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                        <SelectItem value="Biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedDate} onValueChange={setSelectedDate}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="yesterday">Yesterday</SelectItem>
                        <SelectItem value="this-week">This Week</SelectItem>
                        <SelectItem value="last-week">Last Week</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox />
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Student ID</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Attendance %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredData.map((student) => (
                        <TableRow key={student.id} className="hover:bg-teal-50/30">
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.studentId}</TableCell>
                          <TableCell>{student.course}</TableCell>
                          <TableCell>{student.date}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                student.status === "Present"
                                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                                  : student.status === "Absent"
                                    ? "bg-red-100 text-red-800 hover:bg-red-200"
                                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                              }
                            >
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-full max-w-24">
                                <Progress
                                  value={student.percentage}
                                  className="h-2"
                                  indicatorClassName={
                                    student.percentage > 90
                                      ? "bg-green-500"
                                      : student.percentage > 75
                                        ? "bg-teal-500"
                                        : student.percentage > 60
                                          ? "bg-yellow-500"
                                          : "bg-red-500"
                                  }
                                />
                              </div>
                              <span className="text-sm">{student.percentage}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
