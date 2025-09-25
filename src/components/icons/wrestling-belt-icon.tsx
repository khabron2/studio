export function WrestlingBeltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h0z" />
      <path d="M9 12H3V9a1 1 0 0 1 1-1h5" />
      <path d="M15 12h6v3a1 1 0 0 1-1 1h-5" />
      <path d="M9 12h6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
