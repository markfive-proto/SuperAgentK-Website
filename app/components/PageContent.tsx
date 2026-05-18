'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { Bot, BarChart3, Search, MessageSquare, CheckSquare, Network, TrendingUp, Check, Shield, Zap, CircleCheck, Landmark, Scale, ShoppingBag, Building2, Megaphone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import DemoModal from './DemoModal'



export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="nature-bg min-h-screen overflow-x-hidden font-body">
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[32px] py-4 max-w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <Image alt="SuperAgentK" src="/logo-icon-new.png" width={40} height={40} className="h-9 w-auto object-contain" />
          <span className="hidden sm:inline font-display text-[26px] font-extrabold tracking-tight">
            <span className="text-on-surface">SuperAgent</span><span className="gradient-text">K</span>
          </span>
        </div>

        <div className="flex items-center">
          <button onClick={() => setDemoOpen(true)} className="gradient-btn px-4 sm:px-6 py-2.5 rounded-full text-white font-bold text-sm sm:text-base hover:scale-95 transition-transform duration-200 whitespace-nowrap">
            Request a Demo
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
            className="font-display text-[48px] md:text-[64px] font-extrabold leading-[1.1] tracking-[-0.02em] mb-6"
          >
            AI Employees. <span className="gradient-text">Infinite Impact.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-6 leading-relaxed"
          >
            Your AI teammate that thinks ahead, takes action, and delivers results across every workflow.
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


      {/* AI Employees — unified section */}
      <section className="py-[80px] px-[32px]">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
          >
            <p className="text-on-surface-variant text-base">
              AI employees that understand your role and amplify your impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="flex flex-wrap gap-2 mb-2"
          >
            {['EPF', 'SOCSO', 'SST Submission', 'Payroll', 'Statutory'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-semibold">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold text-on-surface-variant mb-8 flex items-center gap-2"
          >
            <span className="text-primary">→</span>
            Let your digital Employee handle all the manual work for you.
          </motion.p>

          {/* Single card row */}
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-[32px] px-[32px] snap-x snap-mandatory scrollbar-hide">
            {[
              {
                title: 'Admin Assistant',
                desc: 'Handles scheduling, inbox management, document filing, data entry, and day-to-day admin so your team stays focused.',
                points: ['Email drafting & follow-ups', 'Calendar & meeting scheduling', 'Document management', 'Data entry & filing', 'Travel & expense coordination'],
                icon: <CheckSquare className="w-7 h-7" />,
              },
              {
                title: 'Finance & Accounting',
                desc: 'Runs your numbers — payroll, statutory submissions, reconciliation, and reporting — accurately and on time.',
                points: ['Payroll processing', 'EPF, SOCSO & SST submission', 'Bank reconciliation', 'Financial reporting', 'Budget variance tracking'],
                icon: <Landmark className="w-7 h-7" />,
              },
              {
                title: 'Audit & Compliance',
                desc: 'Keeps your business audit-ready — tracks obligations, reviews documents, and flags risks before they become problems.',
                points: ['Compliance monitoring', 'Audit trail documentation', 'Risk flagging', 'Regulatory deadline tracking', 'Policy & procedure review'],
                icon: <Scale className="w-7 h-7" />,
              },
              {
                title: 'Sales & CRM',
                desc: 'Nurtures leads, drafts proposals, updates your pipeline, and keeps every client conversation moving forward.',
                points: ['Lead follow-up & nurturing', 'Proposal & quote drafting', 'CRM data updates', 'Meeting summaries', 'Pipeline status reports'],
                icon: <TrendingUp className="w-7 h-7" />,
              },
              {
                title: 'eCommerce & Ops',
                desc: 'Keeps your store running — manages orders, stock, listings, fulfilment updates, and customer queries automatically.',
                points: ['Order processing & tracking', 'Inventory & stock alerts', 'Product listing updates', 'Fulfilment & courier coordination', 'Customer enquiry replies'],
                icon: <ShoppingBag className="w-7 h-7" />,
              },
            ].map(({ title, desc, points, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="snap-start flex-shrink-0 w-[240px] bg-[#f7f6fb] border border-outline-variant/30 rounded-2xl p-5 flex flex-col gap-3 group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                  <button className="w-7 h-7 rounded-full bg-white border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors text-xs">
                    ↗
                  </button>
                </div>
                <h3 className="font-display text-[17px] font-bold text-on-surface">{title}</h3>
                <p className="text-on-surface-variant text-[12px] leading-snug">{desc}</p>
                <ul className="space-y-1 mt-1">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-on-surface-variant text-[11px]">
                      <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
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
              <h2 className="font-display text-[32px] font-bold mb-4 leading-tight">
                One platform.<br />
                <span className="gradient-text">Endless possibilities.</span>
              </h2>
              <p className="text-on-surface-variant text-base mb-8 leading-relaxed">
                Build, host, and run everything your business needs — mini apps, automations, integrations, and AI agents — all under one roof without stitching tools together.
              </p>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Mini Apps for your business',
                    desc: 'Create and host custom mini apps tailored to your workflows — form builders, approval flows, dashboards — all within the same platform.',
                    icon: <Network className="w-5 h-5" />,
                  },
                  {
                    title: 'Scheduled Automations',
                    desc: 'Set agents to run on a schedule — daily reports, weekly summaries, monthly submissions — without any manual trigger.',
                    icon: <Check className="w-5 h-5" />,
                  },
                  {
                    title: 'Deep Integrations',
                    desc: 'Connect to your existing tools — accounting software, CRMs, ERPs, communication apps — and let agents work across all of them.',
                    icon: <Check className="w-5 h-5" />,
                  },
                  {
                    title: 'Browser Automation',
                    desc: 'Agents can navigate websites, fill forms, extract data, and complete web-based tasks just like a human would — hands-free.',
                    icon: <Check className="w-5 h-5" />,
                  },
                ].map(({ title, desc, icon }) => (
                  <li key={title} className="flex gap-4">
                    <span className="text-primary bg-primary/10 p-2 rounded-full h-fit mt-0.5 flex-shrink-0">
                      {icon}
                    </span>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">{title}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed mt-0.5">{desc}</p>
                    </div>
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
              {/* AgentK Platform UI Mockup */}
              <div className="rounded-[24px] overflow-hidden shadow-2xl border border-outline-variant/20 bg-white">

                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#f7f6fb] border-b border-outline-variant/20">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1 border border-outline-variant/20 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <span className="font-mono text-[10px] text-outline tracking-wide">agentk.platform</span>
                  </div>
                  <div className="w-16" />
                </div>

                <div className="flex h-[340px]">
                  {/* Sidebar */}
                  <div className="w-14 bg-[#f7f6fb] border-r border-outline-variant/15 flex flex-col items-center py-4 gap-4">
                    <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-white text-[11px] font-extrabold">K</span>
                    </div>
                    {[
                      <svg key="apps" viewBox="0 0 24 24" fill="none" className="w-4 h-4"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8"/></svg>,
                      <svg key="auto" viewBox="0 0 24 24" fill="none" className="w-4 h-4"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
                      <svg key="integ" viewBox="0 0 24 24" fill="none" className="w-4 h-4"><path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="19" cy="15" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>,
                      <svg key="browser" viewBox="0 0 24 24" fill="none" className="w-4 h-4"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M3 8h18" stroke="currentColor" strokeWidth="1.8"/><circle cx="6.5" cy="6" r="1" fill="currentColor"/><circle cx="9.5" cy="6" r="1" fill="currentColor"/></svg>,
                    ].map((icon, i) => (
                      <div key={i} className={`w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? 'bg-primary/10 text-primary' : 'text-outline hover:bg-primary/5 hover:text-primary'}`}>
                        {icon}
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 overflow-hidden bg-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold text-on-surface uppercase tracking-wider">My Apps</span>
                      <div className="flex items-center gap-1.5 bg-primary/8 text-primary rounded-full px-2.5 py-1 text-[10px] font-semibold cursor-pointer">
                        <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                        New App
                      </div>
                    </div>

                    {/* App grid */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: 'Invoice Form',     icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, status: 'Live', dot: 'bg-green-400' },
                        { label: 'Leave Approval',   icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8"/></svg>, status: 'Live', dot: 'bg-green-400' },
                        { label: 'KPI Dashboard',    icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M4 20h16M4 20V14M8 20V10M12 20V4M16 20V8M20 20V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, status: 'Live', dot: 'bg-green-400' },
                        { label: 'Expense Claim',    icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v2m0 6v2m-3-5h5.5a1.5 1.5 0 010 3H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, status: 'Draft', dot: 'bg-yellow-400' },
                        { label: 'SST Filing',       icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, status: 'Scheduled', dot: 'bg-primary' },
                        { label: '+ New',            icon: <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, status: '', dot: '' },
                      ].map(({ label, icon, status, dot }) => (
                        <div key={label} className={`rounded-xl border p-3 flex flex-col gap-2 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-sm ${label === '+ New' ? 'border-dashed border-outline-variant/40 items-center justify-center text-outline/50 h-[80px]' : 'border-outline-variant/20 bg-[#fafafa]'}`}>
                          {label === '+ New' ? (
                            <>{icon}<span className="text-[9px] font-medium">New App</span></>
                          ) : (
                            <>
                              <div className="text-primary">{icon}</div>
                              <span className="text-[10px] font-semibold text-on-surface leading-tight">{label}</span>
                              {status && (
                                <div className="flex items-center gap-1">
                                  <div className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                                  <span className="text-[9px] text-outline">{status}</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom status bar */}
                    <div className="mt-3 flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[10px] font-semibold text-primary">3 automations running</span>
                      </div>
                      <div className="h-3 w-px bg-primary/20" />
                      <span className="text-[10px] text-outline">2 integrations active</span>
                      <div className="h-3 w-px bg-primary/20" />
                      <span className="text-[10px] text-outline">Browser bot: idle</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[80px] px-[32px] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[32px] font-bold mb-6">Ready to expand your impact?</h2>
          <p className="text-on-surface-variant text-lg mb-10">
            Join forward-thinking teams already scaling with SuperAgentK.
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
              <Image alt="SuperAgentK" src="/logo-icon-new.png" width={32} height={32} className="h-8 w-auto object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">
                <span className="text-on-surface">SuperAgent</span><span className="gradient-text">K</span>
              </span>
            </div>
            <p className="text-on-surface-variant text-sm max-w-xs leading-relaxed">
              The AI employee platform for modern teams. Scaling impact through intelligent automation.
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
          <p>© 2026 SuperAgentK. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a className="hover:text-primary transition-colors underline decoration-2 underline-offset-4" href="#">Privacy</a>
            <a className="hover:text-primary transition-colors underline decoration-2 underline-offset-4" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
