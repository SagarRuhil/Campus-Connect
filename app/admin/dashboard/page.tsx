"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertTriangle,
  BarChart3,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronDown,
  Clock,
  Home,
  LineChart,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Shield,
  Users,
  Zap,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"

export default function AdminDashboard() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [progressValues, setProgressValues] = useState({
    main: 0,
    science: 0,
    library: 0,
    student: 0,
    electricity: 0,
    heating: 0,
    water: 0,
    aircon: 0,
  })

  useEffect(() => {
    // Animate progress bars
    const timer = setTimeout(() => {
      setProgressValues({
        main: 72,
        science: 89,
        library: 64,
        student: 53,
        electricity: 68,
        heating: 42,
        water: 78,
        aircon: 35,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleLogout = () => {
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-sm">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-purple-700">
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-1.5 rounded-md">
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
          <Button variant="outline" size="icon" className="relative">
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">Messages</span>
            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-purple-500 text-[10px] font-medium text-white flex items-center justify-center">
              5
            </span>
          </Button>
          <div className="flex items-center gap-2">
            <Avatar className="border-2 border-purple-100">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-purple-700 text-white">AD</AvatarFallback>
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
                className="flex items-center gap-3 rounded-lg bg-purple-50 px-3 py-2 text-purple-900 transition-all hover:text-purple-900"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/attendance"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <BookOpen className="h-4 w-4" />
                Attendance
              </Link>
              <Link
                href="/admin/room-booking"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <Calendar className="h-4 w-4" />
                Room Booking
              </Link>
              <Link
                href="/admin/energy-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <Zap className="h-4 w-4" />
                Energy Management
              </Link>
              <Link
                href="/admin/safety-alerts"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <Shield className="h-4 w-4" />
                Safety & Alerts
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="/admin/user-management"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
              >
                <Users className="h-4 w-4" />
                User Management
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-purple-50 hover:text-purple-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-500">Monitor and manage campus operations in real-time.</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-2">
                <span className="text-sm text-gray-500">May 15, 2025</span>
                <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                    <Users className="h-4 w-4 text-purple-700" />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold">2,853</div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-500 font-medium">+12%</span>
                      <span className="text-xs text-muted-foreground ml-1">from last semester</span>
                    </div>
                    <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-purple-500 rounded-full"
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="text-sm font-medium">Room Utilization</CardTitle>
                    <Building2 className="h-4 w-4 text-purple-700" />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold">78%</div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-500 font-medium">+5%</span>
                      <span className="text-xs text-muted-foreground ml-1">from last month</span>
                    </div>
                    <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="h-full bg-purple-500 rounded-full"
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="text-sm font-medium">Energy Savings</CardTitle>
                    <Zap className="h-4 w-4 text-purple-700" />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold">23%</div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-500 font-medium">-8%</span>
                      <span className="text-xs text-muted-foreground ml-1">energy consumption</span>
                    </div>
                    <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "23%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-green-500 rounded-full"
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Card className="overflow-hidden border-none shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
                    <AlertTriangle className="h-4 w-4 text-purple-700" />
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="text-2xl font-bold">3</div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-amber-500 font-medium">2</span>
                      <span className="text-xs text-muted-foreground ml-1">require attention</span>
                    </div>
                    <div className="mt-3 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "30%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-amber-500 rounded-full"
                      ></motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <Tabs defaultValue="overview" className="mt-6">
              <TabsList className="bg-purple-50 text-purple-900">
                <TabsTrigger value="overview" className="data-[state=active]:bg-white">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:bg-white">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="reports" className="data-[state=active]:bg-white">
                  Reports
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white">
                  Notifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                      <CardTitle>Campus Activity</CardTitle>
                      <CardDescription>Real-time overview of campus activity across all buildings</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <div className="h-[250px] w-full bg-gradient-to-br from-white to-purple-50 rounded-md flex items-center justify-center">
                        <div className="relative w-full h-full p-4">
                          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
                          <div
                            className="absolute top-1/3 left-1/2 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                            style={{ animationDelay: "1s" }}
                          ></div>
                          <div
                            className="absolute top-2/3 left-2/3 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                            style={{ animationDelay: "1.5s" }}
                          ></div>
                          <div
                            className="absolute top-3/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                            style={{ animationDelay: "2s" }}
                          ></div>
                          <LineChart className="h-8 w-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10 text-purple-700 font-medium">
                            Campus Activity Map
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                      <CardTitle>Upcoming Events</CardTitle>
                      <CardDescription>Events scheduled for today</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                          <div className="rounded-md bg-purple-100 p-2 text-purple-700">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Computer Science Lecture</p>
                            <p className="text-sm text-muted-foreground">Room 101 • 10:00 AM - 11:30 AM</p>
                          </div>
                          <Badge className="ml-auto bg-purple-100 text-purple-800 hover:bg-purple-200 animate-pulse">
                            Now
                          </Badge>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                          <div className="rounded-md bg-purple-100 p-2 text-purple-700">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Faculty Meeting</p>
                            <p className="text-sm text-muted-foreground">Conference Room • 1:00 PM - 2:30 PM</p>
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-purple-50 transition-colors"
                        >
                          <div className="rounded-md bg-purple-100 p-2 text-purple-700">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Student Council</p>
                            <p className="text-sm text-muted-foreground">Room 203 • 3:00 PM - 4:00 PM</p>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                      <CardTitle>Building Occupancy</CardTitle>
                      <CardDescription>Current occupancy by building</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Main Building</div>
                            <div>{progressValues.main}%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.main}%` }}
                              transition={{ duration: 1 }}
                              className="h-full bg-purple-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Science Center</div>
                            <div>{progressValues.science}%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.science}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-purple-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Library</div>
                            <div>{progressValues.library}%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.library}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full bg-purple-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Student Center</div>
                            <div>{progressValues.student}%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.student}%` }}
                              transition={{ duration: 1, delay: 0.6 }}
                              className="h-full bg-purple-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                      <CardTitle>Energy Consumption</CardTitle>
                      <CardDescription>Real-time energy usage</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Electricity</div>
                            <div className="text-green-600">-12%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.electricity}%` }}
                              transition={{ duration: 1 }}
                              className="h-full bg-green-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Heating</div>
                            <div className="text-green-600">-8%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.heating}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-green-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Water</div>
                            <div className="text-red-600">+3%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.water}%` }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full bg-blue-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="font-medium">Air Conditioning</div>
                            <div className="text-green-600">-15%</div>
                          </div>
                          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              animate={{ width: `${progressValues.aircon}%` }}
                              transition={{ duration: 1, delay: 0.6 }}
                              className="h-full bg-green-500 rounded-full"
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                      <CardTitle>Safety Status</CardTitle>
                      <CardDescription>Current safety alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <div className="rounded-md bg-amber-100 p-2 text-amber-700">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">HVAC Maintenance</p>
                            <p className="text-sm text-muted-foreground">Science Building, 3rd Floor</p>
                            <Badge variant="outline" className="mt-1 border-amber-200 text-amber-700">
                              Medium Priority
                            </Badge>
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <div className="rounded-md bg-red-100 p-2 text-red-700">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Fire Alarm Test</p>
                            <p className="text-sm text-muted-foreground">All Buildings, 2:00 PM</p>
                            <Badge variant="outline" className="mt-1 border-purple-200 text-purple-700">
                              Scheduled
                            </Badge>
                          </div>
                        </motion.div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 p-2 rounded-lg hover:bg-amber-50 transition-colors"
                        >
                          <div className="rounded-md bg-amber-100 p-2 text-amber-700">
                            <AlertTriangle className="h-4 w-4" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">Water Leak</p>
                            <p className="text-sm text-muted-foreground">Library, Basement</p>
                            <Badge variant="outline" className="mt-1 border-amber-200 text-amber-700">
                              Under Investigation
                            </Badge>
                          </div>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>Comprehensive data visualization and reporting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-br from-white to-purple-50 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <span className="text-purple-700 font-medium">Analytics Dashboard Content</span>
                        <p className="text-sm text-gray-500 mt-2">Detailed analytics and reporting tools</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle>Reports</CardTitle>
                    <CardDescription>Generate and view reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-br from-white to-purple-50 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <LineChart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <span className="text-purple-700 font-medium">Reports Content</span>
                        <p className="text-sm text-gray-500 mt-2">Generate and export custom reports</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-white">
                    <CardTitle>Notifications</CardTitle>
                    <CardDescription>System notifications and alerts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] w-full bg-gradient-to-br from-white to-purple-50 rounded-md flex items-center justify-center">
                      <div className="text-center">
                        <Bell className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                        <span className="text-purple-700 font-medium">Notifications Content</span>
                        <p className="text-sm text-gray-500 mt-2">View and manage system notifications</p>
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
