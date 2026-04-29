type Props = {
  children: React.ReactNode;
  className?: string;
  withEdge?: boolean;
};

export function GradientCard({
  children,
  className = "",
  withEdge = true,
}: Props) {
  return (
    <div
      className={`card-nexa ${withEdge ? "card-edge" : ""} relative overflow-hidden p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}
