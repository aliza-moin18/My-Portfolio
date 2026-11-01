
"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:alizamoin222@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-[#090D0B] px-6 pt-16 pb-8 text-white md:px-12 md:pt-20 md:pb-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          CONTACT
          </h2>
        </motion.div>

        {/* Contact Content */}
        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-3 text-xl font-semibold">
                Have something in mind?
              </h3>
            </div>

            <div className="space-y-5">

              {/* Email */}
              <a
                href="mailto:alizamoin222@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A8D5B8]/20 bg-[#A8D5B8]/10 text-[#A8D5B8] transition duration-300 group-hover:bg-[#A8D5B8] group-hover:text-[#090D0B]">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs text-gray-500">Email</p>
                  <p className="break-all text-sm text-gray-200 transition group-hover:text-[#A8D5B8]">
                    alizamoin222@gmail.com
                  </p>
                </div>

                <FaArrowRight className="ml-auto shrink-0 text-xs text-gray-600 transition group-hover:translate-x-1 group-hover:text-[#A8D5B8]" />
              </a>

              {/* Phone */}
              <a
                href="tel:+923173888888"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#A8D5B8]/20 bg-[#A8D5B8]/10 text-[#A8D5B8] transition duration-300 group-hover:bg-[#A8D5B8] group-hover:text-[#090D0B]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500">Phone</p>
                  <p className="text-sm text-gray-200 transition group-hover:text-[#A8D5B8]">
                    +92 317 37310008
                  </p>
                </div>

                <FaArrowRight className="ml-auto shrink-0 text-xs text-gray-600 transition group-hover:translate-x-1 group-hover:text-[#A8D5B8]" />
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                YOUR NAME
              </label>

              <input
                id="contact-name"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#111814] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#A8D5B8]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                YOUR EMAIL
              </label>

              <input
                id="contact-email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-[#111814] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#A8D5B8]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-medium text-gray-400"
              >
                MESSAGE
              </label>

              <textarea
                id="contact-message"
                placeholder="Write your message..."
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/10 bg-[#111814] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#A8D5B8]"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-3 rounded-lg bg-[#A8D5B8] px-6 py-3 text-sm font-semibold text-[#090D0B] transition hover:bg-[#c2e5ce]"
            >
              Send Message
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
