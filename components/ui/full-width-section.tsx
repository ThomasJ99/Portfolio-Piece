export default function FullWidthSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`${className ?? "bg-neutral-500"}`}>{children}</div>;
}
