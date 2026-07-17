import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function TermsAndConditionsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const lastUpdated = "July 17, 2026";

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary selection:bg-primary/20 selection:text-primary flex flex-col">
      <TopNav />
      <main className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 border-b border-border pb-8"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-text-primary mb-6">Terms & Conditions</h1>
          <p className="text-base text-text-tertiary">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-text-secondary leading-relaxed font-sans space-y-12"
        >
          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Synapse OS platform ("Services"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the Services. These Terms form a binding legal agreement between you and Synapse OS.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">2. Description of Service</h2>
            <p>
              Synapse OS provides an observability and interception platform designed to monitor, manage, and secure enterprise AI agent swarms. The Services include dashboards, APIs, kill-switch mechanisms, and telemetry aggregation tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. You represent that the information you provide during registration is accurate and complete.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">4. Acceptable Use</h2>
            <p>
              Your use of the Services must comply with our <a href="/acceptable-use" className="text-primary hover:underline transition-colors font-medium">Acceptable Use Policy</a>. You agree not to use the Services for any unlawful purpose or in a manner that could damage, disable, or impair the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">5. Payment and Subscription Terms</h2>
            <p>
              Certain features of the Services require a paid subscription. By selecting a subscription plan, you agree to pay all applicable fees. Fees are non-refundable except as required by law or as explicitly stated in these Terms. We reserve the right to change our pricing upon providing notice to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Synapse OS and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use of the Services, even if we have been advised of the possibility of such damages. 
            </p>
            <p>
              Specifically, Synapse OS is not liable for actions taken by your autonomous agents or any failure of the kill-switch mechanism to prevent damages caused by poorly configured agent logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">7. Termination</h2>
            <p>
              We may suspend or terminate your access to the Services at any time, with or without cause, including for violations of these Terms or the Acceptable Use Policy. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in San Francisco, California.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the Services after such modifications constitutes your acceptance of the revised Terms.
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
