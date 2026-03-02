import {
  Skeleton,
  SkeletonHero,
  SkeletonSection,
  SkeletonSectionHeading,
  SkeletonText,
} from "@/components/Skeleton";

export default function ServicesLoading() {
  return (
    <>
      <SkeletonHero />

      <SkeletonSection>
        <div className="space-y-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <Skeleton className="h-14 w-14 rounded-2xl mb-6" />
                <Skeleton className="h-8 w-64 mb-3" />
                <SkeletonText lines={3} />
                <div className="mt-6 space-y-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <Skeleton className="h-5 w-5 rounded-full shrink-0" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton
                className={`min-h-[280px] rounded-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`}
              />
            </div>
          ))}
        </div>
      </SkeletonSection>

      <SkeletonSection bg="bg-surface">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl glass p-8 space-y-3">
              <Skeleton className="h-14 w-14" />
              <Skeleton className="h-6 w-28" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </SkeletonSection>

      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-700/20 to-accent-600/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-80 max-w-full" />
          <Skeleton className="h-5 w-96 max-w-full" />
          <Skeleton className="h-12 w-44 rounded-full mt-4" />
        </div>
      </section>
    </>
  );
}
