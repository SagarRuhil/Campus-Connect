"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Save } from "lucide-react"

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [highContrast, setHighContrast] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [sessionTimeout, setSessionTimeout] = useState(true)

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Advanced Settings</h1>
            <p className="text-muted-foreground">Configure system settings and preferences for Campus Connect.</p>
          </div>

          <Tabs defaultValue="general" className="space-y-4">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 lg:w-[600px]">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            {/* General Settings */}
            <TabsContent value="general">
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure basic system settings and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Institution Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="institution-name">Institution Name</Label>
                        <Input id="institution-name" defaultValue="Campus Connect University" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website URL</Label>
                        <Input id="website" defaultValue="https://campusconnect.edu" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" defaultValue="123 University Avenue, Academic City, AC 12345" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc-5">
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                            <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                            <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                            <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="utc+1">Central European Time (UTC+1)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date-format">Date Format</Label>
                        <Select defaultValue="mm-dd-yyyy">
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                            <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                            <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time-format">Time Format</Label>
                        <Select defaultValue="12h">
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                            <SelectItem value="24h">24-hour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Admin Email</Label>
                        <Input id="admin-email" defaultValue="admin@campusconnect.edu" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="support-email">Support Email</Label>
                        <Input id="support-email" defaultValue="support@campusconnect.edu" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact">Emergency Contact</Label>
                        <Input id="emergency-contact" defaultValue="(555) 987-6543" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Defaults</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="academic-year">Current Academic Year</Label>
                        <Select defaultValue="2024-2025">
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023-2024">2023-2024</SelectItem>
                            <SelectItem value="2024-2025">2024-2025</SelectItem>
                            <SelectItem value="2025-2026">2025-2026</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="semester">Current Semester</Label>
                        <Select defaultValue="spring">
                          <SelectTrigger>
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="spring">Spring</SelectItem>
                            <SelectItem value="summer">Summer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="maintenance-mode" />
                      <Label htmlFor="maintenance-mode">Enable Maintenance Mode</Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure how and when notifications are sent to users.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-notifications">Enable Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Send notifications via email to users</p>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>

                      <div className="ml-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="attendance-emails">Attendance Updates</Label>
                          <Switch id="attendance-emails" defaultChecked disabled={!emailNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="booking-emails">Room Booking Confirmations</Label>
                          <Switch id="booking-emails" defaultChecked disabled={!emailNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="alert-emails">Safety Alerts</Label>
                          <Switch id="alert-emails" defaultChecked disabled={!emailNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="system-emails">System Announcements</Label>
                          <Switch id="system-emails" defaultChecked disabled={!emailNotifications} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Push Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="push-notifications">Enable Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to mobile devices and browsers
                          </p>
                        </div>
                        <Switch
                          id="push-notifications"
                          checked={pushNotifications}
                          onCheckedChange={setPushNotifications}
                        />
                      </div>

                      <div className="ml-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="attendance-push">Attendance Updates</Label>
                          <Switch id="attendance-push" defaultChecked disabled={!pushNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="booking-push">Room Booking Confirmations</Label>
                          <Switch id="booking-push" defaultChecked disabled={!pushNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="alert-push">Safety Alerts</Label>
                          <Switch id="alert-push" defaultChecked disabled={!pushNotifications} />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="system-push">System Announcements</Label>
                          <Switch id="system-push" defaultChecked disabled={!pushNotifications} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Schedule</h3>
                    <div className="space-y-2">
                      <Label htmlFor="quiet-hours">Quiet Hours</Label>
                      <p className="text-sm text-muted-foreground mb-2">
                        Non-emergency notifications will not be sent during these hours
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quiet-start">Start Time</Label>
                          <Select defaultValue="22">
                            <SelectTrigger id="quiet-start">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 24 }).map((_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  {i === 0
                                    ? "12:00 AM"
                                    : i < 12
                                      ? `${i}:00 AM`
                                      : i === 12
                                        ? "12:00 PM"
                                        : `${i - 12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quiet-end">End Time</Label>
                          <Select defaultValue="7">
                            <SelectTrigger id="quiet-end">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 24 }).map((_, i) => (
                                <SelectItem key={i} value={i.toString()}>
                                  {i === 0
                                    ? "12:00 AM"
                                    : i < 12
                                      ? `${i}:00 AM`
                                      : i === 12
                                        ? "12:00 PM"
                                        : `${i - 12}:00 PM`}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure security options and access controls.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Authentication</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                          <p className="text-sm text-muted-foreground">
                            Require two-factor authentication for all admin users
                          </p>
                        </div>
                        <Switch id="two-factor" checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="session-timeout">Session Timeout</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically log out inactive users after 30 minutes
                          </p>
                        </div>
                        <Switch id="session-timeout" checked={sessionTimeout} onCheckedChange={setSessionTimeout} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password-policy">Password Policy</Label>
                      <Select defaultValue="strong">
                        <SelectTrigger id="password-policy">
                          <SelectValue placeholder="Select policy" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                          <SelectItem value="medium">Medium (8+ chars, letters & numbers)</SelectItem>
                          <SelectItem value="strong">
                            Strong (8+ chars, uppercase, lowercase, numbers, symbols)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password-expiry">Password Expiration</Label>
                      <Select defaultValue="90">
                        <SelectTrigger id="password-expiry">
                          <SelectValue placeholder="Select expiration period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="never">Never</SelectItem>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Access Control</h3>
                    <div className="space-y-2">
                      <Label htmlFor="ip-restrictions">IP Restrictions</Label>
                      <Textarea
                        id="ip-restrictions"
                        placeholder="Enter allowed IP addresses, one per line"
                        className="h-20"
                      />
                      <p className="text-xs text-muted-foreground">Leave blank to allow access from any IP address</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="failed-attempts">Max Failed Login Attempts</Label>
                        <Select defaultValue="5" className="w-[100px]">
                          <SelectTrigger id="failed-attempts">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="lockout-duration">Account Lockout Duration</Label>
                        <Select defaultValue="30" className="w-[120px]">
                          <SelectTrigger id="lockout-duration">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="1440">24 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security Logs</h3>
                    <div className="space-y-2">
                      <Label>Log Retention Period</Label>
                      <Select defaultValue="90">
                        <SelectTrigger>
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>Customize the look and feel of the Campus Connect platform.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="dark-mode">Dark Mode</Label>
                          <p className="text-sm text-muted-foreground">Enable dark mode for all users by default</p>
                        </div>
                        <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="high-contrast">High Contrast Mode</Label>
                          <p className="text-sm text-muted-foreground">Increase contrast for better accessibility</p>
                        </div>
                        <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="grid grid-cols-6 gap-2">
                        {["teal", "blue", "purple", "green", "orange", "red"].map((color) => (
                          <div
                            key={color}
                            className={`h-10 rounded-md cursor-pointer border-2 ${
                              color === "teal" ? "border-black dark:border-white" : "border-transparent"
                            }`}
                            style={{
                              backgroundColor:
                                color === "teal"
                                  ? "#14b8a6"
                                  : color === "blue"
                                    ? "#3b82f6"
                                    : color === "purple"
                                      ? "#8b5cf6"
                                      : color === "green"
                                        ? "#22c55e"
                                        : color === "orange"
                                          ? "#f97316"
                                          : "#ef4444",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Branding</h3>
                    <div className="space-y-2">
                      <Label htmlFor="logo">Logo</Label>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                          <span className="text-2xl font-bold text-muted-foreground">CC</span>
                        </div>
                        <Button variant="outline">Upload New Logo</Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="favicon">Favicon</Label>
                      <div className="flex items-center gap-4">
                        <div className="h-8 w-8 rounded-md bg-muted flex items-center justify-center">
                          <span className="text-xs font-bold text-muted-foreground">CC</span>
                        </div>
                        <Button variant="outline">Upload New Favicon</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Layout</h3>
                    <div className="space-y-2">
                      <Label htmlFor="layout">Default Layout</Label>
                      <Select defaultValue="sidebar">
                        <SelectTrigger id="layout">
                          <SelectValue placeholder="Select layout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sidebar">Sidebar Navigation</SelectItem>
                          <SelectItem value="topnav">Top Navigation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="density">Interface Density</Label>
                      <Select defaultValue="comfortable">
                        <SelectTrigger id="density">
                          <SelectValue placeholder="Select density" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compact">Compact</SelectItem>
                          <SelectItem value="comfortable">Comfortable</SelectItem>
                          <SelectItem value="spacious">Spacious</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* System Settings */}
            <TabsContent value="system">
              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure advanced system settings and integrations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Performance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="cache-duration">Cache Duration</Label>
                        <Select defaultValue="60" className="w-[120px]">
                          <SelectTrigger id="cache-duration">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="1440">24 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="optimize-images">Optimize Images</Label>
                          <p className="text-sm text-muted-foreground">
                            Automatically compress and optimize uploaded images
                          </p>
                        </div>
                        <Switch id="optimize-images" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Integrations</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Google Calendar</Label>
                          <p className="text-sm text-muted-foreground">Sync room bookings with Google Calendar</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Microsoft Teams</Label>
                          <p className="text-sm text-muted-foreground">
                            Integrate with Microsoft Teams for virtual meetings
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label>Student Information System</Label>
                          <p className="text-sm text-muted-foreground">Connect to your existing SIS</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Backup & Maintenance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="backup-frequency">Automatic Backup Frequency</Label>
                        <Select defaultValue="daily" className="w-[120px]">
                          <SelectTrigger id="backup-frequency">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hourly">Hourly</SelectItem>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="backup-retention">Backup Retention Period</Label>
                        <Select defaultValue="30">
                          <SelectTrigger id="backup-retention">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7">7 days</SelectItem>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                            <SelectItem value="365">1 year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="pt-2">
                        <Button variant="outline">Run Manual Backup</Button>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Advanced</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="debug-mode">Debug Mode</Label>
                          <p className="text-sm text-muted-foreground">Enable detailed logging for troubleshooting</p>
                        </div>
                        <Switch id="debug-mode" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="api-access">API Access</Label>
                          <p className="text-sm text-muted-foreground">Allow external applications to access the API</p>
                        </div>
                        <Switch id="api-access" defaultChecked />
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button variant="destructive">Reset All Settings</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
