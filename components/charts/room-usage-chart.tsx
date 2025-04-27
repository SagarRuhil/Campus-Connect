import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "Lecture Halls", value: 35 },
  { name: "Labs", value: 25 },
  { name: "Study Rooms", value: 20 },
  { name: "Conference Rooms", value: 15 },
  { name: "Others", value: 5 },
]

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
]

export function RoomUsageChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Room Usage Distribution</CardTitle>
        <CardDescription>Distribution of room bookings by room type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer data={data} series={[{ key: "value", label: "Usage", color: "hsl(var(--chart-1))" }]}>
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="border border-border bg-background p-2 shadow-md"
                        formatter={(value) => `${value}%`}
                      />
                    }
                  />
                </PieChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
              <span className="text-sm">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
