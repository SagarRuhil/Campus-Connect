"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bell,
  BookOpen,
  Building2,
  Calendar,
  Clock,
  Eye,
  EyeOff,
  Home,
  Lock,
  LogOut,
  Menu,
  Settings,
  Shield,
  User,
} from "lucide-react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function StudentSettings() {
  const router = useRouter()
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-teal-50 hover:text-teal-900"
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <Link
                href="/student/settings"
                className="flex items-center gap-3 rounded-lg bg-teal-50 px-3 py-2 text-teal-900 transition-all hover:text-teal-900"
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
                <h1 className="text-3xl font-bold tracking-tight text-teal-800">Settings</h1>
                <p className="text-gray-500">Manage your account settings and preferences</p>
              </div>
            </div>

            <Tabs defaultValue="account" className="space-y-4">
              <TabsList className="bg-teal-50 text-teal-900">
                <TabsTrigger value="account" className="data-[state=active]:bg-white">
                  Account
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white">
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="data-[state=active]:bg-white">
                  Privacy & Security
                </TabsTrigger>
                <TabsTrigger value="appearance" className="data-[state=active]:bg-white">
                  Appearance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Update your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john.doe@campus.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="regNumber">Registration Number</Label>
                        <Input id="regNumber" defaultValue="ST12345" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" defaultValue="Computer Science" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Campus Drive, College Town, CT 12345" />
                      </div>
                    </div>
                    <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Save Changes</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="currentPassword" type={showPassword ? "text" : "password"} className="pl-10" />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="newPassword" type={showNewPassword ? "text" : "password"} className="pl-10" />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-3 text-muted-foreground"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="confirmPassword" type={showNewPassword ? "text" : "password"} className="pl-10" />
                        </div>
                      </div>
                    </div>
                    <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Update Password</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">SMS Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications via text message</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-medium">Notification Types</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Class Updates</Label>
                            <p className="text-sm text-muted-foreground">Changes to class schedule or location</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Assignment Reminders</Label>
                            <p className="text-sm text-muted-foreground">Reminders about upcoming assignments</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Campus Announcements</Label>
                            <p className="text-sm text-muted-foreground">General campus announcements</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Emergency Alerts</Label>
                            <p className="text-sm text-muted-foreground">Critical safety and emergency information</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                    <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="privacy" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Privacy Settings</CardTitle>
                    <CardDescription>Manage your privacy preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Profile Visibility</Label>
                          <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                        </div>
                        <Select defaultValue="students">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="students">Students Only</SelectItem>
                            <SelectItem value="department">My Department</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Contact Information</Label>
                          <p className="text-sm text-muted-foreground">Control who can see your contact details</p>
                        </div>
                        <Select defaultValue="department">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select visibility" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="students">Students Only</SelectItem>
                            <SelectItem value="department">My Department</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-lg font-medium">Security</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Login Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified when someone logs into your account
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Trusted Devices</Label>
                            <p className="text-sm text-muted-foreground">Manage devices that can access your account</p>
                          </div>
                          <Button variant="outline" size="sm">
                            <Shield className="mr-2 h-4 w-4" />
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Save Settings</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-4">
                <Card>
                  <CardHeader className="bg-gradient-to-r from-teal-50 to-white">
                    <CardTitle>Appearance Settings</CardTitle>
                    <CardDescription>Customize how the application looks</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Select defaultValue="light">
                          <SelectTrigger id="theme">
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="fontSize">Font Size</Label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="fontSize">
                            <SelectValue placeholder="Select font size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="colorScheme">Color Scheme</Label>
                        <Select defaultValue="teal">
                          <SelectTrigger id="colorScheme">
                            <SelectValue placeholder="Select color scheme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="teal">Teal</SelectItem>
                            <SelectItem value="blue">Blue</SelectItem>
                            <SelectItem value="purple">Purple</SelectItem>
                            <SelectItem value="green">Green</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Animations</Label>
                          <p className="text-sm text-muted-foreground">Enable animations throughout the interface</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                    <Button className="mt-6 bg-teal-600 hover:bg-teal-700">Save Preferences</Button>
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
