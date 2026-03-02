import {
  Skeleton,
  SkeletonSection,
  SkeletonSectionHeading,
  SkeletonText,
} from "@/components/Skeleton";

export default function AboutLoading() {
  return (
    <>
      <section className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Skeleton className="h-8 w-32 rounded-full" />
              <Skeleton className="h-14 w-full" />
              <Skeleton className="h-14 w-3/4" />
              <SkeletonText lines={4} />
              <SkeletonText lines={3} />
            </div>
            <div className="relative">
              <Skeleton className="aspect-square rounded-3xl" />
              <div className="absolute -bottom-6 -right-6 rounded-2xl glass-strong p-6">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-xl" />
                  <div className="space-y-1">
                    <Skeleton className="h-6 w-12" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkeletonSection bg="bg-surface">
        <SkeletonSectionHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl glass p-8 text-center space-y-4">
              <Skeleton className="h-14 w-14 rounded-2xl mx-auto" />
              <Skeleton className="h-6 w-32 mx-auto" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </SkeletonSection>

      <SkeletonSection>
        <SkeletonSectionHeading />
        <div className="max-w-2xl mx-auto space-y-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-4 w-10" />
              </div>
              <Skeleton className="h-2.5 w-full rounded-full" />
            </div>
          ))}
        </div>
      </SkeletonSection>

      <SkeletonSection bg="bg-surface">
        <SkeletonSectionHeading />
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary-500/20 pl-8 space-y-12">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-white/10 border-4 border-background" />
                <Skeleton className="h-4 w-16 mb-2" />
                <Skeleton className="h-6 w-40 mb-2" />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </div>
      </SkeletonSection>

      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-primary-700/20 to-accent-600/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
          <Skeleton className="h-10 w-72 max-w-full" />
          <Skeleton className="h-5 w-96 max-w-full" />
          <Skeleton className="h-12 w-36 rounded-full mt-4" />
        </div>
      </section>
    </>
  );
}
