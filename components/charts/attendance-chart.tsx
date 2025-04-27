import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", Present: 85, Absent: 15, Late: 5 },
  { name: "Tue", Present: 80, Absent: 20, Late: 8 },
  { name: "Wed", Present: 90, Absent: 10, Late: 3 },
  { name: "Thu", Present: 87, Absent: 13, Late: 6 },
  { name: "Fri", Present: 75, Absent: 25, Late: 10 },
]

export function AttendanceChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Weekly Attendance</CardTitle>
        <CardDescription>Student attendance statistics for the current week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            data={data}
            xAxisKey="name"
            series={[
              { key: "Present", label: "Present", color: "hsl(var(--chart-1))" },
              { key: "Absent", label: "Absent", color: "hsl(var(--chart-2))" },
              { key: "Late", label: "Late", color: "hsl(var(--chart-3))" },
            ]}
          >
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    className="text-xs text-muted-foreground"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}%`}
                    className="text-xs text-muted-foreground"
                  />
                  <Bar dataKey="Present" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} className="cursor-pointer" />
                  <Bar dataKey="Absent" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} className="cursor-pointer" />
                  <Bar dataKey="Late" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} className="cursor-pointer" />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="border border-border bg-background p-2 shadow-md"
                        formatter={(value) => `${value}%`}
                      />
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
