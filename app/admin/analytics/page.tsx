"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Download, Filter, RefreshCw } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AnalyticsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [department, setDepartment] = useState<string>("all")

  // Sample KPI data
  const kpiData = {
    attendance: {
      value: "87.3%",
      change: "+2.5%",
      positive: true,
    },
    roomUtilization: {
      value: "76.8%",
      change: "+4.2%",
      positive: true,
    },
    energyEfficiency: {
      value: "92.1%",
      change: "-1.3%",
      positive: false,
    },
    safetyIncidents: {
      value: "3",
      change: "-40%",
      positive: true,
    },
  }

  // Sample top courses data
  const topCourses = [
    { id: 1, name: "Computer Science 101", attendance: "94.2%", students: 120, department: "Computer Science" },
    { id: 2, name: "Advanced Mathematics", attendance: "91.7%", students: 85, department: "Mathematics" },
    { id: 3, name: "Introduction to Psychology", attendance: "89.5%", students: 150, department: "Psychology" },
    { id: 4, name: "Business Ethics", attendance: "88.9%", students: 110, department: "Business" },
    { id: 5, name: "Organic Chemistry", attendance: "87.3%", students: 75, department: "Chemistry" },
  ]

  // Sample recent alerts data
  const recentAlerts = [
    {
      id: 1,
      type: "Security",
      message: "Unauthorized access attempt in Building C",
      time: "Today, 10:23 AM",
      severity: "high",
    },
    {
      id: 2,
      type: "Maintenance",
      message: "HVAC system needs maintenance in Room 302",
      time: "Yesterday, 3:45 PM",
      severity: "medium",
    },
    {
      id: 3,
      type: "Energy",
      message: "Unusual energy consumption in Science Lab",
      time: "Yesterday, 11:20 AM",
      severity: "medium",
    },
    {
      id: 4,
      type: "Security",
      message: "Fire alarm test scheduled for Building A",
      time: "Apr 24, 2025, 9:00 AM",
      severity: "low",
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 md:ml-64">
        <AdminHeader />
        <main className="p-4 md:p-6 pt-16 md:pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                Comprehensive insights and data visualization for campus operations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
              <Select value={department} onValueChange={setDepartment}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="eng">Engineering</SelectItem>
                  <SelectItem value="bus">Business</SelectItem>
                  <SelectItem value="arts">Arts & Humanities</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Attendance Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{kpiData.attendance.value}</div>
                  <div
                    className={cn(
                      "text-sm font-medium",
                      kpiData.attendance.positive ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {kpiData.attendance.change}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Room Utilization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{kpiData.roomUtilization.value}</div>
                  <div
                    className={cn(
                      "text-sm font-medium",
                      kpiData.roomUtilization.positive ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {kpiData.roomUtilization.change}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{kpiData.energyEfficiency.value}</div>
                  <div
                    className={cn(
                      "text-sm font-medium",
                      kpiData.energyEfficiency.positive ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {kpiData.energyEfficiency.change}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Safety Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{kpiData.safetyIncidents.value}</div>
                  <div
                    className={cn(
                      "text-sm font-medium",
                      kpiData.safetyIncidents.positive ? "text-green-500" : "text-red-500",
                    )}
                  >
                    {kpiData.safetyIncidents.change}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <Tabs defaultValue="attendance" className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <TabsList className="h-auto p-1">
                <TabsTrigger value="attendance" className="text-xs md:text-sm">
                  Attendance
                </TabsTrigger>
                <TabsTrigger value="rooms" className="text-xs md:text-sm">
                  Room Usage
                </TabsTrigger>
                <TabsTrigger value="energy" className="text-xs md:text-sm">
                  Energy
                </TabsTrigger>
                <TabsTrigger value="alerts" className="text-xs md:text-sm">
                  Safety Alerts
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  Filter
                </Button>
                <Select defaultValue="weekly">
                  <SelectTrigger className="w-[130px] h-9">
                    <SelectValue placeholder="Select view" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <TabsContent value="attendance" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Trends</CardTitle>
                  <CardDescription>Student attendance rates across departments over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { name: "Mon", Present: 85, Absent: 15, Late: 5 },
                        { name: "Tue", Present: 80, Absent: 20, Late: 8 },
                        { name: "Wed", Present: 90, Absent: 10, Late: 3 },
                        { name: "Thu", Present: 87, Absent: 13, Late: 6 },
                        { name: "Fri", Present: 75, Absent: 25, Late: 10 },
                      ]}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        className="text-xs text-muted-foreground"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}%`}
                        className="text-xs text-muted-foreground"
                      />
                      <Tooltip
                        formatter={(value) => `${value}%`}
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                      <Bar
                        dataKey="Present"
                        fill="hsl(var(--primary))"
                        radius={[4, 4, 0, 0]}
                        className="cursor-pointer"
                      />
                      <Bar
                        dataKey="Absent"
                        fill="hsl(var(--destructive))"
                        radius={[4, 4, 0, 0]}
                        className="cursor-pointer"
                      />
                      <Bar dataKey="Late" fill="hsl(var(--warning))" radius={[4, 4, 0, 0]} className="cursor-pointer" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Other tabs remain the same */}
            <TabsContent value="rooms" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Room Utilization</CardTitle>
                  <CardDescription>Booking rates and usage patterns across campus facilities</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Lecture Halls", value: 35 },
                          { name: "Labs", value: 25 },
                          { name: "Study Rooms", value: 20 },
                          { name: "Conference Rooms", value: 15 },
                          { name: "Others", value: 5 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {[
                          "hsl(var(--primary))",
                          "hsl(var(--secondary))",
                          "hsl(var(--accent))",
                          "hsl(var(--muted))",
                          "hsl(var(--card))",
                        ].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => `${value}%`}
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {[
                      { name: "Lecture Halls", color: "hsl(var(--primary))" },
                      { name: "Labs", color: "hsl(var(--secondary))" },
                      { name: "Study Rooms", color: "hsl(var(--accent))" },
                      { name: "Conference Rooms", color: "hsl(var(--muted))" },
                      { name: "Others", color: "hsl(var(--card))" },
                    ].map((entry, index) => (
                      <div key={`legend-${index}`} className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
                        <span className="text-sm">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Energy tab */}
            <TabsContent value="energy" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Energy Consumption</CardTitle>
                  <CardDescription>Power usage across campus buildings and facilities</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={[
                        { name: "00:00", Building1: 21, Building2: 15, Building3: 12 },
                        { name: "03:00", Building1: 15, Building2: 12, Building3: 10 },
                        { name: "06:00", Building1: 12, Building2: 10, Building3: 8 },
                        { name: "09:00", Building1: 33, Building2: 27, Building3: 20 },
                        { name: "12:00", Building1: 45, Building2: 40, Building3: 35 },
                        { name: "15:00", Building1: 48, Building2: 42, Building3: 38 },
                        { name: "18:00", Building1: 50, Building2: 45, Building3: 40 },
                        { name: "21:00", Building1: 35, Building2: 30, Building3: 25 },
                      ]}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value}
                        className="text-xs text-muted-foreground"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `${value}kW`}
                        className="text-xs text-muted-foreground"
                      />
                      <Tooltip
                        formatter={(value) => `${value}kW`}
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="Building1"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary) / 0.3)"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                        name="Science Building"
                      />
                      <Area
                        type="monotone"
                        dataKey="Building2"
                        stroke="hsl(var(--secondary))"
                        fill="hsl(var(--secondary) / 0.3)"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                        name="Library"
                      />
                      <Area
                        type="monotone"
                        dataKey="Building3"
                        stroke="hsl(var(--accent))"
                        fill="hsl(var(--accent) / 0.3)"
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                        name="Admin Block"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Alerts tab */}
            <TabsContent value="alerts" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Safety Alert Frequency</CardTitle>
                  <CardDescription>Distribution of safety incidents by type and location</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] md:h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { name: "Jan", Security: 5, Fire: 1, Medical: 3, Maintenance: 8 },
                        { name: "Feb", Security: 7, Fire: 0, Medical: 2, Maintenance: 6 },
                        { name: "Mar", Security: 4, Fire: 1, Medical: 5, Maintenance: 9 },
                        { name: "Apr", Security: 6, Fire: 0, Medical: 4, Maintenance: 7 },
                        { name: "May", Security: 8, Fire: 2, Medical: 3, Maintenance: 5 },
                        { name: "Jun", Security: 5, Fire: 0, Medical: 2, Maintenance: 8 },
                      ]}
                      margin={{
                        top: 5,
                        right: 10,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        className="text-xs text-muted-foreground"
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        className="text-xs text-muted-foreground"
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          border: "1px solid var(--border)",
                          borderRadius: "4px",
                          padding: "8px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Security"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Fire"
                        stroke="hsl(var(--destructive))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Medical"
                        stroke="hsl(var(--warning))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Maintenance"
                        stroke="hsl(var(--muted-foreground))"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Data Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Courses</CardTitle>
                <CardDescription>Courses with highest attendance and engagement</CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Department</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topCourses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.name}</TableCell>
                        <TableCell>{course.attendance}</TableCell>
                        <TableCell>{course.students}</TableCell>
                        <TableCell>{course.department}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>Latest safety and maintenance notifications</CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Severity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentAlerts.map((alert) => (
                      <TableRow key={alert.id}>
                        <TableCell>{alert.type}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{alert.message}</TableCell>
                        <TableCell>{alert.time}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              alert.severity === "high"
                                ? "destructive"
                                : alert.severity === "medium"
                                  ? "default"
                                  : "outline"
                            }
                          >
                            {alert.severity}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
