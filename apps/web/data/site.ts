export const categories = [
  {
    name: "Property",
    href: "/za/property/",
    description: "Homes, rentals and property opportunities.",
  },
  {
    name: "Cars",
    href: "/za/cars/",
    description: "New and used vehicles from trusted providers.",
  },
  {
    name: "Jobs",
    href: "/za/jobs/",
    description: "Opportunities from employers and recruiters.",
  },
  {
    name: "Services",
    href: "/za/services/",
    description: "Professionals and local service providers.",
  },
  {
    name: "Businesses",
    href: "/za/businesses/",
    description: "Businesses and providers operating near you.",
  },
] as const;

export const regions = [
  { name: "Western Cape", slug: "western-cape" },
  { name: "Gauteng", slug: "gauteng" },
  { name: "KwaZulu-Natal", slug: "kwazulu-natal" },
  { name: "Eastern Cape", slug: "eastern-cape" },
  { name: "Free State", slug: "free-state" },
  { name: "Limpopo", slug: "limpopo" },
  { name: "Mpumalanga", slug: "mpumalanga" },
  { name: "North West", slug: "north-west" },
  { name: "Northern Cape", slug: "northern-cape" },
] as const;

export const countries = [
  {
    code: "za",
    name: "South Africa",
    status: "live",
  },
  {
    code: "zw",
    name: "Zimbabwe",
    status: "preparing",
  },
  {
    code: "bw",
    name: "Botswana",
    status: "preparing",
  },
  {
    code: "zm",
    name: "Zambia",
    status: "preparing",
  },
  {
    code: "na",
    name: "Namibia",
    status: "preparing",
  },
  {
    code: "ls",
    name: "Lesotho",
    status: "preparing",
  },
  {
    code: "sz",
    name: "Eswatini",
    status: "preparing",
  },
  {
    code: "ke",
    name: "Kenya",
    status: "preparing",
  },
] as const;

export type Country = (typeof countries)[number];
export type CountryCode = Country["code"];
export type CountryStatus = Country["status"];
