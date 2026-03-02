interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-white/5 ${className}`}
    />
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`rounded-2xl glass p-8 space-y-4 ${className}`}>
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-5 w-1/2" />
      <SkeletonText lines={2} />
    </div>
  );
}

export function SkeletonHero() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <Skeleton className="h-8 w-48 rounded-full" />
          <Skeleton className="h-12 w-full sm:h-14" />
          <Skeleton className="h-12 w-3/4 sm:h-14" />
          <div className="space-y-3 pt-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
          <div className="flex gap-4 pt-2">
            <Skeleton className="h-12 w-40 rounded-full" />
            <Skeleton className="h-12 w-36 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkeletonSection({ children, bg = "" }: { children: React.ReactNode; bg?: string }) {
  return (
    <section className={`py-24 sm:py-32 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SkeletonSectionHeading() {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
      <Skeleton className="h-5 w-28 mx-auto rounded-full" />
      <Skeleton className="h-10 w-80 mx-auto" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-3/4 mx-auto" />
    </div>
  );
}
