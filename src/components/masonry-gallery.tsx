import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set to true while using placeholder images before real photos are available */
  placeholder?: boolean;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <div
          key={i}
          className="break-inside-avoid overflow-hidden rounded-xl"
        >
          {img.placeholder ? (
            <div
              className="w-full flex items-center justify-center text-sm font-medium rounded-xl"
              style={{
                aspectRatio: `${img.width} / ${img.height}`,
                background: i % 3 === 0 ? "#2a2218" : i % 3 === 1 ? "#3d3228" : "#1a1510",
                color: "#8C7B6B",
              }}
            >
              {img.alt}
            </div>
          ) : (
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              priority={i === 0}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          )}
        </div>
      ))}
    </div>
  );
}
