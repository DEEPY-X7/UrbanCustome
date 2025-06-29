import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import SectionWrapper from "../common/SectionWrapper";
import { useTheme } from "../../context/ThemeContext"; // 👈 Theme hook

const ContactForm = () => {
  const { theme } = useTheme(); // 🌗 detect current theme

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  const sectionBg = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  const inputBg = theme === 'dark' ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-100 text-black border-gray-300';
  const buttonStyle = theme === 'dark'
    ? 'bg-yellow-400 hover:bg-yellow-500 text-black'
    : 'bg-black hover:bg-gray-800 text-white';

  return (
    <SectionWrapper bg={sectionBg} id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Let’s Talk Custom Builds
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${inputBg}`}
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${inputBg}`}
            required
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400 ${inputBg}`}
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className={`p-3 rounded border md:col-span-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${inputBg}`}
            required
          ></textarea>

          <motion.button
            type="submit"
            className={`font-semibold py-3 px-6 rounded md:col-span-2 transition ${buttonStyle}`}
            disabled={loading}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </SectionWrapper>
  );
};

export default ContactForm;
