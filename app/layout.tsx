import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anchor & Oak",
  description: "Faith formation tools for families — designed for dads, loved by kids.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
