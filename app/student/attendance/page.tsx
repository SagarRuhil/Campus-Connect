"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  BookOpen,
  Building2,
  Calendar,
  Check,
  Clock,
  Download,
  Home,
  LogOut,
  Menu,
  QrCode,
  Settings,
  User,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StudentAttendance() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [scanSuccess, setScanSuccess] = useState(false)

  const handleLogout = () => {
    router.push("/login")
  }

  const handleScan = () => {
    setScanSuccess(true)
    setTimeout(() => setScanSuccess(false), 3000)
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
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-teal-800">My Attendance</h1>
                <p className="text-gray-500">Track and manage your class attendance</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                  <BookOpen className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground">+2% from last month</p>
                  <Progress value={92} className="h-2 mt-2" />
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
                  <Check className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">87</div>
                  <p className="text-xs text-muted-foreground">Out of 95 total classes</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                  <CardTitle className="text-sm font-medium">Classes Missed</CardTitle>
                  <X className="h-4 w-4 text-teal-700" />
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 excused absences</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="record" className="mt-6">
              <TabsList className="bg-teal-50 text-teal-900">
                <TabsTrigger value="record" className="data-[state=active]:bg-white">
                  Attendance Record
                </TabsTrigger>
                <TabsTrigger value="scan" className="data-[state=active]:bg-white">
                  Scan Attendance
                </TabsTrigger>
                <TabsTrigger value="courses" className="data-[state=active]:bg-white">
                  Course Breakdown
                </TabsTrigger>
              </TabsList>

              <TabsContent value="record" className="space-y-4 mt-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Attendance History</CardTitle>
                    <CardDescription>Your recent attendance records</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Today</TableCell>
                          <TableCell>Computer Science 101</TableCell>
                          <TableCell>10:05 AM</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Today</TableCell>
                          <TableCell>Mathematics 201</TableCell>
                          <TableCell>1:00 PM</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Yesterday</TableCell>
                          <TableCell>Physics 101</TableCell>
                          <TableCell>10:12 AM</TableCell>
                          <TableCell>
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Late</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Yesterday</TableCell>
                          <TableCell>English 102</TableCell>
                          <TableCell>2:00 PM</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2 days ago</TableCell>
                          <TableCell>Computer Science 101</TableCell>
                          <TableCell>--</TableCell>
                          <TableCell>
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Absent</Badge>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2 days ago</TableCell>
                          <TableCell>Mathematics 201</TableCell>
                          <TableCell>1:03 PM</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Button variant="outline" className="w-full mt-6">
                      View Full History
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="scan" className="space-y-4 mt-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Scan Attendance QR Code</CardTitle>
                    <CardDescription>Scan the QR code displayed by your instructor</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center justify-center p-6 border rounded-md">
                      {scanSuccess ? (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="flex flex-col items-center text-center"
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <Check className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-medium">Attendance Recorded!</h3>
                          <p className="text-sm text-gray-500 mt-1">Computer Science 101</p>
                          <p className="text-sm text-gray-500">Today, 10:05 AM</p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="w-48 h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-md">
                            <QrCode className="h-16 w-16 text-gray-400" />
                          </div>
                          <p className="text-sm text-center text-gray-500 mb-4">
                            Point your camera at the QR code displayed by your instructor to record attendance
                          </p>
                          <Button onClick={handleScan} className="bg-teal-600 hover:bg-teal-700">
                            <QrCode className="mr-2 h-4 w-4" />
                            Simulate Scan
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-4 mt-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Course Attendance Breakdown</CardTitle>
                    <CardDescription>Your attendance rate by course</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Computer Science 101</h3>
                            <p className="text-sm text-gray-500">Prof. Johnson • MWF 10:00 AM</p>
                          </div>
                          <span className="font-medium text-green-600">95%</span>
                        </div>
                        <Progress value={95} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>19 of 20 classes attended</span>
                          <span>1 absence</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Mathematics 201</h3>
                            <p className="text-sm text-gray-500">Prof. Smith • MWF 1:00 PM</p>
                          </div>
                          <span className="font-medium text-green-600">90%</span>
                        </div>
                        <Progress value={90} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>18 of 20 classes attended</span>
                          <span>2 absences</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Physics 101</h3>
                            <p className="text-sm text-gray-500">Prof. Williams • TTh 10:00 AM</p>
                          </div>
                          <span className="font-medium text-yellow-600">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>17 of 20 classes attended</span>
                          <span>3 absences</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">English 102</h3>
                            <p className="text-sm text-gray-500">Prof. Davis • TTh 2:00 PM</p>
                          </div>
                          <span className="font-medium text-red-600">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>15 of 20 classes attended</span>
                          <span>5 absences</span>
                        </div>
                      </div>
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
