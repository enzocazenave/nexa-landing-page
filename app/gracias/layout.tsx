import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Llamada confirmada",
  description: "Tu llamada con NEXA quedó agendada.",
  robots: { index: false, follow: false },
};

export default function GraciasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
