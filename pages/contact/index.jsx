import { useState } from "react";
import { motion } from "framer-motion";
import Socials from "../../components/Socials";
import { fadeIn } from "../../variants";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus(
        "⚠️ Contact form isn't configured yet — reach me directly at syal0005@algonquinlive.com."
      );
      return;
    }

    setSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          email: form.contact,
          subject: form.subject,
          message: form.message,
          _subject: `Portfolio contact: ${form.subject}`,
        }),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully! I'll get back to you soon.");
        setForm({ name: "", contact: "", subject: "", message: "" });
      } else {
        const data = await response.json().catch(() => null);
        const errorMessage =
          data?.errors?.[0]?.message ||
          data?.error ||
          "Failed to send. Please try again later.";
        setStatus(`❌ ${errorMessage}`);
      }
    } catch {
      setStatus(
        "❌ Something went wrong. Please try again or email syal0005@algonquinlive.com."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page-section flex items-start sm:items-center">
      <div className="container mx-auto flex items-start sm:items-center justify-center px-4 sm:px-6 md:px-0 py-2 sm:py-0">
        <div className="flex flex-col w-full max-w-[640px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            className="text-center mb-10"
          >
            Whether it&apos;s a new project, a collaboration, or just to say hi
            — I&apos;d love to hear from you!
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            className="flex justify-center mb-10"
          >
            <Socials />
          </motion.div>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            onSubmit={handleSubmit}
            className="glass-card flex flex-col gap-5 sm:gap-6 p-5 sm:p-8"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input"
                value={form.name}
                onChange={handleChange}
                required
                disabled={sending}
              />
              <input
                type="text"
                name="contact"
                placeholder="Your Email or Phone"
                className="input"
                value={form.contact}
                onChange={handleChange}
                required
                disabled={sending}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={form.subject}
              onChange={handleChange}
              required
              disabled={sending}
            />
            <textarea
              name="message"
              placeholder="Your Message..."
              className="textarea min-h-[140px] h-40 sm:h-44"
              value={form.message}
              onChange={handleChange}
              required
              disabled={sending}
            />
            <button
              type="submit"
              disabled={sending}
              className="btn btn-send rounded-full bg-accent text-primary font-semibold w-full sm:w-auto sm:max-w-[200px] px-8 disabled:opacity-60 disabled:cursor-not-allowed disabled:animate-none"
            >
              {sending ? "Sending..." : "🚀 Send Message"}
            </button>
            {status && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-white/70"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
