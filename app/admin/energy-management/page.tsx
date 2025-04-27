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
  Home,
  Lightbulb,
  LogOut,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Thermometer,
  Users,
  Zap,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useMobile } from "@/hooks/use-mobile"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export default function AdminEnergyManagement() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [selectedBuilding, setSelectedBuilding] = useState("all")
  const [temperatureValue, setTemperatureValue] = useState([21])
  const [lightingValue, setLightingValue] = useState([80])

  const handleLogout = () => {
    router.push("/login")
  }

  // Sample energy consumption data
  const energyData = [
    { building: "Science Building", consumption: 2450, change: -5, status: "Optimal" },
    { building: "Technology Center", consumption: 3200, change: 8, status: "High" },
    { building: "Administration Building", consumption: 1800, change: -2, status: "Optimal" },
    { building: "Arts Building", consumption: 1500, change: -10, status: "Low" },
    { building: "Library", consumption: 2100, change: 3, status: "Optimal" },
    { building: "Main Building", consumption: 2800, change: 12, status: "High" },
    { building: "Business Building", consumption: 1950, change: -4, status: "Optimal" },
  ]

  // Sample room data
  const roomData = [
    {
      id: 1,
      name: "Lecture Hall A",
      building: "Science Building",
      temperature: 21,
      lighting: 80,
      occupancy: "High",
      energyUsage: 45,
      hvacStatus: true,
      lightingStatus: true,
    },
    {
      id: 2,
      name: "Computer Lab 101",
      building: "Technology Center",
      temperature: 22,
      lighting: 90,
      occupancy: "Medium",
      energyUsage: 65,
      hvacStatus: true,
      lightingStatus: true,
    },
    {
      id: 3,
      name: "Conference Room B",
      building: "Administration Building",
      temperature: 20,
      lighting: 70,
      occupancy: "Low",
      energyUsage: 25,
      hvacStatus: true,
      lightingStatus: true,
    },
    {
      id: 4,
      name: "Seminar Room 202",
      building: "Arts Building",
      temperature: 21,
      lighting: 75,
      occupancy: "None",
      energyUsage: 15,
      hvacStatus: false,
      lightingStatus: false,
    },
    {
      id: 5,
      name: "Laboratory 305",
      building: "Science Building",
      temperature: 19,
      lighting: 100,
      occupancy: "High",
      energyUsage: 80,
      hvacStatus: true,
      lightingStatus: true,
    },
    {
      id: 6,
      name: "Lecture Hall C",
      building: "Business Building",
      temperature: 22,
      lighting: 85,
      occupancy: "Medium",
      energyUsage: 55,
      hvacStatus: true,
      lightingStatus: true,
    },
  ]

  // Filter room data based on selected building
  const filteredRooms =
    selectedBuilding === "all" ? roomData : roomData.filter((room) => room.building === selectedBuilding)

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
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h2 className="text-2xl font-bold tracking-tight">Energy Management</h2>
                <p className="text-muted-foreground">Monitor and optimize energy usage across campus.</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export Report
                </Button>
                <Button size="sm" className="h-8 bg-teal-600 hover:bg-teal-700">
                  <Zap className="mr-2 h-3.5 w-3.5" />
                  Energy Saving Mode
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Total Consumption</CardTitle>
                  <CardDescription>Current month</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">15,800 kWh</div>
                    <p className="text-sm text-muted-foreground mt-1">-3% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Cost</CardTitle>
                  <CardDescription>Current month</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">$2,450</div>
                    <p className="text-sm text-muted-foreground mt-1">-5% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Carbon Footprint</CardTitle>
                  <CardDescription>Current month</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">7.2 tons</div>
                    <p className="text-sm text-muted-foreground mt-1">-2% from last month</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Efficiency Score</CardTitle>
                  <CardDescription>Current rating</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-700">B+</div>
                    <p className="text-sm text-muted-foreground mt-1">Up from B last month</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="buildings" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
                <TabsTrigger value="buildings">Buildings</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="controls">Controls</TabsTrigger>
              </TabsList>
              <TabsContent value="buildings" className="space-y-4 mt-4">
                <div className="rounded-md border">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="h-10 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Building
                        </th>
                        <th className="h-10 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Consumption (kWh)
                        </th>
                        <th className="h-10 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Change
                        </th>
                        <th className="h-10 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="h-10 px-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {energyData.map((building, index) => (
                        <tr key={index} className="hover:bg-teal-50/30">
                          <td className="px-4 py-3 whitespace-nowrap">
                            <div className="font-medium">{building.building}</div>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">{building.consumption} kWh</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span
                              className={
                                building.change < 0
                                  ? "text-green-600 flex items-center"
                                  : "text-red-600 flex items-center"
                              }
                            >
                              {building.change < 0 ? "↓" : "↑"} {Math.abs(building.change)}%
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <Badge
                              className={
                                building.status === "Optimal"
                                  ? "bg-green-100 text-green-800 hover:bg-green-200"
                                  : building.status === "High"
                                    ? "bg-red-100 text-red-800 hover:bg-red-200"
                                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                              }
                            >
                              {building.status}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-right">
                            <Button variant="outline" size="sm" className="h-8 px-2 py-0">
                              Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Energy Consumption Trends</CardTitle>
                    <CardDescription>Last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                      <BarChart3 className="h-8 w-8 text-gray-400" />
                      <span className="ml-2 text-gray-500">Energy Consumption Chart</span>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="rooms" className="space-y-4 mt-4">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input type="search" placeholder="Search rooms..." className="pl-8" />
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
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {filteredRooms.map((room) => (
                    <Card key={room.id} className="overflow-hidden">
                      <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                        <CardTitle>{room.name}</CardTitle>
                        <CardDescription>{room.building}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Thermometer className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm font-medium">Temperature</span>
                            </div>
                            <span className="text-sm">{room.temperature}°C</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Lightbulb className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm font-medium">Lighting</span>
                            </div>
                            <span className="text-sm">{room.lighting}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm font-medium">Occupancy</span>
                            </div>
                            <Badge
                              className={
                                room.occupancy === "High"
                                  ? "bg-red-100 text-red-800"
                                  : room.occupancy === "Medium"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : room.occupancy === "Low"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-gray-100 text-gray-800"
                              }
                            >
                              {room.occupancy}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Zap className="h-4 w-4 mr-2 text-gray-500" />
                              <span className="text-sm font-medium">Energy Usage</span>
                            </div>
                            <span className="text-sm">{room.energyUsage} kWh</span>
                          </div>
                          <div className="pt-4 border-t">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <span className="text-sm font-medium">HVAC</span>
                              </div>
                              <Switch checked={room.hvacStatus} />
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-sm font-medium">Lighting</span>
                              </div>
                              <Switch checked={room.lightingStatus} />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="controls" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                      <CardTitle>Temperature Control</CardTitle>
                      <CardDescription>Adjust campus-wide temperature settings</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Global Temperature</span>
                            <span>{temperatureValue}°C</span>
                          </div>
                          <Slider
                            value={temperatureValue}
                            onValueChange={setTemperatureValue}
                            min={16}
                            max={28}
                            step={0.5}
                            className="w-full"
                          />
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>16°C</span>
                            <span>22°C</span>
                            <span>28°C</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Energy Saving Mode</span>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Schedule-based Control</span>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Occupancy-based Control</span>
                            <Switch defaultChecked />
                          </div>
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">Apply Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                      <CardTitle>Lighting Control</CardTitle>
                      <CardDescription>Adjust campus-wide lighting settings</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Global Brightness</span>
                            <span>{lightingValue}%</span>
                          </div>
                          <Slider
                            value={lightingValue}
                            onValueChange={setLightingValue}
                            min={0}
                            max={100}
                            step={5}
                            className="w-full"
                          />
                          <div className="flex justify-between mt-1 text-xs text-gray-500">
                            <span>0%</span>
                            <span>50%</span>
                            <span>100%</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Motion Sensors</span>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Daylight Harvesting</span>
                            <Switch defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">After-hours Auto Shutdown</span>
                            <Switch defaultChecked />
                          </div>
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700">Apply Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Energy Saving Recommendations</CardTitle>
                    <CardDescription>Suggestions to optimize energy usage</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="mt-0.5 bg-green-100 p-2 rounded-full">
                          <Lightbulb className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-green-800">Replace lighting in Technology Center</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Upgrading to LED lighting can reduce energy consumption by up to 30% and save approximately
                            $450 per month.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 border-green-200 text-green-700 hover:bg-green-100"
                          >
                            Implement
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="mt-0.5 bg-blue-100 p-2 rounded-full">
                          <Thermometer className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-800">Optimize HVAC schedule in Main Building</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Adjusting HVAC operation times to match actual building usage can reduce energy consumption
                            by 15% and save approximately $320 per month.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 border-blue-200 text-blue-700 hover:bg-blue-100"
                          >
                            Implement
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                        <div className="mt-0.5 bg-yellow-100 p-2 rounded-full">
                          <Zap className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-800">Install occupancy sensors in Library</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            Adding occupancy sensors in low-traffic areas can reduce lighting energy use by up to 25%
                            and save approximately $180 per month.
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 border-yellow-200 text-yellow-700 hover:bg-yellow-100"
                          >
                            Implement
                          </Button>
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
