"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  QrCode,
  Settings,
  User,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

export default function StudentDashboard() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [mounted, setMounted] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    setMounted(true)

    // Animate progress bars
    const timer = setTimeout(() => setProgressValue(92), 500)
    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    router.push("/login")
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-sm">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-teal-700">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-1.5 rounded-md">
            <Building2 className="h-5 w-5" />
          </div>
          <span>CampusConnect</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative animate-pulse">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
              3
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="border-2 border-teal-100">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
              <AvatarFallback className="bg-gradient-to-r from-teal-500 to-teal-700 text-white">JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <div className="text-sm font-medium">John Doe</div>
              <div className="text-xs text-gray-500">student@campus.edu</div>
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
                href="/student/dashboard"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back, John!</h1>
                <p className="text-gray-500">Here's what's happening with your campus today.</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="text-sm text-gray-500">May 15, 2025</span>
                <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="col-span-2"
              >
                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-teal-500 to-teal-700 text-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-medium">Today's Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="space-y-1">
                        <p className="text-3xl font-bold">3</p>
                        <p className="text-xs text-teal-100">Classes Today</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-3xl font-bold">2</p>
                        <p className="text-xs text-teal-100">Room Bookings</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-3xl font-bold">1</p>
                        <p className="text-xs text-teal-100">Assignment Due</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm">
                        Next class in <span className="font-bold">45 minutes</span>
                      </div>
                      <Button size="sm" variant="secondary" className="bg-white text-teal-700 hover:bg-teal-50">
                        View Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="overflow-hidden border-none shadow-lg h-full">
                  <CardHeader className="pb-2 bg-gradient-to-r from-teal-50 to-teal-100">
                    <CardTitle className="text-sm font-medium flex items-center justify-between">
                      <span>Attendance Rate</span>
                      <QrCode className="h-4 w-4 text-teal-700" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-center">{progressValue}%</div>
                    <Progress value={progressValue} className="h-2 mt-2" />
                    <p className="text-xs text-muted-foreground text-center mt-2">+2% from last month</p>
                    <div className="mt-4 text-center">
                      <Button variant="outline" size="sm" className="text-xs">
                        <QrCode className="mr-1 h-3 w-3" />
                        Scan Attendance
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="md:col-span-2"
              >
                <Card className="border-none shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle className="flex items-center justify-between">
                      <span>Today's Schedule</span>
                      <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                        View All <ArrowUpRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardTitle>
                    <CardDescription>Your classes and activities for today</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-gray-50 border border-transparent hover:border-teal-100">
                        <div className="rounded-md bg-teal-100 p-2 text-teal-700">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="text-sm font-medium leading-none">Introduction to Computer Science</p>
                          <p className="text-sm text-muted-foreground">Room 101 • 10:00 AM - 11:30 AM</p>
                        </div>
                        <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 animate-pulse">Now</Badge>
                      </div>
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-gray-50 border border-transparent hover:border-teal-100">
                        <div className="rounded-md bg-teal-100 p-2 text-teal-700">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="text-sm font-medium leading-none">Mathematics 101</p>
                          <p className="text-sm text-muted-foreground">Room 203 • 1:00 PM - 2:30 PM</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          Set Reminder
                        </Button>
                      </div>
                      <div className="flex items-start gap-4 p-3 rounded-lg transition-colors hover:bg-gray-50 border border-transparent hover:border-teal-100">
                        <div className="rounded-md bg-teal-100 p-2 text-teal-700">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="text-sm font-medium leading-none">Physics Lab</p>
                          <p className="text-sm text-muted-foreground">Science Building • 3:00 PM - 5:00 PM</p>
                        </div>
                        <Button variant="outline" size="sm" className="text-xs">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Assignments due soon</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-3 rounded-lg bg-red-50 border border-red-100">
                        <div className="rounded-md bg-red-100 p-2 text-red-700">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Programming Assignment</p>
                          <p className="text-sm text-muted-foreground">Due Tomorrow • 11:59 PM</p>
                          <Badge variant="destructive" className="mt-1">
                            Urgent
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-3 rounded-lg border border-gray-100">
                        <div className="rounded-md bg-yellow-100 p-2 text-yellow-700">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium leading-none">Math Problem Set</p>
                          <p className="text-sm text-muted-foreground">Due in 3 days • 11:59 PM</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        View All Assignments
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6"
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Campus Announcements</CardTitle>
                  <CardDescription>Latest updates from your institution</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg border border-gray-100 hover:border-teal-100 transition-all hover:bg-teal-50/30">
                      <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Campus-wide Fire Drill</p>
                        <p className="text-sm text-muted-foreground">
                          Scheduled for Friday, May 17 at 2:00 PM. All students and staff are required to participate.
                        </p>
                        <p className="text-xs text-gray-400">Posted 2 hours ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-teal-600">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg border border-gray-100 hover:border-teal-100 transition-all hover:bg-teal-50/30">
                      <div className="rounded-md bg-green-100 p-2 text-green-700">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Library Extended Hours</p>
                        <p className="text-sm text-muted-foreground">
                          The library will be open until midnight during finals week (May 20-24).
                        </p>
                        <p className="text-xs text-gray-400">Posted yesterday</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-teal-600">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
