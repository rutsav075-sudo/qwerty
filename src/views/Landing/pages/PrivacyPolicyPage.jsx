import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-text-primary mb-6">Privacy Policy</h1>
          <p className="text-base text-text-tertiary">Last updated: {lastUpdated}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-text-secondary leading-relaxed font-sans space-y-12"
        >
          <section>
            <p>
              This Privacy Policy describes how Synapse OS ("we," "us," or "our") collects, uses, and shares information in connection with your use of our observability and interception platform, related websites, and services (collectively, the "Services").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information about you in the following ways:</p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li><strong className="text-text-primary font-medium">Account Information:</strong> When you register for an account, we collect your name, email address, password, company name, and billing information.</li>
              <li><strong className="text-text-primary font-medium">Usage and Telemetry Data:</strong> We automatically collect information about your interaction with the Services, including IP addresses, browser types, log data, and performance metrics.</li>
              <li><strong className="text-text-primary font-medium">Agent Swarm Trace Data:</strong> Our core service involves processing traces, logs, and outputs from your AI agents. This data is processed strictly to provide observability and interception capabilities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">2. Multi-Tenant Data Isolation</h2>
            <p>
              Synapse OS is built with strict multi-tenant data isolation. Trace data, agent prompts, and intercepted payloads from your organization's agent swarms are cryptographically separated from other tenants. We do not use your proprietary agent trace data to train foundational models or cross-pollinate insights to other customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">3. How We Use Information</h2>
            <p className="mb-4">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li>To provide, maintain, and improve the Services.</li>
              <li>To enforce our kill-switch and anomaly detection mechanisms.</li>
              <li>To process transactions and send related information, including confirmations and invoices.</li>
              <li>To send technical notices, updates, security alerts, and support messages.</li>
              <li>To respond to your comments, questions, and customer service requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">4. Third-Party Subprocessors</h2>
            <p className="mb-4">
              To provide our Services, we may share information with trusted third-party service providers (subprocessors). These include:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li><strong className="text-text-primary font-medium">Cloud Infrastructure & Database:</strong> ClickHouse Cloud (for high-speed telemetry storage), Supabase, and AWS.</li>
              <li><strong className="text-text-primary font-medium">Caching:</strong> Redis (for real-time neural roster state management).</li>
              <li><strong className="text-text-primary font-medium">LLM Providers:</strong> Anthropic, OpenAI, or Google (only if you opt-in to using our managed models for evaluation; otherwise, your data is processed locally within the VPC).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">5. Data Retention & Deletion</h2>
            <p>
              We retain account information for as long as your account is active. Agent trace data and telemetry are retained according to the retention window specified in your subscription tier (default is 30 days). Upon termination of your account, all associated trace data is permanently deleted from our active systems within 14 days, and from backups within 90 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">6. Your Privacy Rights</h2>
            <p>
              Depending on your location (such as the GDPR in Europe or the CCPA in California), you may have the right to request access to, correction of, or deletion of your personal information. You may also have the right to restrict or object to certain processing of your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="font-display font-medium text-text-primary">
              Email: <a href="mailto:privacy@synapseos.com" className="text-primary hover:underline transition-colors">privacy@synapseos.com</a>
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
