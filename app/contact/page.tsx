"use client";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { useState } from "react";


export default function ContactPage() {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({ firstname: "", lastname: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Questions, inquiries, or feedback? Write to us and we will get back to you as soon as possible."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-2xl border-t-4 border-haiti-gold bg-white p-6 shadow-md lg:col-span-1">
          <h2 className="text-2xl font-bold text-haiti-navy">Get in Touch</h2>
          <address className="mt-4 flex flex-col gap-3 not-italic">
            <span>PO Box 650142, Fresh Meadows, NY 11365</span>
            <a href="mailto:HYF@haitianyouth.org" className="font-bold text-haiti-navy underline underline-offset-4 hover:text-haiti-red">
              HYF@haitianyouth.org
            </a>
            <a href="tel:7187814747" className="font-bold text-haiti-navy underline underline-offset-4 hover:text-haiti-red">
              718-781-4747
            </a>
          </address>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border-t-4 border-haiti-gold bg-white p-6 shadow-md sm:p-8 lg:col-span-2"
        >
          <h2 className="text-2xl font-bold text-haiti-navy">Send Us a Message</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstname" className="mb-1 block font-bold text-haiti-navy">First Name</label>
              <input id="firstname" type="text" name="firstname" required className="w-full rounded-lg border border-haiti-charcoal/30 bg-white px-4 py-3 text-haiti-charcoal focus:border-haiti-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy" value={formData.firstname} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="lastname" className="mb-1 block font-bold text-haiti-navy">Last Name</label>
              <input id="lastname" type="text" name="lastname" required className="w-full rounded-lg border border-haiti-charcoal/30 bg-white px-4 py-3 text-haiti-charcoal focus:border-haiti-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy" value={formData.lastname} onChange={handleChange} />
            </div>
          </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-bold text-haiti-navy">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-lg border border-haiti-charcoal/30 bg-white px-4 py-3 text-haiti-charcoal focus:border-haiti-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy" value={formData.email} onChange={handleChange} />
            </div>
          <div>
            <label htmlFor="message" className="mb-1 block font-bold text-haiti-navy">Message</label>
            <textarea id="message" name="message" required rows={6} className="w-full rounded-lg border border-haiti-charcoal/30 bg-white px-4 py-3 text-haiti-charcoal focus:border-haiti-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-haiti-navy" value={formData.message} onChange={handleChange} />
          </div>
          <div>
            <Button type="submit" variant="secondary" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>
          </div>
          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="rounded-lg bg-haiti-navy/10 p-3 font-bold text-haiti-navy">Message sent successfully! Please check your email for a confirmation.</p>
            )}
            {status === "error" && (
              <p className="rounded-lg bg-haiti-red/10 p-3 font-bold text-haiti-red">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      </section>
    </>
  );
}
