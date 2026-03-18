import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#1a1510" }}>
      <div className="max-w-[1440px] mx-auto px-[120px] py-12">
        {/* Top row */}
        <div className="flex justify-between items-start gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-[360px]">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: "#C8956C", color: "#1a1510" }}
              >
                TB
              </div>
              <span
                className="text-lg font-bold tracking-[0.15em]"
                style={{ color: "#F5E6D3" }}
              >
                TRUE BREW
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#8C7B6B" }}>
              Custom signs and laser engraving for businesses across Northeast
              Ohio. Quality craftsmanship, every time.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold"
                style={{ color: "#F5E6D3" }}
              >
                Services
              </span>
              {[
                "Custom Signs",
                "Vinyl Application",
                "Laser Engraving",
                "Installation",
              ].map((item) => (
                <Link
                  key={item}
                  href="/#services"
                  className="text-sm transition-colors hover:text-[#F5E6D3]"
                  style={{ color: "#8C7B6B" }}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold"
                style={{ color: "#F5E6D3" }}
              >
                Company
              </span>
              {[
                { label: "About Us", href: "/#about" },
                { label: "Gallery", href: "/our-work" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm transition-colors hover:text-[#F5E6D3]"
                  style={{ color: "#8C7B6B" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <span
                className="text-sm font-semibold"
                style={{ color: "#F5E6D3" }}
              >
                Contact
              </span>
              <span className="text-sm" style={{ color: "#8C7B6B" }}>
                330-412-7976
              </span>
              <span className="text-sm" style={{ color: "#8C7B6B" }}>
                truebrewdesignstudio@gmail.com
              </span>
              <span className="text-sm" style={{ color: "#8C7B6B" }}>
                Northeast Ohio
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px w-full"
          style={{ background: "#2a2218" }}
        />

        {/* Bottom row */}
        <div className="flex justify-between items-center">
          <span className="text-sm" style={{ color: "#5a4a3a" }}>
            © 2026 True Brew Design Studio. All rights reserved.
          </span>
          <span className="text-sm" style={{ color: "#5a4a3a" }}>
            Proudly serving Northeast Ohio
          </span>
        </div>
      </div>
    </footer>
  );
}
