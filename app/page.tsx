'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import Image from 'next/image'
import DemoModal from './components/DemoModal'



export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="nature-bg min-h-screen overflow-x-hidden font-body">
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[32px] py-4 max-w-full bg-surface/70 backdrop-blur-2xl border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-2">
          <Image alt="K" src="/logo-icon.png" width={40} height={40} className="h-10 w-auto object-contain" />
          <span className="font-display text-[20px] sm:text-[26px] font-extrabold tracking-tight whitespace-nowrap">
            <span className="text-on-surface">SuperAgent</span><span className="gradient-text">K</span>
          </span>
        </div>

        <div className="flex items-center gap-[24px] flex-shrink-0">
          <button onClick={() => setDemoOpen(true)} className="gradient-btn px-3 sm:px-6 py-2.5 rounded-full text-white font-bold text-sm sm:text-base hover:scale-95 transition-transform duration-200 whitespace-nowrap">
            <span className="sm:hidden">Demo</span>
            <span className="hidden sm:inline">Request a Demo</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-[80px] px-[32px] flex flex-col items-center text-center">
        <div className="max-w-4xl mx-auto z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[28px] sm:text-[44px] md:text-[64px] font-extrabold leading-[1.15] tracking-[-0.02em] mb-6"
          >
            Cultivate AI Literacy, One Hire at a Time.<br className="hidden sm:block" />Start with your first <span className="gradient-text">AI teammate.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Train your AI employee to take over tasks, while your human workforce masters prompt engineering and unlocks new ways to innovate.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button onClick={() => setDemoOpen(true)} className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-95 transition-transform">
              Request a Demo
            </button>
          </motion.div>
        </div>

        {/* Hero image below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 w-full max-w-6xl mx-auto relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 rounded-[48px] blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000" />
          <div className="relative glass-panel rounded-[40px] overflow-hidden p-4">
            <Image
              alt="AI Financial Agent"
              src="/hero.png"
              width={1792}
              height={1024}
              priority
              className="w-full h-auto rounded-[32px] object-cover"
            />
          </div>
        </motion.div>
      </section>


      {/* Dashboard Preview */}
      <section className="py-[80px] px-[32px] bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-[32px] font-bold mb-6 leading-tight">
                One platform.<br />
                <span className="gradient-text">Endless possibilities.</span>
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Say goodbye to fragmented tools. Our unified canvas brings your AI workforce and financial data into a single, beautiful workspace designed for calm capability.
              </p>
              <ul className="space-y-6">
                {['Build Mini-Apps & Skills', 'Scheduled Task Automation', 'Built-in Hosted Databases'].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="text-primary bg-primary/10 p-2 rounded-full">
                      <Check className="w-5 h-5" />
                    </span>
                    <span className="font-semibold text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-panel p-6 rounded-[32px] shadow-2xl border border-white/60">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-error/40"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                    <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                  </div>
                  <div className="bg-white/80 rounded-full px-4 py-1 font-mono text-[10px] font-bold text-outline uppercase tracking-widest">
                    Live Operations
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="paper-card p-4 rounded-2xl">
                    <span className="font-mono text-[10px] text-outline font-bold uppercase mb-2 block">Revenue Audit</span>
                    <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden mb-2">
                      <div className="h-full bg-primary w-[85%] rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold text-primary">85% Complete</span>
                  </div>
                  <div className="paper-card p-4 rounded-2xl bg-secondary-container/10">
                    <span className="font-mono text-[10px] text-outline font-bold uppercase mb-2 block">Agent Insights</span>
                    <p className="text-[11px] leading-snug font-medium">Predicted 12% drift in OpEx for Q4. Action recommended.</p>
                  </div>
                  <div className="paper-card p-4 rounded-2xl col-span-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] text-outline font-bold uppercase">Cash Flow Velocity</span>
                      <span className="text-xs font-bold text-green-600">+14.2%</span>
                    </div>
                    <div className="h-20 flex items-end gap-1">
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-[40%]"></div>
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-[60%]"></div>
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-[45%]"></div>
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-[70%]"></div>
                      <div className="flex-1 bg-primary/20 rounded-t-sm h-[90%]"></div>
                      <div className="flex-1 bg-primary rounded-t-sm h-[100%] shadow-[0_-4px_10px_rgba(79,55,138,0.3)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Logos */}
      <section className="py-[80px] px-[32px]">
        <div className="max-w-7xl mx-auto">

          {/* Government Submission Portals */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-3">Trained for</p>
            <h2 className="font-display text-[28px] font-bold mb-10 leading-tight">
              Government submission <span className="gradient-text">portals.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: 'SST Submission', src: '/mysst.jpg' },
                { name: 'EPF Submission', src: '/kwsp.svg' },
                { name: 'SOCSO EIS', src: '/perkeso.png' },
                { name: 'Withholding Tax', src: '/mytax.png' },
                { name: 'HRDC', src: '/hrdc.svg' },
              ].map(({ name, src }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="paper-card rounded-2xl p-5 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                >
                  <div className="h-14 flex items-center justify-center w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={name} className="max-h-14 max-w-full object-contain" />
                  </div>
                  <span className="text-[11px] font-semibold text-on-surface-variant text-center leading-tight">{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Accounting Software Integrations */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-3">Integrated with</p>
            <h2 className="font-display text-[28px] font-bold mb-10 leading-tight">
              Your existing <span className="gradient-text">accounting stack.</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
              {[
                { name: 'AutoCount Cloud', src: 'https://th.autocountcloud.com/images/cloud-acc-logo2.png', dark: false },
                { name: 'AutoCount On-Premise', src: '/autocount-onprem.jpg', dark: false },
                { name: 'SQL Accounting Cloud', src: 'https://cdn.sql.com.my/wp-content/uploads/2019/03/cropped-5b4bbf0471d0991c9a36f576_sql-logo-white-less-1-300x89.png', dark: true },
                { name: 'Bukku', src: 'https://aitraining2u.bukku.my/assets/img/logo/logo-landscape-light.png', dark: false },
              ].map(({ name, src, dark }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-6 flex flex-col items-center gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${dark ? 'bg-gray-800' : 'paper-card'}`}
                >
                  <div className="h-12 flex items-center justify-center w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={name} className="max-h-12 max-w-full object-contain" />
                  </div>
                  <span className={`text-[11px] font-semibold text-center leading-tight ${dark ? 'text-gray-300' : 'text-on-surface-variant'}`}>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[80px] px-[32px] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[32px] font-bold mb-6">Ready to expand your impact?</h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Join 500+ forward-thinking financial teams scaling with SuperAgentK.
          </p>
          <button onClick={() => setDemoOpen(true)} className="gradient-btn px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-transform">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-[32px] flex flex-col items-center gap-[8px] bg-surface-container-lowest relative pt-[80px] pb-[8px] border-t border-outline-variant/20 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none -z-10 overflow-hidden flex items-end justify-between">
          <div className="w-64 h-64 bg-green-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          <div className="w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mb-20"></div>
        </div>
        <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-[24px] mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image alt="K" src="/logo-icon.png" width={32} height={32} className="h-8 w-auto object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">
                <span className="text-on-surface">SuperAgent</span><span className="gradient-text">K</span>
              </span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
              The intelligence layer for the modern financial enterprise. Scaling impact through AI teammates.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-on-surface">Product</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Agents</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-on-surface">Company</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-on-surface">Legal</h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full max-w-7xl border-t border-outline-variant/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center text-[12px] text-on-surface-variant opacity-80 font-medium">
          <p>© 2024 SuperAgentK. Infinite Impact for Financial Teams.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-primary transition-colors underline decoration-2 underline-offset-4" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors underline decoration-2 underline-offset-4" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
