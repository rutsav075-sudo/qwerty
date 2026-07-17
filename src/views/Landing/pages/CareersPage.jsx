import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { Users, Globe2, Target, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const values = [
    {
      icon: <Target className="text-text-primary" size={24} />,
      title: "Mission-Driven",
      description: "We are building the definitive observability layer for autonomous agents, ensuring they operate safely, transparently, and securely in the enterprise."
    },
    {
      icon: <Users className="text-text-primary" size={24} />,
      title: "Small & Autonomous",
      description: "We believe in small, highly-capable teams. You won't find layers of middle management here—just builders who own their work end-to-end."
    },
    {
      icon: <Globe2 className="text-text-primary" size={24} />,
      title: "Remote First",
      description: "Great talent is everywhere. We operate asynchronously and evaluate based on output, not hours spent at a desk."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary selection:bg-primary/20 selection:text-primary flex flex-col">
      <TopNav />
      <main className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-text-primary mb-6">Careers</h1>
          <p className="text-base md:text-lg text-text-tertiary leading-relaxed font-sans">
            Join us in building the future of enterprise automation and AI safety.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((value, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 + (idx * 0.1), ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-border border-dashed p-8 rounded-2xl shadow-sm"
            >
              <div className="w-12 h-12 bg-secondary/50 border border-border rounded-xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-display font-medium text-text-primary mb-3">{value.title}</h3>
              <p className="text-text-tertiary leading-relaxed font-sans">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-border border-dashed p-10 md:p-16 rounded-2xl text-center max-w-3xl mx-auto shadow-sm"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-text-primary mb-4">Open Roles</h2>
          <p className="text-base md:text-lg text-text-tertiary leading-relaxed font-sans max-w-xl mx-auto mb-8">
            We don't have open roles right now, but we're always interested in meeting people who care deeply about AI safety, observability, and robust engineering. 
          </p>
          <Link 
            to="/contact?message=I'd%20love%20to%20connect%20about%20future%20career%20opportunities."
            className="bg-text-primary text-white hover:bg-text-secondary transition-colors text-sm font-medium rounded-full px-8 py-3 inline-flex items-center justify-center gap-2"
          >
            Reach Out
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
