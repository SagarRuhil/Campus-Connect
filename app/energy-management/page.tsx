"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { BarChart3, Calendar, LineChart, Lightbulb, Thermometer, Zap } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function EnergyManagementPage() {
  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Energy Management</h1>
          <p className="text-gray-500">Monitor and optimize campus energy usage</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Data</Button>
          <Button>Energy Saving Tips</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Energy Usage</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,580 kWh</div>
            <p className="text-xs text-green-600">-8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost This Month</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,450</div>
            <p className="text-xs text-green-600">-5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Footprint</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28.4 tons</div>
            <p className="text-xs text-green-600">-12% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Energy Efficiency</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">B+</div>
            <p className="text-xs text-muted-foreground">Campus rating</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="buildings">Buildings</TabsTrigger>
          <TabsTrigger value="controls">Controls</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Energy Consumption Trends</CardTitle>
                <CardDescription>Campus-wide energy usage over time</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Energy Consumption Chart</span>
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Energy Distribution</CardTitle>
                <CardDescription>Breakdown by energy type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Electricity</div>
                      <div>68%</div>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Heating</div>
                      <div>22%</div>
                    </div>
                    <Progress value={22} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Water Heating</div>
                      <div>7%</div>
                    </div>
                    <Progress value={7} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Other</div>
                      <div>3%</div>
                    </div>
                    <Progress value={3} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Peak Usage Times</CardTitle>
                <CardDescription>When energy consumption is highest</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Usage by Hour Chart</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Morning Peak</span>
                    <span className="text-sm">9:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Afternoon Peak</span>
                    <span className="text-sm">1:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Evening Peak</span>
                    <span className="text-sm">6:00 PM - 8:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Saving Opportunities</CardTitle>
                <CardDescription>Potential areas for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Area</TableHead>
                      <TableHead>Potential Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Lighting Upgrades</TableCell>
                      <TableCell className="text-green-600">15-20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>HVAC Optimization</TableCell>
                      <TableCell className="text-green-600">10-15%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Smart Scheduling</TableCell>
                      <TableCell className="text-green-600">8-12%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Equipment Upgrades</TableCell>
                      <TableCell className="text-green-600">5-10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Behavioral Changes</TableCell>
                      <TableCell className="text-green-600">3-8%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Goals</CardTitle>
                <CardDescription>Progress towards campus targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Carbon Reduction</div>
                      <div>65% of goal</div>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Renewable Energy</div>
                      <div>42% of goal</div>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Water Conservation</div>
                      <div>78% of goal</div>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-medium">Waste Reduction</div>
                      <div>53% of goal</div>
                    </div>
                    <Progress value={53} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="buildings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Building Energy Performance</CardTitle>
              <CardDescription>Energy usage by building</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Building</TableHead>
                    <TableHead>Energy Usage (kWh)</TableHead>
                    <TableHead>Change</TableHead>
                    <TableHead>Efficiency Rating</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Main Building</TableCell>
                    <TableCell>12,450</TableCell>
                    <TableCell className="text-green-600">-5%</TableCell>
                    <TableCell>B+</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Science Center</TableCell>
                    <TableCell>15,780</TableCell>
                    <TableCell className="text-red-600">+2%</TableCell>
                    <TableCell>C</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Library</TableCell>
                    <TableCell>8,320</TableCell>
                    <TableCell className="text-green-600">-12%</TableCell>
                    <TableCell>A-</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Student Center</TableCell>
                    <TableCell>6,030</TableCell>
                    <TableCell className="text-green-600">-8%</TableCell>
                    <TableCell>B</TableCell>
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
        <TabsContent value="controls" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Building Controls</CardTitle>
                <CardDescription>Manage building systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Main Building HVAC</Label>
                      <p className="text-sm text-muted-foreground">Temperature control system</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">72°F</span>
                      <Slider defaultValue={[72]} max={85} min={65} step={1} className="w-24" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Science Center Lighting</Label>
                      <p className="text-sm text-muted-foreground">Main hallways and common areas</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                      <Switch id="science-lighting" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Library HVAC</Label>
                      <p className="text-sm text-muted-foreground">Temperature control system</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">70°F</span>
                      <Slider defaultValue={[70]} max={85} min={65} step={1} className="w-24" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Student Center Lighting</Label>
                      <p className="text-sm text-muted-foreground">Main hallways and common areas</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-muted-foreground" />
                      <Switch id="student-lighting" checked />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Scheduling</CardTitle>
                <CardDescription>Automated energy management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Night Setback</Label>
                      <p className="text-sm text-muted-foreground">Reduce HVAC usage after hours</p>
                    </div>
                    <Switch id="night-setback" checked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Occupancy-Based Lighting</Label>
                      <p className="text-sm text-muted-foreground">Turn off lights in empty rooms</p>
                    </div>
                    <Switch id="occupancy-lighting" checked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Weekend Mode</Label>
                      <p className="text-sm text-muted-foreground">Reduced energy usage on weekends</p>
                    </div>
                    <Switch id="weekend-mode" checked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Holiday Schedule</Label>
                      <p className="text-sm text-muted-foreground">Energy conservation during breaks</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Energy Reports</CardTitle>
              <CardDescription>Generate and view energy reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Monthly Energy Report</Label>
                    <p className="text-sm text-muted-foreground">Comprehensive energy usage analysis</p>
                  </div>
                  <Button variant="outline">Generate</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Building Comparison</Label>
                    <p className="text-sm text-muted-foreground">Compare energy usage across buildings</p>
                  </div>
                  <Button variant="outline">Generate</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Sustainability Report</Label>
                    <p className="text-sm text-muted-foreground">Progress towards sustainability goals</p>
                  </div>
                  <Button variant="outline">Generate</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Cost Analysis</Label>
                    <p className="text-sm text-muted-foreground">Financial impact of energy usage</p>
                  </div>
                  <Button variant="outline">Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
