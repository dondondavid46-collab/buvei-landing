import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buvei — Private Payment Solution for Large Media Buying Teams",
  description: "Infrastructure for media buying teams and holdings. Trusted BINs, transparent terms, and dedicated support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0f1019] text-white">
        {children}
      </body>
    </html>
  );
}
