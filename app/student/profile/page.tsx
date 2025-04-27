"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Building2,
  Camera,
  Edit,
  GraduationCap,
  Home,
  Mail,
  Menu,
  Phone,
  Save,
  User,
  Bell,
  BookOpen,
  Calendar,
  Clock,
  Settings,
  LogOut,
} from "lucide-react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StudentProfile() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [isEditing, setIsEditing] = useState(false)

  const handleLogout = () => {
    router.push("/login")
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <Clock className="h-4 w-4" />
                My Schedule
              </Link>
              <Link
                href="/student/profile"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-teal-800">My Profile</h1>
                <p className="text-gray-500">View and manage your personal information</p>
              </div>
              <Button
                className={`mt-4 md:mt-0 ${isEditing ? "bg-green-600 hover:bg-green-700" : "bg-teal-600 hover:bg-teal-700"}`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="md:col-span-1">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Student" />
                        <AvatarFallback className="text-2xl bg-teal-100 text-teal-800">JD</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <div className="absolute bottom-0 right-0 bg-teal-600 rounded-full p-1 cursor-pointer hover:bg-teal-700 transition-colors">
                          <Camera className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <CardTitle>John Doe</CardTitle>
                    <CardDescription>Computer Science</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-teal-700" />
                      <div>
                        <p className="text-sm text-gray-500">Student ID</p>
                        <p className="font-medium">ST12345</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-teal-700" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">john.doe@campus.edu</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-teal-700" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="h-5 w-5 text-teal-700" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">123 Campus Drive, College Town, CT 12345</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your personal and academic details</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Tabs defaultValue="personal">
                    <TabsList className="bg-teal-50 text-teal-900">
                      <TabsTrigger value="personal" className="data-[state=active]:bg-white">
                        Personal
                      </TabsTrigger>
                      <TabsTrigger value="academic" className="data-[state=active]:bg-white">
                        Academic
                      </TabsTrigger>
                      <TabsTrigger value="emergency" className="data-[state=active]:bg-white">
                        Emergency Contact
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="personal" className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            defaultValue="John"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            defaultValue="Doe"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            defaultValue="john.doe@campus.edu"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            defaultValue="+1 (555) 123-4567"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Address</Label>
                          <Input
                            id="address"
                            defaultValue="123 Campus Drive"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            defaultValue="College Town"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">Zip Code</Label>
                          <Input
                            id="zipCode"
                            defaultValue="12345"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="academic" className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="studentId">Student ID</Label>
                          <Input id="studentId" defaultValue="ST12345" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Input
                            id="department"
                            defaultValue="Computer Science"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="program">Program</Label>
                          <Input
                            id="program"
                            defaultValue="Bachelor of Science"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="year">Year</Label>
                          <Input
                            id="year"
                            defaultValue="3rd Year"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="advisor">Academic Advisor</Label>
                          <Input
                            id="advisor"
                            defaultValue="Dr. Jane Smith"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="emergency" className="space-y-4 mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="emergencyName">Contact Name</Label>
                          <Input
                            id="emergencyName"
                            defaultValue="Robert Doe"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyRelation">Relationship</Label>
                          <Input
                            id="emergencyRelation"
                            defaultValue="Father"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyPhone">Phone Number</Label>
                          <Input
                            id="emergencyPhone"
                            defaultValue="+1 (555) 987-6543"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyEmail">Email</Label>
                          <Input
                            id="emergencyEmail"
                            defaultValue="robert.doe@example.com"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="emergencyAddress">Address</Label>
                          <Input
                            id="emergencyAddress"
                            defaultValue="456 Family Street, Hometown, HT 54321"
                            disabled={!isEditing}
                            className={isEditing ? "border-teal-300 focus-visible:ring-teal-300" : ""}
                          />
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
