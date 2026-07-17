import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

export default function AcceptableUsePage() {
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-text-primary mb-6">Acceptable Use Policy</h1>
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
              This Acceptable Use Policy ("AUP") outlines the acceptable and prohibited uses of the Synapse OS platform. By using our Services, you agree to abide by this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">1. Prohibited Activities</h2>
            <p className="mb-4">You agree not to use the Services to:</p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li>Engage in any unlawful, fraudulent, or malicious activity.</li>
              <li>Deploy autonomous agents that violate the terms of service of third-party platforms (e.g., scraping, spamming, or bypassing CAPTCHAs unlawfully).</li>
              <li>Distribute malware, viruses, or any other harmful code.</li>
              <li>Attempt to reverse engineer, decompile, or extract the source code of the Synapse OS platform.</li>
              <li>Infringe upon the intellectual property rights or privacy rights of others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">2. Swarm Control & Safety</h2>
            <p className="mb-4">Given the nature of autonomous agent swarms, you must adhere to strict safety protocols:</p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li><strong className="text-text-primary font-medium">Kill-Switch Integrity:</strong> You must not attempt to bypass, disable, or circumvent the Synapse OS kill-switch or human-in-the-loop approval mechanisms.</li>
              <li><strong className="text-text-primary font-medium">Safety Controls:</strong> You are strictly prohibited from designing agents that actively seek to evade observability traces or mask their underlying API payloads.</li>
              <li><strong className="text-text-primary font-medium">Testing:</strong> High-risk agent swarms (e.g., financial execution, production infrastructure modification) must be tested in a sandbox environment before being granted live execution capabilities via Synapse OS.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">3. API Abuse & Rate Limits</h2>
            <p className="mb-4">
              You agree to respect the rate limits associated with your subscription tier. You may not:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li>Generate excessive load on the Synapse OS infrastructure beyond your allocated capacity.</li>
              <li>Use automated means (other than standard telemetry ingestion) to rapidly scrape the Synapse OS dashboard or APIs.</li>
              <li>Intentionally execute denial-of-service (DoS) attacks against our ingestion endpoints.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">4. Consequences of Violation</h2>
            <p className="mb-4">
              Violation of this AUP may result in immediate action, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text-secondary marker:text-text-tertiary">
              <li>Temporary suspension of your account and API keys.</li>
              <li>Permanent termination of your access to the Services.</li>
              <li>Reporting of illegal activities to relevant law enforcement authorities.</li>
            </ul>
            <p className="mt-4">
              Synapse OS reserves the right to determine, in its sole discretion, whether a violation has occurred.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-medium text-text-primary mb-4">5. Reporting Abuse</h2>
            <p className="mb-4">
              If you become aware of any violation of this AUP, or if you discover a security vulnerability, please report it to us immediately at:
            </p>
            <p className="font-display font-medium text-text-primary">
              Email: <a href="mailto:abuse@synapseos.com" className="text-primary hover:underline transition-colors">abuse@synapseos.com</a>
            </p>
          </section>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
