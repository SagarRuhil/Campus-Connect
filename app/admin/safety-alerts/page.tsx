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
import { Progress } from "@/components/ui/progress"

export default function AdminSafetyAlerts() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeverity, setSelectedSeverity] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const handleLogout = () => {
    router.push("/login")
  }

  // Sample alerts data
  const alertsData = [
    {
      id: 1,
      title: "Fire Alarm Triggered",
      location: "Science Building, Floor 2",
      timestamp: "2023-05-15 14:32",
      severity: "High",
      status: "Active",
      description: "Fire alarm triggered in Chemistry Lab 203. Emergency services notified.",
      assignedTo: "Security Team",
    },
    {
      id: 2,
      title: "Water Leak Detected",
      location: "Library, Basement",
      timestamp: "2023-05-15 10:15",
      severity: "Medium",
      status: "In Progress",
      description: "Water leak detected in the basement storage area. Maintenance team dispatched.",
      assignedTo: "Maintenance Team",
    },
    {
      id: 3,
      title: "Power Outage",
      location: "Technology Center",
      timestamp: "2023-05-14 16:45",
      severity: "Medium",
      status: "Resolved",
      description: "Power outage affecting the entire Technology Center. Backup generators activated.",
      assignedTo: "Facilities Team",
    },
    {
      id: 4,
      title: "Suspicious Activity",
      location: "Parking Lot B",
      timestamp: "2023-05-14 20:10",
      severity: "Low",
      status: "Resolved",
      description: "Suspicious individual reported in Parking Lot B. Security personnel investigated.",
      assignedTo: "Security Team",
    },
    {
      id: 5,
      title: "Gas Leak Suspected",
      location: "Cafeteria Kitchen",
      timestamp: "2023-05-13 12:20",
      severity: "High",
      status: "Resolved",
      description: "Possible gas leak reported in the cafeteria kitchen. Building evacuated as a precaution.",
      assignedTo: "Emergency Response Team",
    },
    {
      id: 6,
      title: "Elevator Malfunction",
      location: "Administration Building",
      timestamp: "2023-05-13 09:05",
      severity: "Low",
      status: "In Progress",
      description: "Elevator stuck between floors 3 and 4. No passengers trapped.",
      assignedTo: "Maintenance Team",
    },
    {
      id: 7,
      title: "Medical Emergency",
      location: "Sports Complex",
      timestamp: "2023-05-12 15:30",
      severity: "High",
      status: "Resolved",
      description: "Student injured during basketball practice. Medical assistance provided.",
      assignedTo: "Medical Team",
    },
    {
      id: 8,
      title: "Network Security Breach",
      location: "IT Department",
      timestamp: "2023-05-12 11:45",
      severity: "Medium",
      status: "In Progress",
      description: "Potential security breach detected in the campus network. IT team investigating.",
      assignedTo: "IT Security Team",
    },
  ]

  // Filter alerts data based on search query and filters
  const filteredAlerts = alertsData.filter((alert) => {
    const matchesSearch =
      alert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      alert.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesSeverity = selectedSeverity === "all" || alert.severity === selectedSeverity
    const matchesStatus = selectedStatus === "all" || alert.status === selectedStatus

    return matchesSearch && matchesSeverity && matchesStatus
  })

  // Alert statistics
  const alertStats = {
    total: alertsData.length,
    active: alertsData.filter((alert) => alert.status === "Active").length,
    inProgress: alertsData.filter((alert) => alert.status === "In Progress").length,
    resolved: alertsData.filter((alert) => alert.status === "Resolved").length,
    high: alertsData.filter((alert) => alert.severity === "High").length,
    medium: alertsData.filter((alert) => alert.severity === "Medium").length,
    low: alertsData.filter((alert) => alert.severity === "Low").length,
  }

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
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h2 className="text-2xl font-bold tracking-tight">Safety & Alerts</h2>
                <p className="text-muted-foreground">Monitor and manage campus safety alerts and incidents.</p>
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
                  New Alert
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Total Alerts</CardTitle>
                  <CardDescription>All recorded alerts</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">{alertStats.total}</div>
                    <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-red-50 to-white">
                  <CardTitle>Active Alerts</CardTitle>
                  <CardDescription>Ongoing incidents</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-700">{alertStats.active}</div>
                    <p className="text-sm text-muted-foreground mt-1">Require immediate attention</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-white">
                  <CardTitle>In Progress</CardTitle>
                  <CardDescription>Being addressed</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-700">{alertStats.inProgress}</div>
                    <p className="text-sm text-muted-foreground mt-1">Currently being handled</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <CardTitle>Resolved</CardTitle>
                  <CardDescription>Completed incidents</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-700">{alertStats.resolved}</div>
                    <p className="text-sm text-muted-foreground mt-1">Successfully addressed</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                <CardTitle>Alert Management</CardTitle>
                <CardDescription>View and manage safety alerts and incidents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search alerts..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Severities</SelectItem>
                        <SelectItem value="High">High</SelectItem>
                        <SelectItem value="Medium">Medium</SelectItem>
                        <SelectItem value="Low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Alert</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Severity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Assigned To</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAlerts.map((alert) => (
                        <TableRow key={alert.id} className="hover:bg-teal-50/30">
                          <TableCell>
                            <div>
                              <div className="font-medium">{alert.title}</div>
                              <div className="text-sm text-muted-foreground">{alert.description}</div>
                            </div>
                          </TableCell>
                          <TableCell>{alert.location}</TableCell>
                          <TableCell>{alert.timestamp}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                alert.severity === "High"
                                  ? "bg-red-100 text-red-800 hover:bg-red-200"
                                  : alert.severity === "Medium"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                              }
                            >
                              {alert.severity}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                alert.status === "Active"
                                  ? "bg-red-100 text-red-800 hover:bg-red-200"
                                  : alert.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                                    : "bg-green-100 text-green-800 hover:bg-green-200"
                              }
                            >
                              {alert.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{alert.assignedTo}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Alert Distribution</CardTitle>
                  <CardDescription>Alerts by severity level</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">High Severity</div>
                        <div>
                          {alertStats.high} alerts ({Math.round((alertStats.high / alertStats.total) * 100)}%)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.high / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Medium Severity</div>
                        <div>
                          {alertStats.medium} alerts ({Math.round((alertStats.medium / alertStats.total) * 100)}%)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.medium / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Low Severity</div>
                        <div>
                          {alertStats.low} alerts ({Math.round((alertStats.low / alertStats.total) * 100)}%)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.low / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-blue-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Alert Status</CardTitle>
                  <CardDescription>Current status of all alerts</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Active</div>
                        <div>
                          {alertStats.active} alerts ({Math.round((alertStats.active / alertStats.total) * 100)}%)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.active / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">In Progress</div>
                        <div>
                          {alertStats.inProgress} alerts ({Math.round((alertStats.inProgress / alertStats.total) * 100)}
                          %)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.inProgress / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-yellow-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-medium">Resolved</div>
                        <div>
                          {alertStats.resolved} alerts ({Math.round((alertStats.resolved / alertStats.total) * 100)}%)
                        </div>
                      </div>
                      <Progress
                        value={(alertStats.resolved / alertStats.total) * 100}
                        className="h-2"
                        indicatorClassName="bg-green-500"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
