import {
  Skeleton,
  SkeletonHero,
  SkeletonSection,
  SkeletonText,
} from "@/components/Skeleton";

export default function ContactLoading() {
  return (
    <>
      <SkeletonHero />

      <SkeletonSection>
        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-3 space-y-6">
            <div className="mb-12 space-y-4">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-10 w-64" />
              <Skeleton className="h-5 w-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-36 w-full rounded-xl" />
            </div>

            <Skeleton className="h-12 w-44 rounded-full" />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl glass-strong p-8 space-y-4">
              <Skeleton className="h-6 w-44" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <Skeleton className="h-7 w-7 rounded-full shrink-0" />
                    <div className="flex-1 space-y-1">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl glass p-8 space-y-4">
              <Skeleton className="h-6 w-36" />
              <SkeletonText lines={2} />
              <div className="space-y-3 pt-2">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          </div>
        </div>
      </SkeletonSection>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl glass p-6 flex flex-col items-center gap-3"
              >
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-36" />
                <Skeleton className="h-3 w-40" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
