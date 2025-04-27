"use client"

import { Bell, Home, Moon, Search, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function AdminHeader() {
  const { setTheme } = useTheme()
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Critical: Server room temperature alert", isNew: true },
    { id: 2, text: "New user registration requests (5)", isNew: true },
    { id: 3, text: "Monthly energy report available", isNew: false },
  ])

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, isNew: false } : notification)),
    )
  }

  const newNotificationsCount = notifications.filter((notification) => notification.isNew).length

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-white dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="md:hidden">
          {/* Space for mobile menu button */}
          <div className="w-8"></div>
        </div>

        <Link href="/admin/dashboard" className="mr-4 hidden md:flex">
          <Button variant="ghost" size="icon">
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Button>
        </Link>

        <div className="flex-1 flex items-center justify-end md:justify-between">
          <div className="hidden md:flex md:w-1/3">
            <form className="w-full max-w-sm">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full pl-8 bg-gray-100 dark:bg-gray-800 border-none"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative animate-pulse">
                  <Bell className="h-5 w-5" />
                  {newNotificationsCount > 0 && (
                    <Badge
                      className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-500"
                      variant="destructive"
                    >
                      {newNotificationsCount}
                    </Badge>
                  )}
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <div className="flex items-center justify-between p-2 border-b">
                  <h2 className="font-medium">Notifications</h2>
                  <Button variant="ghost" size="sm">
                    Mark all as read
                  </Button>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className="p-3 cursor-pointer"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-2">
                        {notification.isNew && <div className="h-2 w-2 mt-2 rounded-full bg-blue-500" />}
                        <div className={`flex-1 ${notification.isNew ? "font-medium" : ""}`}>{notification.text}</div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/admin/settings">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full overflow-hidden border-2 hover:border-purple-500 transition-all duration-200"
              >
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Admin Profile"
                  className="h-full w-full object-cover"
                />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
