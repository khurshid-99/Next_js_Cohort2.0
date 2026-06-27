import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="overflow-hidden rounded-xl">
            {/* Image */}
            <div className="p-6">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>

            <CardContent className="space-y-4 p-5">
              {/* Category */}
              <Skeleton className="h-6 w-24 rounded-full" />

              {/* Title */}
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />

              {/* Description */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />

              {/* Rating */}
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-28" />
              </div>

              {/* Price + Button */}
              <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-10 w-24 rounded-md" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Loading;
