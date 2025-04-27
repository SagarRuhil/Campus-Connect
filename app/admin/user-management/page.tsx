"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  PlusCircle,
  RefreshCw,
  Search,
  SlidersHorizontal,
  Trash2,
  UserPlus,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample user data
const users = [
  {
    id: "USR001",
    name: "Alex Johnson",
    email: "alex.johnson@campus.edu",
    role: "Student",
    department: "Computer Science",
    status: "Active",
    lastActive: "Today, 10:30 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR002",
    name: "Sarah Williams",
    email: "sarah.williams@campus.edu",
    role: "Faculty",
    department: "Mathematics",
    status: "Active",
    lastActive: "Today, 9:15 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR003",
    name: "Michael Brown",
    email: "michael.brown@campus.edu",
    role: "Admin",
    department: "IT Services",
    status: "Active",
    lastActive: "Yesterday, 4:45 PM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR004",
    name: "Emily Davis",
    email: "emily.davis@campus.edu",
    role: "Student",
    department: "Biology",
    status: "Inactive",
    lastActive: "Apr 20, 2025, 11:20 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR005",
    name: "David Wilson",
    email: "david.wilson@campus.edu",
    role: "Faculty",
    department: "Physics",
    status: "Active",
    lastActive: "Today, 8:30 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR006",
    name: "Jennifer Taylor",
    email: "jennifer.taylor@campus.edu",
    role: "Student",
    department: "Chemistry",
    status: "Active",
    lastActive: "Yesterday, 2:15 PM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR007",
    name: "Robert Martinez",
    email: "robert.martinez@campus.edu",
    role: "Faculty",
    department: "History",
    status: "Active",
    lastActive: "Today, 11:05 AM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "USR008",
    name: "Lisa Anderson",
    email: "lisa.anderson@campus.edu",
    role: "Student",
    department: "Psychology",
    status: "Suspended",
    lastActive: "Apr 18, 2025, 3:40 PM",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

// Sample roles data
const roles = [
  {
    id: 1,
    name: "Admin",
    users: 3,
    permissions: ["Full Access", "User Management", "System Configuration"],
  },
  {
    id: 2,
    name: "Faculty",
    users: 45,
    permissions: ["Course Management", "Attendance Tracking", "Grade Management"],
  },
  {
    id: 3,
    name: "Student",
    users: 1250,
    permissions: ["View Courses", "Submit Assignments", "Book Rooms"],
  },
  {
    id: 4,
    name: "Staff",
    users: 28,
    permissions: ["View Reports", "Facility Management", "Support Tickets"],
  },
]

export default function UserManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [showAddUserDialog, setShowAddUserDialog] = useState(false)

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Handle checkbox selection
  const handleSelectUser = (userId: string) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  // Handle select all
  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([])
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id))
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 md:ml-64">
        <AdminHeader />
        <main className="p-4 md:p-6 pt-16 md:pt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">User Management</h1>
              <p className="text-muted-foreground">Manage users, roles, and permissions across the platform.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Dialog open={showAddUserDialog} onOpenChange={setShowAddUserDialog}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[525px]">
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Create a new user account. All fields are required.</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="First name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="email@campus.edu" type="email" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="faculty">Faculty</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="bio">Biology</SelectItem>
                            <SelectItem value="phys">Physics</SelectItem>
                            <SelectItem value="chem">Chemistry</SelectItem>
                            <SelectItem value="hist">History</SelectItem>
                            <SelectItem value="psych">Psychology</SelectItem>
                            <SelectItem value="it">IT Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Temporary Password</Label>
                      <Input id="password" type="password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="send-email" />
                      <Label htmlFor="send-email">Send welcome email with login instructions</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowAddUserDialog(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" onClick={() => setShowAddUserDialog(false)}>
                      Create User
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Tabs defaultValue="users" className="mb-6">
            <TabsList className="w-full md:w-auto overflow-x-auto">
              <TabsTrigger value="users" className="text-xs md:text-sm">
                Users
              </TabsTrigger>
              <TabsTrigger value="roles" className="text-xs md:text-sm">
                Roles & Permissions
              </TabsTrigger>
              <TabsTrigger value="departments" className="text-xs md:text-sm">
                Departments
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-xs md:text-sm">
                Activity Log
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="mt-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle>All Users</CardTitle>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="relative w-full sm:w-auto">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder="Search users..."
                          className="pl-8 w-full sm:w-[250px]"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-3.5 w-3.5" />
                        Filter
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="sm" className="flex items-center gap-1">
                            <SlidersHorizontal className="h-3.5 w-3.5" />
                            View
                            <ChevronDown className="h-3.5 w-3.5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Toggle Columns</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-id" defaultChecked />
                            <label htmlFor="col-id">ID</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-name" defaultChecked />
                            <label htmlFor="col-name">Name</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-email" defaultChecked />
                            <label htmlFor="col-email">Email</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-role" defaultChecked />
                            <label htmlFor="col-role">Role</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-department" defaultChecked />
                            <label htmlFor="col-department">Department</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-status" defaultChecked />
                            <label htmlFor="col-status">Status</label>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Checkbox id="col-last-active" defaultChecked />
                            <label htmlFor="col-last-active">Last Active</label>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedUsers.length > 0 && (
                    <div className="bg-muted/50 p-2 mb-4 rounded-md flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-medium">{selectedUsers.length} users selected</span>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">
                          Assign Role
                        </Button>
                        <Button variant="outline" size="sm">
                          Change Status
                        </Button>
                        <Button variant="destructive" size="sm" className="flex items-center gap-1">
                          <Trash2 className="h-3.5 w-3.5" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40px]">
                            <Checkbox
                              checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                              onCheckedChange={handleSelectAll}
                            />
                          </TableHead>
                          <TableHead className="w-[80px]">ID</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Last Active</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredUsers.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                              No users found matching your search criteria
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredUsers.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell>
                                <Checkbox
                                  checked={selectedUsers.includes(user.id)}
                                  onCheckedChange={() => handleSelectUser(user.id)}
                                />
                              </TableCell>
                              <TableCell className="font-mono text-xs">{user.id}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{user.name}</p>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge variant={user.role === "Admin" ? "default" : "outline"}>{user.role}</Badge>
                              </TableCell>
                              <TableCell>{user.department}</TableCell>
                              <TableCell>
                                <Badge
                                  variant={
                                    user.status === "Active"
                                      ? "success"
                                      : user.status === "Inactive"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                  className={
                                    user.status === "Active"
                                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                                      : user.status === "Inactive"
                                        ? "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
                                        : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                                  }
                                >
                                  {user.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-sm">{user.lastActive}</TableCell>
                              <TableCell>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Open menu</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuItem>View profile</DropdownMenuItem>
                                    <DropdownMenuItem>Edit user</DropdownMenuItem>
                                    <DropdownMenuItem>Reset password</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">Deactivate</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="roles" className="mt-6">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle>Roles & Permissions</CardTitle>
                    <Button className="flex items-center gap-2">
                      <PlusCircle className="h-4 w-4" />
                      Add Role
                    </Button>
                  </div>
                  <CardDescription>Manage user roles and their associated permissions</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Role Name</TableHead>
                        <TableHead>Users</TableHead>
                        <TableHead>Permissions</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roles.map((role) => (
                        <TableRow key={role.id}>
                          <TableCell className="font-medium">{role.name}</TableCell>
                          <TableCell>{role.users}</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {role.permissions.map((permission, i) => (
                                <Badge key={i} variant="outline" className="bg-primary/10">
                                  {permission}
                                </Badge>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="departments" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Departments</CardTitle>
                  <CardDescription>Manage academic and administrative departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      "Computer Science",
                      "Mathematics",
                      "Biology",
                      "Physics",
                      "Chemistry",
                      "History",
                      "Psychology",
                      "IT Services",
                      "Administration",
                    ].map((dept, i) => (
                      <Card key={i} className="overflow-hidden">
                        <CardHeader className="p-4">
                          <CardTitle className="text-base">{dept}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Faculty:</span>
                            <span>{Math.floor(Math.random() * 20) + 5}</span>
                          </div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Students:</span>
                            <span>{Math.floor(Math.random() * 200) + 50}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Courses:</span>
                            <span>{Math.floor(Math.random() * 15) + 5}</span>
                          </div>
                        </CardContent>
                        <div className="border-t p-4 bg-muted/50 flex justify-end">
                          <Button variant="ghost" size="sm">
                            Manage
                          </Button>
                        </div>
                      </Card>
                    ))}
                    <Card className="overflow-hidden border-dashed">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[160px]">
                        <Button variant="outline" className="flex items-center gap-2">
                          <PlusCircle className="h-4 w-4" />
                          Add Department
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity Log</CardTitle>
                  <CardDescription>Track user actions and system events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { user: "Alex Johnson", action: "Logged in", time: "Today, 10:30 AM", ip: "192.168.1.45" },
                      {
                        user: "Admin System",
                        action: "User account created: Jennifer Taylor",
                        time: "Today, 9:15 AM",
                        ip: "192.168.1.1",
                      },
                      {
                        user: "Sarah Williams",
                        action: "Updated course materials",
                        time: "Today, 9:05 AM",
                        ip: "192.168.1.23",
                      },
                      {
                        user: "Michael Brown",
                        action: "Changed system settings",
                        time: "Yesterday, 4:45 PM",
                        ip: "192.168.1.12",
                      },
                      { user: "System", action: "Backup completed", time: "Yesterday, 2:00 AM", ip: "192.168.1.1" },
                      {
                        user: "David Wilson",
                        action: "Password reset",
                        time: "Apr 23, 2025, 11:20 AM",
                        ip: "192.168.1.78",
                      },
                      {
                        user: "Emily Davis",
                        action: "Account locked (failed login attempts)",
                        time: "Apr 22, 2025, 3:40 PM",
                        ip: "192.168.1.56",
                      },
                    ].map((log, i) => (
                      <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg border"
                      >
                        <div className="flex items-center gap-3 mb-2 sm:mb-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <div>
                            <p className="font-medium">{log.action}</p>
                            <p className="text-sm text-muted-foreground">By {log.user}</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <p className="text-sm">{log.time}</p>
                          <p className="text-xs text-muted-foreground">IP: {log.ip}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
