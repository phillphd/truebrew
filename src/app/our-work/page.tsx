import type { Metadata } from "next";
import { MasonryGallery } from "@/components/masonry-gallery";

export const metadata: Metadata = {
  title: "Our Work | True Brew Design Studio",
};

const images = [
  { src: "/images/PXL_20241203_201654224.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20241204_173543314.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20241216_140816489.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250423_165111181.MP.jpg",    alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250509_185140491.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250604_161009895.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250626_160124480.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250725_180748928.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250730_180351846.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250805_153807617.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250813_144031563.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250820_185608126.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20250916_182041441.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20251030_201859283.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20251114_142255176.jpg",       alt: "True Brew project", width: 1920, height: 1446 },
  { src: "/images/PXL_20251114_143946359.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20251202_175244610.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20260106_135735425.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20260211_204745439.MP.jpg",    alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20260213_191004404.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
  { src: "/images/PXL_20260216_181311908.jpg",       alt: "True Brew project", width: 1920, height: 1446 },
  { src: "/images/PXL_20260217_221342094.jpg",       alt: "True Brew project", width: 1920, height: 2550 },
];

export default function OurWork() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#1a1510" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: "#2a2218", color: "#8C7B6B" }}
          >
            Portfolio
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold leading-[1.1]"
            style={{ color: "#F5E6D3" }}
          >
            Our Work
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed max-w-xl"
            style={{ color: "#A89888" }}
          >
            A look at some of the signs, graphics, and engraving projects
            we&apos;ve delivered for businesses across Northeast Ohio.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "#FBF7F2" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20">
          <MasonryGallery images={images} />
        </div>
      </section>
    </>
  );
}
