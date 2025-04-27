import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", Security: 5, Fire: 1, Medical: 3, Maintenance: 8 },
  { name: "Feb", Security: 7, Fire: 0, Medical: 2, Maintenance: 6 },
  { name: "Mar", Security: 4, Fire: 1, Medical: 5, Maintenance: 9 },
  { name: "Apr", Security: 6, Fire: 0, Medical: 4, Maintenance: 7 },
  { name: "May", Security: 8, Fire: 2, Medical: 3, Maintenance: 5 },
  { name: "Jun", Security: 5, Fire: 0, Medical: 2, Maintenance: 8 },
]

export function AlertsChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alerts by Category</CardTitle>
        <CardDescription>Monthly distribution of alerts by category</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ChartContainer
            data={data}
            xAxisKey="name"
            series={[
              { key: "Security", label: "Security", color: "hsl(var(--chart-1))" },
              { key: "Fire", label: "Fire", color: "hsl(var(--chart-2))" },
              { key: "Medical", label: "Medical", color: "hsl(var(--chart-3))" },
              { key: "Maintenance", label: "Maintenance", color: "hsl(var(--chart-4))" },
            ]}
          >
            <Chart>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                  <YAxis tickLine={false} axisLine={false} tickMargin={8} className="text-xs text-muted-foreground" />
                  <Line
                    type="monotone"
                    dataKey="Security"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Fire"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="type"
                    dataKey="Medical"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Maintenance"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent className="border border-border bg-background p-2 shadow-md" />}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Chart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
