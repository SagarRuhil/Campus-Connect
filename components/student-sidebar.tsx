"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Calendar, BookOpen, Clock, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface SidebarProps {
  className?: string
}

export function StudentSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/login")
  }

  const navItems = [
    { href: "/student/dashboard", label: "Dashboard", icon: Home },
    { href: "/student/attendance", label: "My Attendance", icon: BookOpen },
    { href: "/student/room-booking", label: "Book a Room", icon: Calendar },
    { href: "/student/schedule", label: "My Schedule", icon: Clock },
    { href: "/student/profile", label: "Profile", icon: User },
    { href: "/student/settings", label: "Settings", icon: Settings },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="outline" size="icon" className="fixed top-4 left-4 z-50 md:hidden" onClick={toggleSidebar}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className,
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">Campus Connect</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Student Portal</p>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200 group hover:bg-teal-50 dark:hover:bg-teal-900/30",
                    isActive
                      ? "bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-medium"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 mr-3 transition-transform duration-200 group-hover:scale-110",
                      isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400",
                    )}
                  />
                  <span>{item.label}</span>
                  {isActive && <div className="absolute left-0 w-1 h-8 bg-teal-600 dark:bg-teal-400 rounded-r-full" />}
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t mt-auto">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/30"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
