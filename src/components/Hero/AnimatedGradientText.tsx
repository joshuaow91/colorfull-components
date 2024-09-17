export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-[length:150%_auto] font-righteous bg-colorfull-gradient-logo bg-clip-text text-transparent animate-bg-position ${className}`}
    >
      {children}
    </div>
  );
}
