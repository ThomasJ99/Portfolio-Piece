export default function FullWidthSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`my-10 ${className ?? "bg-neutral-500"}`}>{children}</div>
  );
}
