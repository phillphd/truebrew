"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href ||
    (href !== "/" && !href.includes("#") && pathname.startsWith(href));

  return (
    <header style={{ background: "#1a1510" }}>
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="True Brew Design Studio"
            className="h-10 w-10 object-contain"
          />
          <span
            className="text-sm font-bold tracking-[0.15em]"
            style={{ color: "#F5E6D3" }}
          >
            TRUE BREW
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm transition-colors"
                style={{ color: isActive(href) ? "#F5E6D3" : "#8C7B6B" }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex px-5 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ background: "#C8956C", color: "#1a1510" }}
        >
          Get a Free Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{ color: "#F5E6D3" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t flex flex-col"
          style={{ background: "#1a1510", borderColor: "#2a2218" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-sm border-b transition-colors"
              style={{
                color: isActive(href) ? "#F5E6D3" : "#8C7B6B",
                borderColor: "#2a2218",
              }}
            >
              {label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-5 py-2.5 rounded text-sm font-semibold"
              style={{ background: "#C8956C", color: "#1a1510" }}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
