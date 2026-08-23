import type { CountryCode } from "@/data/site";

type CountryFlagProps = {
  code: CountryCode;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl",
};

export default function CountryFlag({
  code,
  size = "md",
  className = "",
}: CountryFlagProps) {
  return (
    <span
      aria-hidden="true"
      className={`fi fi-${code} ${sizeClasses[size]} shrink-0 rounded-[2px] ${className}`}
    />
  );
}
