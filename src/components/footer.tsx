import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ background: "#1a1510" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-10 md:py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:w-[360px]">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="True Brew Design Studio"
                className="h-14 w-14 object-contain"
              />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold" style={{ color: "#F5E6D3" }}>
                Services
              </span>
              {["Custom Signs", "Vinyl Application", "Laser Engraving", "Installation"].map(
                (item) => (
                  <Link
                    key={item}
                    href="/#services"
                    className="text-sm transition-colors hover:text-[#F5E6D3]"
                    style={{ color: "#8C7B6B" }}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold" style={{ color: "#F5E6D3" }}>
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

            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-sm font-semibold" style={{ color: "#F5E6D3" }}>
                Contact
              </span>
              <span className="text-sm" style={{ color: "#8C7B6B" }}>
                330-412-7976
              </span>
              <span className="text-sm break-all" style={{ color: "#8C7B6B" }}>
                truebrewdesignstudio@gmail.com
              </span>
              <span className="text-sm" style={{ color: "#8C7B6B" }}>
                Northeast Ohio
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 md:my-10 h-px w-full" style={{ background: "#2a2218" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2 text-center sm:text-left">
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
