import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "00:00", Building1: 21, Building2: 15, Building3: 12 },
  { name: "03:00", Building1: 15, Building2: 12, Building3: 10 },
  { name: "06:00", Building1: 12, Building2: 10, Building3: 8 },
  { name: "09:00", Building1: 33, Building2: 27, Building3: 20 },
  { name: "12:00", Building1: 45, Building2: 40, Building3: 35 },
  { name: "15:00", Building1: 48, Building2: 42, Building3: 38 },
  { name: "18:00", Building1: 50, Building2: 45, Building3: 40 },
  { name: "21:00", Building1: 35, Building2: 30, Building3: 25 },
]

export function EnergyUsageChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Energy Usage</CardTitle>
        <CardDescription>Energy consumption across buildings over 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            data={data}
            xAxisKey="name"
            series={[
              { key: "Building1", label: "Science Building", color: "hsl(var(--chart-1))" },
              { key: "Building2", label: "Library", color: "hsl(var(--chart-2))" },
              { key: "Building3", label: "Admin Block", color: "hsl(var(--chart-3))" },
            ]}
          >
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
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
                    tickFormatter={(value) => value}
                    className="text-xs text-muted-foreground"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => `${value}kW`}
                    className="text-xs text-muted-foreground"
                  />
                  <Area
                    type="monotone"
                    dataKey="Building1"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1) / 0.3)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Building2"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2) / 0.3)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Building3"
                    stroke="hsl(var(--chart-3))"
                    fill="hsl(var(--chart-3) / 0.3)"
                    strokeWidth={2}
                    activeDot={{ r: 6 }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="border border-border bg-background p-2 shadow-md"
                        formatter={(value) => `${value}kW`}
                      />
                    }
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
