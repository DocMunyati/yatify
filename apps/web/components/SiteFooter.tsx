import Link from "next/link";

const footerGroups = [
  {
    title: "Discover",
    links: [
      ["Property", "/za/property/"],
      ["Cars", "/za/cars/"],
      ["Jobs", "/za/jobs/"],
      ["Services", "/za/services/"],
      ["Businesses", "/za/businesses/"],
      ["Places", "/za/places/"],
    ],
  },
  {
    title: "For business",
    links: [
      ["List with Yatify", "/business/"],
      ["Business portal", "/business/"],
    ],
  },
  {
    title: "YATIFY",
    links: [
      ["About", "/about/"],
      ["Contact", "/contact/"],
      ["South Africa", "/za/"],
      ["Crawler information", "/bot/"],
    ],
  },
  {
    title: "Account",
    links: [
      ["Log in", "/account/login/"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "/legal/privacy/"],
      ["Terms", "/legal/terms/"],
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Link
              href="/za/"
              className="link-plain text-2xl font-extrabold text-yatify-brand"
            >
              YATIFY
            </Link>

            <p className="mt-4 max-w-sm leading-7 text-yatify-muted">
              African search, discovery and marketplace infrastructure built
              around location, useful data and trusted suppliers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-bold">
                  {group.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={`${group.title}-${label}`}>
                      <Link
                        href={href}
                        className="link-plain text-sm text-yatify-muted transition hover:text-yatify-dark"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-gray-200 pt-7 text-sm text-yatify-muted">
          © {new Date().getFullYear()} YATIFY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
