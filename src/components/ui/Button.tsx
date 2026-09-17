import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "quiet" | "onDark";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-semibold " +
  "transition-colors duration-[160ms] ease-[cubic-bezier(.22,.61,.36,1)] " +
  "min-h-11 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-magenta-cta text-white hover:bg-magenta-deep",
  outline:
    "border border-line-strong text-ink bg-transparent hover:border-magenta hover:text-magenta-ink",
  quiet: "text-ink hover:text-magenta-ink underline underline-offset-4 decoration-1 min-h-0",
  onDark:
    "border border-white/25 text-night-ink hover:border-magenta-glow hover:text-magenta-glow",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  sm: "px-4 py-2.5 text-[0.85rem]",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "children" | "className">;

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  ...rest
}: Props) {
  const cls = [base, variants[variant], variant === "quiet" ? "" : sizes[size], className]
    .filter(Boolean)
    .join(" ");

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

/** Schlanker Pfeil für Links – ersetzt Icon-Bibliotheken. */
export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2 8h11.5M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
