import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
};

const base =
  "inline-flex items-center justify-center rounded-full font-bold font-body transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

// primary/outline are meant for dark backgrounds, secondary for light ones
const variants: Record<Variant, string> = {
  primary:
    "bg-haiti-gold text-haiti-charcoal hover:bg-haiti-offwhite focus-visible:outline-white",
  secondary:
    "bg-haiti-navy text-white hover:bg-haiti-charcoal focus-visible:outline-haiti-navy",
  outline:
    "border-2 border-white text-white hover:bg-white hover:text-haiti-navy focus-visible:outline-white",
};

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & (
  | ({ href: string } & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">)
  | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">)
);

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...props} className={classes}>
      {children}
    </button>
  );
}
