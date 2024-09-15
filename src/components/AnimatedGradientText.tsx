
export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-size bg-gradient-to-r font-righteous from-[#FFAE70] from-30% via-[#F6D07E] via-50% to-[#9AB57F] to-80% bg-[length:200%_auto] bg-clip-text text-transparent animate-bg-position ${className}`}
    >
      {children}
    </div>
  );
}
