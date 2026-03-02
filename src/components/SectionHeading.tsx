interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  center = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}>
      {label && (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-400 animate-pulse" />
          {label}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          gradient ? "gradient-text" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 sm:mt-5 text-muted leading-relaxed text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
}
