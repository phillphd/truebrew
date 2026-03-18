import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work | Truebrew",
};

export default function OurWork() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">Our Work</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Placeholder — content coming soon.
      </p>
    </section>
  );
}
