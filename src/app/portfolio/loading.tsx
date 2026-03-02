import {
  Skeleton,
  SkeletonHero,
  SkeletonSection,
  SkeletonSectionHeading,
  SkeletonText,
} from "@/components/Skeleton";

export default function PortfolioLoading() {
  return (
    <>
      <SkeletonHero />

      <SkeletonSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl glass overflow-hidden"
            >
              <Skeleton className="h-48 w-full !rounded-none" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-3 w-24 rounded-full" />
                <Skeleton className="h-6 w-48" />
                <SkeletonText lines={3} />
                <div className="flex gap-2 pt-1">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                </div>
                <div className="pt-4 border-t border-glass-border">
                  <Skeleton className="h-4 w-28" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SkeletonSection>

      <SkeletonSection bg="bg-surface">
        <SkeletonSectionHeading />
        <div className="flex justify-center">
          <Skeleton className="h-12 w-44 rounded-full" />
        </div>
      </SkeletonSection>
    </>
  );
}
