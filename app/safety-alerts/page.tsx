"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Shield, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SafetyAlertsPage() {
  const [showEmergencyForm, setShowEmergencyForm] = useState(false)

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Safety & Alerts</h1>
          <p className="text-gray-500">Campus safety management and emergency notifications</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Safety Resources</Button>
          <Button variant="destructive" onClick={() => setShowEmergencyForm(!showEmergencyForm)}>
            {showEmergencyForm ? "Cancel" : "Report Emergency"}
          </Button>
        </div>
      </div>

      {showEmergencyForm && (
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">Report Emergency</CardTitle>
            <CardDescription>Use this form to report an emergency situation on campus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="emergency-type">Emergency Type</Label>
                <Select defaultValue="medical">
                  <SelectTrigger id="emergency-type">
                    <SelectValue placeholder="Select emergency type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="medical">Medical Emergency</SelectItem>
                    <SelectItem value="fire">Fire</SelectItem>
                    <SelectItem value="security">Security Threat</SelectItem>
                    <SelectItem value="hazard">Hazardous Material</SelectItem>
                    <SelectItem value="infrastructure">Infrastructure Failure</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Building and room number/area" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the emergency situation" />
              </div>
              <div className="flex items-center gap-2">
                <Switch id="immediate-response" />
                <Label htmlFor="immediate-response">Request immediate response</Label>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowEmergencyForm(false)}>
              Cancel
            </Button>
            <Button variant="destructive">Submit Emergency Report</Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Status</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Normal</div>
            <p className="text-xs text-muted-foreground">No active campus-wide alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safety Drills</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Scheduled this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Safety Personnel</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">On duty now</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="alerts" className="mt-6">
        <TabsList>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="drills">Safety Drills</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Alerts</CardTitle>
              <CardDescription>Active safety alerts across campus</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Reported</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-yellow-100 p-1">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        </div>
                        HVAC Maintenance
                      </div>
                    </TableCell>
                    <TableCell>Science Building, 3rd Floor</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell>2 hours ago</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-red-100 p-1">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                        </div>
                        Fire Alarm Test
                      </div>
                    </TableCell>
                    <TableCell>All Buildings</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>Today, 2:00 PM</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-yellow-100 p-1">
                          <AlertTriangle className="h-4 w-4 text-yellow-600" />
                        </div>
                        Water Leak
                      </div>
                    </TableCell>
                    <TableCell>Library, Basement</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                        Under Investigation
                      </Badge>
                    </TableCell>
                    <TableCell>Yesterday</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification System</CardTitle>
              <CardDescription>Configure and send campus notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="notification-type">Notification Type</Label>
                    <Select defaultValue="info">
                      <SelectTrigger id="notification-type">
                        <SelectValue placeholder="Select notification type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Alert</SelectItem>
                        <SelectItem value="warning">Warning</SelectItem>
                        <SelectItem value="info">Information</SelectItem>
                        <SelectItem value="announcement">Announcement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notification-title">Title</Label>
                    <Input id="notification-title" placeholder="Enter notification title" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notification-message">Message</Label>
                    <Textarea id="notification-message" placeholder="Enter notification message" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notification-audience">Audience</Label>
                    <Select defaultValue="all">
                      <SelectTrigger id="notification-audience">
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Campus</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="faculty">Faculty Only</SelectItem>
                        <SelectItem value="staff">Staff Only</SelectItem>
                        <SelectItem value="building">Specific Building</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="notification-urgent" />
                    <Label htmlFor="notification-urgent">Mark as urgent</Label>
                  </div>
                  <Button>Send Notification</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="drills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Safety Drills</CardTitle>
              <CardDescription>Scheduled and past safety drills</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Drill Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Fire Evacuation</TableCell>
                    <TableCell>All Buildings</TableCell>
                    <TableCell>Friday, 2:00 PM</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Scheduled
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Lockdown</TableCell>
                    <TableCell>Main Building</TableCell>
                    <TableCell>Last Week</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Report
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Severe Weather</TableCell>
                    <TableCell>All Buildings</TableCell>
                    <TableCell>Last Month</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        Completed
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Report
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button variant="outline" className="w-full mt-4">
                Schedule New Drill
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>Important contacts for emergency situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-red-100 p-2 text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Campus Security</p>
                      <p className="text-sm text-muted-foreground">Emergency: 555-123-4567</p>
                      <p className="text-sm text-muted-foreground">Non-Emergency: 555-123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-red-100 p-2 text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Medical Services</p>
                      <p className="text-sm text-muted-foreground">Campus Health: 555-123-4569</p>
                      <p className="text-sm text-muted-foreground">Local Hospital: 555-123-4570</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-red-100 p-2 text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Facilities Management</p>
                      <p className="text-sm text-muted-foreground">Maintenance: 555-123-4571</p>
                      <p className="text-sm text-muted-foreground">After Hours: 555-123-4572</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Safety Resources</CardTitle>
                <CardDescription>Guides and information for campus safety</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Emergency Procedures Guide</p>
                      <p className="text-sm text-muted-foreground">Step-by-step instructions for various emergencies</p>
                      <Button variant="link" className="h-auto p-0 text-sm">
                        Download PDF
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Campus Map with Emergency Exits</p>
                      <p className="text-sm text-muted-foreground">Evacuation routes and assembly points</p>
                      <Button variant="link" className="h-auto p-0 text-sm">
                        View Map
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-blue-100 p-2 text-blue-700">
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Safety Training Videos</p>
                      <p className="text-sm text-muted-foreground">Educational videos on emergency preparedness</p>
                      <Button variant="link" className="h-auto p-0 text-sm">
                        Watch Videos
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
