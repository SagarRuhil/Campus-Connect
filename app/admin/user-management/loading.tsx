import { AdminHeader } from "@/components/admin-header"
import { AdminSidebar } from "@/components/admin-sidebar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function UserManagementLoading() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-96" />
            </div>
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-10" />
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Skeleton className="h-10 w-64" />
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-[250px]" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="p-1">
                  <Skeleton className="h-12 w-full mb-2" />
                  {Array(7)
                    .fill(null)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full mb-2" />
                    ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-10 w-64" />
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}
