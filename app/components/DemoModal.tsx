'use client'

import { useActionState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, Loader2, CheckCircle2 } from 'lucide-react'
import { sendDemoRequest, type DemoFormState } from '../actions'

const initialState: DemoFormState = {}

export default function DemoModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [state, action, pending] = useActionState(sendDemoRequest, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Reset form on new open
  useEffect(() => {
    if (open) formRef.current?.reset()
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden">
              {/* Header */}
              <div className="gradient-btn px-8 py-6 flex justify-between items-start">
                <div>
                  <h2 className="font-display text-2xl font-extrabold text-white">Request a Demo</h2>
                  <p className="text-white/80 text-sm mt-1">We'll get back to you within 24 hours.</p>
                </div>
                <button onClick={onClose} className="text-white/70 hover:text-white transition-colors mt-0.5">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8">
                {state.success ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center py-6 gap-4"
                  >
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                    <h3 className="font-display text-xl font-bold text-on-surface">You're on the list!</h3>
                    <p className="text-on-surface-variant">We've received your request and will be in touch shortly.</p>
                    <button
                      onClick={onClose}
                      className="mt-2 gradient-btn px-8 py-3 rounded-full text-white font-bold hover:scale-95 transition-transform"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <form ref={formRef} action={action} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Name *</label>
                        <input
                          name="name"
                          required
                          placeholder="Ahmad Zaki"
                          className="px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Company *</label>
                        <input
                          name="company"
                          required
                          placeholder="Acme Sdn Bhd"
                          className="px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Work Email *</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Phone <span className="normal-case font-normal">(optional)</span></label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+60 12 345 6789"
                        className="px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Message <span className="normal-case font-normal">(optional)</span></label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us about your team and what you'd like to automate..."
                        className="px-4 py-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                      />
                    </div>

                    {state.error && (
                      <p className="text-error text-sm">{state.error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={pending}
                      className="gradient-btn mt-2 py-4 rounded-full text-white font-bold text-base hover:scale-95 transition-transform disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-2"
                    >
                      {pending ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                      ) : (
                        'Send Request →'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
