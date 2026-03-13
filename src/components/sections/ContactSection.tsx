"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Mail, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactCard() {
  // Your verified Formspree ID
  const [state, handleSubmit] = useForm("mgonanoe");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset status when user starts typing again
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    
    // Create FormData from the form element
    const formElement = e.currentTarget;
    const formDataToSend = new FormData(formElement);
    
    // Add the subject as _subject for Formspree
    formDataToSend.set('_subject', formData.subject);
    
    // Use the form element to submit
    await handleSubmit(formDataToSend);
  };

  // Update status based on Formspree state
  React.useEffect(() => {
    if (state.succeeded) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } else if (state.errors && Object.keys(state.errors).length > 0) {
      setSubmitStatus("error");
    }
  }, [state.succeeded, state.errors]);

  const handleSocialClick = (type: string, value: string) => {
    switch(type) {
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "instagram":
        window.open(`https://instagram.com/${value.replace('@', '')}`, '_blank');
        break;
      case "linkedin":
        window.open(`https://linkedin.com/in/${value.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#050A18] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT: SOCIAL & INFO */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-[#050A18] dark:text-white leading-tight">
                Let's <br /> <span className="italic text-[#D4AF37]">Connect</span>
              </h2>
              <p className="mt-6 text-[#050A18]/60 dark:text-white/60 leading-relaxed">
                Available for national advocacy, brand partnerships, and speaking engagements.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div 
                onClick={() => handleSocialClick("email", "Lizwakesho4@gmail.com")}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Email</p>
                  <p className="text-sm text-[#050A18] dark:text-white">Lizwakesho4@gmail.com</p>
                </div>
              </div>

              {/* Instagram */}
              <div 
                onClick={() => handleSocialClick("instagram", "@lizwakesho_")}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Instagram</p>
                  <p className="text-sm text-[#050A18] dark:text-white">@lizwakesho_</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div 
                onClick={() => handleSocialClick("linkedin", "Liz Wakesho")}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">LinkedIn</p>
                  <p className="text-sm text-[#050A18] dark:text-white">Liz Wakesho</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-[#F8F9FA] dark:bg-[#0A0F1D] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#D4AF37]/10"
          >
            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white placeholder:text-gray-400"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-xs mt-1 ml-2" />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white placeholder:text-gray-400"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-xs mt-1 ml-2" />
              </div>

              {/* Subject Input - New Field */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white placeholder:text-gray-400"
                  required
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-600 text-xs mt-1 ml-2" />
                <p className="text-[9px] text-[#D4AF37] uppercase tracking-wider mt-1 ml-2">This will be the subject line of your email</p>
              </div>

              {/* Message Input */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="I'd love to hear from you..." 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white resize-none placeholder:text-gray-400"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-xs mt-1 ml-2" />
              </div>

              {/* Status Message */}
              {submitStatus === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 flex items-center gap-2 text-green-600 bg-green-50 dark:bg-green-900/20 p-3 rounded-xl"
                >
                  <CheckCircle size={18} />
                  <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:col-span-2 flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 p-3 rounded-xl"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm">There was an error sending your message. Please check all fields and try again.</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="group relative w-full md:w-auto overflow-hidden rounded-full bg-[#050A18] dark:bg-[#D4AF37] px-12 py-4 text-white font-bold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {state.submitting ? (
                      <>Sending...</>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </span>
                  {/* Hover Background Slide */}
                  <div className="absolute inset-0 bg-[#D4AF37] dark:bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}