"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, Calendar, BarChart, Zap, Bell, Settings, LogOut, Menu, X, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface SidebarProps {
  className?: string
}

export function AdminSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Close sidebar when clicking outside on mobile
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("admin-sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/login")
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: Home },
    { href: "/admin/attendance", label: "Attendance", icon: BookOpen },
    { href: "/admin/room-booking", label: "Room Booking", icon: Calendar },
    { href: "/admin/energy-management", label: "Energy Management", icon: Zap },
    { href: "/admin/safety-alerts", label: "Safety & Alerts", icon: Bell },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart },
    { href: "/admin/user-management", label: "User Management", icon: Users },
    { href: "/admin/settings", label: "Advanced Settings", icon: Settings },
  ]

  if (!isMounted) return null

  return (
    <>
      {/* Mobile menu button - fixed position with higher z-index */}
      <Button
        variant="outline"
        size="icon"
        id="sidebar-toggle"
        className="fixed top-4 left-4 z-50 md:hidden shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        id="admin-sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out overflow-hidden",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className,
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Campus Connect</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Admin Portal</p>
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
                    "flex items-center px-4 py-3 text-sm rounded-lg transition-all duration-200 group hover:bg-purple-50 dark:hover:bg-purple-900/30",
                    isActive
                      ? "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-medium"
                      : "text-gray-700 dark:text-gray-300",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5 mr-3 transition-transform duration-200 group-hover:scale-110",
                      isActive ? "text-purple-600 dark:text-purple-400" : "text-gray-500 dark:text-gray-400",
                    )}
                  />
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="absolute left-0 w-1 h-8 bg-purple-600 dark:bg-purple-400 rounded-r-full" />
                  )}
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

      {/* Add padding to main content on desktop */}
      <div className="hidden md:block w-64" />
    </>
  )
}
