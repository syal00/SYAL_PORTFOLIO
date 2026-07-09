import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Socials from "../../components/Socials";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setStatus("⚠️ Email service isn't configured yet — reach me directly at syal0005@algonquinlive.com.");
      return;
    }
    setStatus("Sending...");
    emailjs.send(serviceId, templateId, { from_name: form.name, contact_info: form.contact, subject: form.subject, message: form.message }, publicKey)
      .then(
        () => { setStatus("✅ Message sent successfully!"); setForm({ name: "", contact: "", subject: "", message: "" }); },
        () => setStatus("❌ Failed to send. Please try again later.")
      );
  };

  return (
    <div className="page-section flex items-center">
      <div className="container mx-auto flex items-center justify-center px-4 sm:px-6 md:px-0">
        <div className="flex flex-col w-full max-w-[640px]">
          <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" className="h2 text-center mb-4">
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.3)} initial="hidden" animate="show" className="text-center mb-10">
            Whether it&apos;s a new project, a collaboration, or just to say hi — I&apos;d love to hear from you!
          </motion.p>
          <motion.div variants={fadeIn("up", 0.35)} initial="hidden" animate="show" className="flex justify-center mb-10">
            <Socials />
          </motion.div>
          <motion.form variants={fadeIn("up", 0.4)} initial="hidden" animate="show" onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 sm:gap-6 p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input type="text" name="name" placeholder="Your Name" className="input" value={form.name} onChange={handleChange} required />
              <input type="text" name="contact" placeholder="Your Email or Phone" className="input" value={form.contact} onChange={handleChange} required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" value={form.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message..." className="textarea h-[160px]" value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn rounded-full bg-accent text-primary font-semibold w-full sm:w-auto sm:max-w-[200px] px-8 hover:opacity-90 transition-all duration-300">
              🚀 Send Message
            </button>
            {status && (
              <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-white/70">
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
