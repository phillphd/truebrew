import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | True Brew Design Studio",
};

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#1a1510" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6"
            style={{ background: "#2a2218", color: "#8C7B6B" }}
          >
            Get in Touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold leading-[1.1]"
            style={{ color: "#F5E6D3" }}
          >
            Let&apos;s Talk About Your Project
          </h1>
          <p
            className="mt-4 text-lg leading-relaxed max-w-xl"
            style={{ color: "#A89888" }}
          >
            Fill out the form and we&apos;ll get back to you within 1–2 business
            days. Or reach out directly — we&apos;re happy to chat.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ background: "#FBF7F2" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left — contact info */}
            <div className="flex flex-col gap-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#1a1510" }}
                >
                  Contact Information
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#8C7B6B" }}>
                  We&apos;re a small local studio — you&apos;ll always hear from
                  a real person, not a bot.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#F0E8DD" }}
                  >
                    <Phone size={16} style={{ color: "#C8956C" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "#8C7B6B" }}>
                      Phone
                    </p>
                    <a
                      href="tel:3304127976"
                      className="text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "#1a1510" }}
                    >
                      330-412-7976
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#F0E8DD" }}
                  >
                    <Mail size={16} style={{ color: "#C8956C" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "#8C7B6B" }}>
                      Email
                    </p>
                    <a
                      href="mailto:truebrewdesignstudio@gmail.com"
                      className="text-sm font-medium transition-opacity hover:opacity-70 break-all"
                      style={{ color: "#1a1510" }}
                    >
                      truebrewdesignstudio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#F0E8DD" }}
                  >
                    <MapPin size={16} style={{ color: "#C8956C" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "#8C7B6B" }}>
                      Service Area
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#1a1510" }}>
                      Northeast Ohio
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#F0E8DD" }}
                  >
                    <Clock size={16} style={{ color: "#C8956C" }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-0.5" style={{ color: "#8C7B6B" }}>
                      Response Time
                    </p>
                    <p className="text-sm font-medium" style={{ color: "#1a1510" }}>
                      Within 1–2 business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
