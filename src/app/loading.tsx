import {
  Skeleton,
  SkeletonCard,
  SkeletonSection,
  SkeletonSectionHeading,
  SkeletonText,
} from "@/components/Skeleton";

export default function HomeLoading() {
  return (
    <>
      {/* Hero Skeleton */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <Skeleton className="h-8 w-56 rounded-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-2/3" />
            <SkeletonText lines={2} />
            <div className="flex gap-4 pt-2">
              <Skeleton className="h-12 w-44 rounded-full" />
              <Skeleton className="h-12 w-36 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar Skeleton */}
      <section className="relative py-14">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-primary-700/20 to-accent-600/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-4 w-28" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <SkeletonSection>
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </SkeletonSection>

      {/* Why Choose Us Skeleton */}
      <SkeletonSection bg="bg-surface">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-10 w-72" />
            <SkeletonText lines={2} />
            <div className="space-y-4 pt-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-5 w-5 rounded-full shrink-0" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
          <Skeleton className="aspect-square rounded-3xl" />
        </div>
      </SkeletonSection>

      {/* Testimonials Skeleton */}
      <SkeletonSection>
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl glass p-8 space-y-4">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-4 rounded-sm" />
                ))}
              </div>
              <SkeletonText lines={3} />
              <div className="pt-4 border-t border-glass-border space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          ))}
        </div>
      </SkeletonSection>

      {/* CTA Skeleton */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-700/20 to-accent-600/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-96 max-w-full" />
          <Skeleton className="h-5 w-80 max-w-full" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-44 rounded-full" />
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </section>
    </>
  );
}
