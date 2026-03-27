"use client";

import { useState } from "react";

const projectTypes = [
  "Custom Signs",
  "Vinyl Application",
  "Laser Engraving",
  "On-Site Installation",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-colors focus:border-[#C8956C]";
const inputStyle = {
  background: "#FFFFFF",
  borderColor: "#E8E0D8",
  color: "#1a1510",
};

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center text-center gap-4 p-12 rounded-2xl border h-full min-h-[400px]"
        style={{ background: "#FFFFFF", borderColor: "#E8E0D8" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{ background: "#F0E8DD" }}
        >
          ✓
        </div>
        <h3 className="text-xl font-semibold" style={{ color: "#1a1510" }}>
          Message sent!
        </h3>
        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#8C7B6B" }}>
          Thanks for reaching out. We&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-8 rounded-2xl border"
      style={{ background: "#FFFFFF", borderColor: "#E8E0D8" }}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8C7B6B" }}>
            Name <span style={{ color: "#C8956C" }}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8C7B6B" }}>
            Email <span style={{ color: "#C8956C" }}>*</span>
          </label>
          <input
            type="email"
            required
            placeholder="jane@example.com"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Phone + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8C7B6B" }}>
            Phone <span className="opacity-50">(optional)</span>
          </label>
          <input
            type="tel"
            placeholder="330-555-0100"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium" style={{ color: "#8C7B6B" }}>
            Project Type <span style={{ color: "#C8956C" }}>*</span>
          </label>
          <select
            required
            value={form.projectType}
            onChange={set("projectType")}
            className={inputClass}
            style={{ ...inputStyle, appearance: "auto" }}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium" style={{ color: "#8C7B6B" }}>
          Message <span style={{ color: "#C8956C" }}>*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your project — size, timeline, materials, anything helpful…"
          value={form.message}
          onChange={set("message")}
          className={inputClass}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm" style={{ color: "#C0392B" }}>
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 px-6 py-3 rounded-lg font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{ background: "#C8956C", color: "#1a1510" }}
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
