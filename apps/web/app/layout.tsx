import type { Metadata } from "next";
import "flag-icons/css/flag-icons.min.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yatify.africa"),

  title: {
    default: "YATIFY",
    template: "%s | YATIFY",
  },

  description:
    "African search, discovery and marketplace infrastructure for property, cars, jobs, services and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
