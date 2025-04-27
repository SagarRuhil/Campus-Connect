"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Check, QrCode, UserCheck, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AttendancePage() {
  const [activeTab, setActiveTab] = useState("qr")
  const [scanSuccess, setScanSuccess] = useState(false)

  const handleScan = () => {
    setScanSuccess(true)
    setTimeout(() => setScanSuccess(false), 3000)
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Attendance System</h1>
          <p className="text-gray-500">Track and manage student attendance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,853</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,142</div>
            <p className="text-xs text-muted-foreground">75% attendance rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">86</div>
            <p className="text-xs text-muted-foreground">Across all departments</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Attendance Capture</CardTitle>
            <CardDescription>Record student attendance using various methods</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="qr" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="qr">QR Code</TabsTrigger>
                <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
              </TabsList>
              <TabsContent value="qr" className="space-y-4">
                <div className="flex flex-col items-center justify-center p-6 border rounded-md mt-4">
                  {scanSuccess ? (
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium">Attendance Recorded!</h3>
                      <p className="text-sm text-gray-500 mt-1">Student ID: ST12345</p>
                      <p className="text-sm text-gray-500">Class: Computer Science 101</p>
                    </div>
                  ) : (
                    <>
                      <div className="w-48 h-48 bg-gray-100 flex items-center justify-center mb-4 rounded-md">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                      <p className="text-sm text-center text-gray-500 mb-4">
                        Scan the QR code with the student's device to record attendance
                      </p>
                      <Button onClick={handleScan}>Simulate Scan</Button>
                    </>
                  )}
                </div>
              </TabsContent>
              <TabsContent value="manual" className="space-y-4">
                <div className="grid gap-4 mt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="student-id">Student ID</Label>
                    <Input id="student-id" placeholder="Enter student ID" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="class">Class</Label>
                    <Select defaultValue="cs101">
                      <SelectTrigger id="class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs101">Computer Science 101</SelectItem>
                        <SelectItem value="math201">Mathematics 201</SelectItem>
                        <SelectItem value="phys101">Physics 101</SelectItem>
                        <SelectItem value="eng102">English 102</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="present">
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="present">Present</SelectItem>
                        <SelectItem value="absent">Absent</SelectItem>
                        <SelectItem value="late">Late</SelectItem>
                        <SelectItem value="excused">Excused</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="mt-2">Record Attendance</Button>
                </div>
              </TabsContent>
              <TabsContent value="bulk" className="space-y-4">
                <div className="grid gap-4 mt-4">
                  <div className="grid gap-2">
                    <Label htmlFor="class-bulk">Class</Label>
                    <Select defaultValue="cs101">
                      <SelectTrigger id="class-bulk">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs101">Computer Science 101</SelectItem>
                        <SelectItem value="math201">Mathematics 201</SelectItem>
                        <SelectItem value="phys101">Physics 101</SelectItem>
                        <SelectItem value="eng102">English 102</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="date-bulk">Date</Label>
                    <Input id="date-bulk" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="file">Upload CSV File</Label>
                    <Input id="file" type="file" />
                  </div>
                  <p className="text-xs text-gray-500">
                    CSV file should contain student IDs in the first column and attendance status in the second column.
                  </p>
                  <Button className="mt-2">Upload and Process</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Recent Attendance</CardTitle>
            <CardDescription>Latest attendance records</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student ID</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>ST12345</TableCell>
                  <TableCell>CS 101</TableCell>
                  <TableCell>10:05 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ST23456</TableCell>
                  <TableCell>MATH 201</TableCell>
                  <TableCell>10:02 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ST34567</TableCell>
                  <TableCell>PHYS 101</TableCell>
                  <TableCell>10:12 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Late</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ST45678</TableCell>
                  <TableCell>ENG 102</TableCell>
                  <TableCell>09:58 AM</TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Present</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ST56789</TableCell>
                  <TableCell>CS 101</TableCell>
                  <TableCell>--</TableCell>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Absent</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="outline" className="w-full mt-4">
              View All Records
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
