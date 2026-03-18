import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Truebrew",
};

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold tracking-tight">Contact</h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-xl">
        Placeholder — content coming soon.
      </p>
    </section>
  );
}
