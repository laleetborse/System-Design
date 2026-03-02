import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker, HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "../constants/data";

const contactInfo = [
  { icon: HiMail, label: "Email", value: "laleetsb2002@gmail.com", href: socialLinks.email },
  { icon: HiLocationMarker, label: "Location", value: "Bengaluru, India", href: "https://maps.app.goo.gl/pymRqdgRs98W3cAT6" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-surface border border-border text-fg placeholder-fg-muted focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-sm";

  return (
    <section id="contact" className="py-28 bg-surface-el/50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Let&apos;s work together
          </h2>
          <p className="mt-4 text-fg-secondary max-w-md mx-auto">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-3 text-fg">
                Let&apos;s talk
              </h3>
              <p className="text-sm text-fg-secondary leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border"
                >
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-fg hover:text-accent transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-fg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {[
                { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
                { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-border text-fg-secondary hover:text-accent hover:border-accent/30 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-fg mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-fg mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-fg mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClasses} resize-none`}
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-dark shadow-lg shadow-accent/15 hover:shadow-xl hover:shadow-accent/25 transition-all duration-200"
            >
              {submitted ? (
                "Sent successfully!"
              ) : (
                <>
                  Send Message
                  <HiArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </>
              )}
            </button>
            {submitted && (
              <p className="text-center text-sm text-emerald font-medium">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
