"use client";
import Link from "next/link";
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
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="flex flex-col font-sans text-red-900 p-6 items-center justify-center gap-6 h-svh w-full
     ">
      <div className="flex flex-col items-center justify-center text-sm md:text-lg lg:text-xl ">
        <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>
        <div className="mb-8 text-center w-full max-w-md">
          For any questions,inquiries or feedback, please write to us using the form below. 
          <p>Write to us and we will get back to you as soon as possible.</p>
        </div>
      </div>

      <div className="bg-white border-2 border-haiti-gold rounded-lg p-6 shadow-lg max-w-500 h-500 mx-auto w-full items-center">
        <div className="p-6 font-extrabold mask-b-from-rose-200 text-center h-40 w-full text-7xl">Contact Us</div>
        <form className="flex flex-col gap-4 " onSubmit={handleSubmit}> 
          <div className="flex flex-col gap-1">
            <label htmlFor="firstname" className="sr-only">First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              className=" h-10border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.firstname}
              onChange={handleChange}
            />
            <label htmlFor="lastname" className="sr-only">Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.lastname}
              onChange={handleChange}
            />
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <div className="text-green-600 mt-2">Message sent successfully!</div>
          )}
          {status === "error" && (
            <div className="text-red-600 mt-2">Something went wrong. Please try again.</div>
          )}
        </form>
      </div>
    </div>
  );
}