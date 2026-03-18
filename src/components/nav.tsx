"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header style={{ background: "#1a1510" }}>
      <nav className="max-w-[1440px] mx-auto px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded flex items-center justify-center text-xs font-bold"
            style={{ background: "#C8956C", color: "#1a1510" }}
          >
            TB
          </div>
          <span
            className="text-sm font-bold tracking-[0.15em]"
            style={{ color: "#F5E6D3" }}
          >
            TRUE BREW
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm transition-colors"
                style={{
                  color:
                    pathname === href || (href !== "/" && pathname.startsWith(href.split("#")[0]) && !href.includes("#"))
                      ? "#F5E6D3"
                      : "#8C7B6B",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="px-5 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "#C8956C", color: "#1a1510" }}
        >
          Get a Free Quote
        </Link>
      </nav>
    </header>
  );
}
