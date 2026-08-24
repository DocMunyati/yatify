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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://yatify.africa/#organization",
  name: "YATIFY",
  url: "https://yatify.africa/",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://yatify.africa/#website",
  url: "https://yatify.africa/",
  name: "YATIFY",
  publisher: {
    "@id": "https://yatify.africa/#organization",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}
