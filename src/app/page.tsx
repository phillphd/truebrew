import Image from "next/image";
import Link from "next/link";
import { Signpost, Layers, Zap, HardHat, Phone, Mail } from "lucide-react";

const services = [
  {
    icon: Signpost,
    title: "Custom Signs",
    description:
      "Eye-catching storefront signs, monument signs, and channel letters designed to capture attention and elevate your brand presence.",
  },
  {
    icon: Layers,
    title: "Vinyl Application",
    description:
      "Professional vinyl graphics, vehicle wraps, and window decals applied with precision for a polished, long-lasting finish.",
  },
  {
    icon: Zap,
    title: "Laser Engraving",
    description:
      "Detailed laser engraving on wood, metal, acrylic, and more — perfect for awards, gifts, and branded merchandise.",
  },
  {
    icon: HardHat,
    title: "On-Site Installation",
    description:
      "Full-service sign installation by our experienced crew, ensuring your signage is mounted safely and looks perfect.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Locally Owned" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: "#1a1510" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Left */}
          <div className="flex flex-col gap-6 md:gap-8 flex-1">
            <h1
              className="text-4xl md:text-5xl font-bold leading-[1.1]"
              style={{ color: "#F5E6D3" }}
            >
              Custom Signs &amp; Laser Engraving That Make Your Brand Stand Out
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed"
              style={{ color: "#A89888" }}
            >
              From design to installation, True Brew delivers precision
              craftsmanship for businesses across Northeast Ohio.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded font-semibold text-sm transition-opacity hover:opacity-90 text-center"
                style={{ background: "#C8956C", color: "#1a1510" }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/our-work"
                className="px-6 py-3 rounded font-semibold text-sm border transition-colors hover:bg-white/5 text-center"
                style={{ color: "#F5E6D3", borderColor: "#F5E6D3" }}
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 w-full relative h-[280px] sm:h-[380px] md:h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/PXL_20251114_142255176.jpg"
              alt="True Brew signage work"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ background: "#FBF7F2" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20 flex flex-col gap-10 md:gap-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-medium"
              style={{ background: "#F0E8DD", color: "#8C7B6B" }}
            >
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1a1510" }}>
              Our Services
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed max-w-[700px]"
              style={{ color: "#8C7B6B" }}
            >
              From eye-catching storefront signs to precision laser engraving,
              we bring your brand to life with quality craftsmanship.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-6 md:p-8 rounded-xl border"
                style={{ background: "#FFFFFF", borderColor: "#E8E0D8" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#F0E8DD" }}
                >
                  <Icon size={20} style={{ color: "#C8956C" }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "#1a1510" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#8C7B6B" }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Craftsmanship ── */}
      <section id="about" style={{ background: "#1a1510" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Left */}
          <div className="flex flex-col gap-6 flex-1">
            <span
              className="w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider border"
              style={{ color: "#A89888", borderColor: "#3d3228" }}
            >
              Why True Brew
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-[1.1]"
              style={{ color: "#F5E6D3" }}
            >
              Craftsmanship You Can Count On
            </h2>
            <p className="text-base leading-[1.7]" style={{ color: "#A89888" }}>
              We&apos;re a small team that takes pride in every project. From
              the first conversation to the final install, we work closely with
              you to make sure every detail is right. No shortcuts, no
              surprises — just honest work and results you&apos;ll be proud to
              show off.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-2">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-3xl font-bold" style={{ color: "#F5E6D3" }}>
                    {value}
                  </span>
                  <span className="text-sm font-medium" style={{ color: "#8C7B6B" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 w-full relative h-[280px] sm:h-[360px] md:h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/PXL_20250916_182041441.jpg"
              alt="True Brew craftsmanship"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#FBF7F2" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20 flex flex-col items-center gap-8 md:gap-10 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#1a1510" }}
          >
            Ready to Bring Your Vision to Life?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-[700px]"
            style={{ color: "#8C7B6B" }}
          >
            Whether you need a storefront sign, custom engraving, or vehicle
            graphics — we&apos;d love to hear about your project. Reach out
            today for a free consultation.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5">
              <Phone size={20} style={{ color: "#1a1510" }} />
              <span className="text-base font-medium" style={{ color: "#1a1510" }}>
                330-412-7976
              </span>
            </div>
            <div
              className="hidden sm:block w-px h-6"
              style={{ background: "#D4C4B0" }}
            />
            <div className="flex items-center gap-2.5">
              <Mail size={20} style={{ color: "#1a1510" }} />
              <span className="text-base font-medium" style={{ color: "#1a1510" }}>
                truebrewdesignstudio@gmail.com
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-8 py-3 rounded font-semibold text-base transition-opacity hover:opacity-90"
            style={{ background: "#C8956C", color: "#1a1510" }}
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
