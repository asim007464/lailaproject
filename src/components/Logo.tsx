export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Laila Web Solutions logo"
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#logoBg)" />
      <path d="M12 34V14h4v16h10v4H12Z" fill="#ffffff" />
      <path
        d="M27 18h4l3 8.5L37 18h4l-5.5 16h-3L27 18Z"
        fill="#ffffff"
        opacity="0.8"
      />
      <circle cx="37" cy="14" r="2.5" fill="#fbbf24" />
    </svg>
  );
}
