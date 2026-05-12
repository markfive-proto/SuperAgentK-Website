'use client'

import { motion } from 'motion/react'
import { Bot, BarChart3, Search, MessageSquare, CheckSquare, Network, TrendingUp, Check } from 'lucide-react'
import Image from 'next/image'

const LogoBase64 = "data:image/png;base64,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";

const HeroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAUIbJqrPN72Ya_EQGS1ny2jgsIcNdRSct1Lk_WLFIo0NtfRw9K_BcrOJE7vxmRWZmbGS4NCzh4YHz7pbDFp4uopas1sZBA2XneRbUnm5dPKwozsoJ0Ot_-LJ2aoTyiKT3ePYC-NuFbmvbTfrFthCol-qc_kMM3iBhgcEQg2BuDHpznmMQe54y8I1LjPZVv8KED6bG3sgJjc068wSj8vcnjv0wCFGrdEOOzoTcmQ3FKASw2L56RV6AXpuVovoy4UZ2pV-2JBcp5iX0c";

export default function Home() {
  return (
    <div className="nature-bg min-h-screen overflow-x-hidden font-body">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-[32px] py-4 max-w-full bg-surface/70 backdrop-blur-2xl border-b border-white/10 shadow-sm">
        <div className="flex items-center gap-[8px]">
          <img alt="SuperAgentK Logo" className="w-10 h-10 object-contain" src={LogoBase64} />
          <span className="font-display text-[28px] font-extrabold text-primary md:text-[32px]">SuperAgentK</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a className="font-display text-[16px] text-primary font-bold border-b-2 border-primary transition-colors duration-300" href="#">Product</a>
          <a className="font-display text-[16px] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Solutions</a>
          <a className="font-display text-[16px] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Resources</a>
          <a className="font-display text-[16px] text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Pricing</a>
        </div>

        <div className="flex items-center gap-[24px]">
          <button className="text-on-surface-variant font-semibold hover:text-primary transition-colors">Login</button>
          <button className="gradient-btn px-6 py-2.5 rounded-full text-white font-bold hover:scale-95 transition-transform duration-200">
            Get Started
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
            className="font-body text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Your AI teammate that thinks ahead, takes action, and delivers results across every financial workflow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-[24px] justify-center items-center"
          >
            <button className="gradient-btn px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-95 transition-transform">
              Get Started Free
            </button>
            <button className="bg-white border border-outline/10 px-8 py-4 rounded-full text-primary font-bold text-lg hover:bg-surface-container-low transition-colors shadow-sm">
              Book a Demo
            </button>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 w-full max-w-6xl mx-auto relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 rounded-[48px] blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative glass-panel rounded-[40px] overflow-hidden p-4">
            <Image
              alt="AI Financial Agent Illustration"
              className="w-full h-auto rounded-[32px] object-cover"
              src={HeroImage}
              width={1200}
              height={675}
              priority
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-24 h-24 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 flex items-center justify-center shadow-xl"
            >
              <Bot className="text-primary w-12 h-12" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trusted By */}
      <div className="w-full py-12 px-[32px] flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
        {['GOLDMAN', 'STRIPE', 'REVOLUT', 'WISE', 'PLAIDS'].map((brand) => (
          <span key={brand} className="font-display text-2xl font-bold tracking-tighter">
            {brand}
          </span>
        ))}
      </div>

      {/* Features: Bento Grid */}
      <section className="py-[80px] px-[32px] max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[32px] font-bold text-primary mb-4 leading-[1.2] tracking-[-0.01em]">
            Built for every financial team
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Deploy specialized AI agents tailored to the unique rigors of enterprise finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <BarChart3 />
            </div>
            <h3 className="font-display text-xl font-bold">Data Analyst</h3>
            <p className="text-on-surface-variant text-sm">Real-time reconciliation and predictive forecasting for complex asset classes.</p>
          </div>

          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300 md:col-span-2">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                <Search />
              </div>
              <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-mono text-[10px] font-bold tracking-widest uppercase">
                Popular
              </span>
            </div>
            <h3 className="font-display text-xl font-bold">Researcher</h3>
            <p className="text-on-surface-variant text-sm max-w-md">Scans global markets, regulatory updates, and competitor filings to provide instant, actionable intelligence reports.</p>
          </div>

          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300 md:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <MessageSquare />
            </div>
            <h3 className="font-display text-xl font-bold">Communicator</h3>
            <p className="text-on-surface-variant text-sm max-w-md">Handles client inquiries and stakeholder updates with the precision of a CFO and the empathy of a partner.</p>
          </div>

          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <CheckSquare />
            </div>
            <h3 className="font-display text-xl font-bold">Task Manager</h3>
            <p className="text-on-surface-variant text-sm">Automates multi-step administrative workflows from invoice processing to payroll audits.</p>
          </div>

          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Network />
            </div>
            <h3 className="font-display text-xl font-bold">Integrator</h3>
            <p className="text-on-surface-variant text-sm">Connects seamlessly with SAP, Oracle, and Salesforce to bridge data silos across your organization.</p>
          </div>

          <div className="paper-card p-8 rounded-3xl flex flex-col gap-4 group hover:-translate-y-2 transition-transform duration-300 md:col-span-2">
            <div className="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center text-error group-hover:scale-110 transition-transform">
              <TrendingUp />
            </div>
            <h3 className="font-display text-xl font-bold">Strategist</h3>
            <p className="text-on-surface-variant text-sm max-w-md">Synthesizes all agent data into high-level strategic models, helping leadership plan for 10-year horizons with confidence.</p>
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
              <h2 className="font-display text-[32px] font-bold mb-6 leading-tight">
                One platform.<br />
                <span className="gradient-text">Endless possibilities.</span>
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                Say goodbye to fragmented tools. Our unified canvas brings your AI workforce and financial data into a single, beautiful workspace designed for calm capability.
              </p>
              <ul className="space-y-6">
                {['Universal Workflow Designer', 'Multi-Agent Orchestration', 'Secure Audit Trail Logging'].map((item) => (
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
              <div className="absolute -bottom-10 -right-10 w-40 h-40 group">
                <img alt="Floating Icon" className="w-full h-full object-contain animate-pulse" src={LogoBase64} />
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
            Join 500+ forward-thinking financial teams scaling with SuperAgentK.
          </p>
          <button className="gradient-btn px-10 py-5 rounded-full text-white font-bold text-xl hover:scale-105 transition-transform">
            Get Started Today
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
            <div className="flex items-center gap-[8px] mb-6">
              <img alt="Logo" className="w-8 h-8 opacity-80" src={LogoBase64} />
              <span className="font-display text-xl font-bold text-primary">SuperAgentK</span>
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
