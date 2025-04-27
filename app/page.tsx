"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  LineChart,
  Menu,
  Shield,
  X,
  Zap,
  User,
  Check,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-teal-700">
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-1.5 rounded-md">
              <Building2 className="h-6 w-6" />
            </div>
            <span>CampusConnect</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-teal-600">
              Features
            </Link>
            <Link href="#modules" className="text-sm font-medium transition-colors hover:text-teal-600">
              Modules
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-teal-600">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-teal-600">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" className="hidden sm:flex">
                Log in
              </Button>
            </Link>
            <Link href="/login?tab=signup">
              <Button className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md">
                Get Started
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 font-bold text-xl text-teal-700">
                <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-1.5 rounded-md">
                  <Building2 className="h-6 w-6" />
                </div>
                <span>CampusConnect</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-lg font-medium p-2 hover:bg-teal-50 rounded-md"
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection(featuresRef)
                }}
              >
                Features
              </Link>
              <Link
                href="#modules"
                className="text-lg font-medium p-2 hover:bg-teal-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Modules
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-medium p-2 hover:bg-teal-50 rounded-md"
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToSection(testimonialsRef)
                }}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium p-2 hover:bg-teal-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link href="/login?tab=signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
            >
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-sm text-teal-700 mb-2"
                  >
                    <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                    Next-Gen Campus Management
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600"
                  >
                    Smart Campus Management
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="max-w-[600px] text-gray-500 md:text-xl"
                  >
                    A modular platform that helps educational institutions digitally manage their physical spaces - from
                    attendance tracking to energy optimization.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Link href="/login?role=admin">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md">
                      Admin Dashboard
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login?role=student">
                    <Button variant="outline" className="w-full border-teal-200 hover:bg-teal-50">
                      Student Portal
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-4 mt-4"
                >
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
                      JD
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      SK
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-amber-500 flex items-center justify-center text-white text-xs font-bold">
                      RL
                    </div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      +5
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">1,200+ users</span> already using CampusConnect
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mx-auto w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 opacity-90"></div>
                <img
                  src="/placeholder.svg?height=500&width=800"
                  alt="Campus Management Dashboard"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center text-center p-6"
                >
                  <div>
                    <Building2 className="h-16 w-16 mx-auto mb-4 text-white" />
                    <h3 className="text-xl font-bold text-white">Campus Management Reimagined</h3>
                    <p className="mt-2 text-teal-100">Plug-and-play solutions for modern educational spaces</p>
                    <div className="mt-6 flex justify-center">
                      <Button variant="secondary" size="sm" className="bg-white text-teal-700 hover:bg-teal-50">
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="features" ref={featuresRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600">
                  Key Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers innovative solutions for every aspect of campus management
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12"
            >
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <CardTitle>Smart Attendance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Automated attendance tracking using QR codes, NFC, or facial recognition. Generate reports and
                      identify patterns.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <CardTitle>Room Booking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Intuitive scheduling system for classrooms, labs, and meeting spaces with conflict resolution and
                      resource management.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                    <CardTitle>Energy Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Monitor and control energy usage across campus. Identify waste and implement smart conservation
                      strategies.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle>Safety Alerts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Real-time emergency notifications, evacuation management, and safety compliance monitoring.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <CardTitle>Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Comprehensive data visualization and reporting tools to make informed decisions about space
                      utilization.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div variants={item}>
                <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-teal-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-2 rounded-full text-white">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <CardTitle>Modular Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">
                      Customize your solution with only the modules you need. Scale up as your requirements grow.
                    </p>
                    <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="modules" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                  Modular System
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600">
                  Tailored to Your Needs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the modules that work best for your institution
                </p>
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-teal-100"
              >
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 flex items-center justify-center text-white mr-4">
                    <User className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-700">Student Modules</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Personal Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Attendance Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Room Booking</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Class Schedule</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Campus Notifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-teal-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-teal-700" />
                    </div>
                    <span>Profile Management</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md">
                  Explore Student Features
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-100"
              >
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white mr-4">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">Admin Modules</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>Administrative Dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>User Management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>Energy Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>Safety & Alerts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>Analytics & Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-purple-700" />
                    </div>
                    <span>System Configuration</span>
                  </li>
                </ul>
                <Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-md">
                  Explore Admin Features
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" ref={testimonialsRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600">
                  Trusted by Leading Institutions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our clients have to say about CampusConnect
                </p>
              </div>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                    </div>
                    <p className="italic text-gray-600">
                      "CampusConnect has transformed how we manage our university spaces. The energy savings alone have
                      justified the investment."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden mr-3">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Dr. Sarah Johnson"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Dr. Sarah Johnson</p>
                        <p className="text-sm text-gray-500">University of Technology</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                    </div>
                    <p className="italic text-gray-600">
                      "The attendance system has dramatically improved student punctuality and participation. The
                      analytics provide valuable insights for our faculty."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden mr-3">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Prof. Michael Chen"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Prof. Michael Chen</p>
                        <p className="text-sm text-gray-500">Westfield College</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400" />
                    </div>
                    <p className="italic text-gray-600">
                      "Students love the room booking system. It's intuitive and has eliminated the confusion and
                      double-bookings we used to experience."
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-teal-100 overflow-hidden mr-3">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt="Amanda Rodriguez"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">Amanda Rodriguez</p>
                        <p className="text-sm text-gray-500">Greenfield Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-teal-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
                    Get in Touch
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-600">
                    Ready to Transform Your Campus?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Contact us today to schedule a demo and see how CampusConnect can revolutionize your institution's
                    space management.
                  </p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                    <Mail className="h-5 w-5 text-teal-700 mr-3" />
                    <span>contact@campusconnect.edu</span>
                  </div>
                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                    <Phone className="h-5 w-5 text-teal-700 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                    <MapPin className="h-5 w-5 text-teal-700 mr-3" />
                    <span>123 Education Lane, Tech City, TC 12345</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        className="border-gray-200 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        className="border-gray-200 focus:border-teal-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-gray-200 focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="institution">Institution</Label>
                    <Input
                      id="institution"
                      placeholder="Enter your institution name"
                      className="border-gray-200 focus:border-teal-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[120px] border-gray-200 focus:border-teal-500"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 shadow-md">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24">
          <div className="flex items-center gap-2 font-bold text-teal-700">
            <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white p-1.5 rounded-md">
              <Building2 className="h-5 w-5" />
            </div>
            <span>CampusConnect</span>
          </div>
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 CampusConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-500 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
