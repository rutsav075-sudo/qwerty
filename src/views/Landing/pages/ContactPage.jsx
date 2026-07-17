import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialMessage = searchParams.get('message') || '';
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: initialMessage });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
      window.scrollTo(0, 0);
    }
  }, [initialMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: initialMessage });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary selection:bg-primary/20 selection:text-primary flex flex-col">
      <TopNav />
      <main className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-normal tracking-tight text-text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-text-tertiary leading-relaxed font-sans max-w-2xl">
            Get in touch with our team to learn how Synapse OS can bring true observability and control to your enterprise AI agents.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-border border-dashed p-8 md:p-10 rounded-2xl shadow-sm mb-12 relative overflow-hidden"
        >
          {submitted ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-display font-medium mb-3">Message Sent</h3>
              <p className="text-text-tertiary mb-8">We'll be in touch with you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-text-secondary font-medium hover:text-text-primary transition-colors underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text-primary placeholder:text-text-tertiary"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text-primary placeholder:text-text-tertiary"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-text-primary">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text-primary placeholder:text-text-tertiary"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-text-primary">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-text-primary placeholder:text-text-tertiary resize-none"
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-text-primary text-white hover:bg-text-secondary transition-colors text-sm font-medium rounded-full px-6 py-3 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </motion.div>


      </main>
      <Footer />
    </div>
  );
}
