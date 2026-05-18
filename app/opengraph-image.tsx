import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SuperAgentK — AI Employees for Every Business'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #1a0533 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gradient orbs */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%)', display: 'flex' }} />

        {/* Logo + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: 'linear-gradient(135deg, #A855F7, #EC4899, #F97316)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ color: 'white', fontSize: 28, fontWeight: 900 }}>K</span>
          </div>
          <span style={{ color: 'white', fontSize: 32, fontWeight: 800, letterSpacing: '-0.5px' }}>
            SuperAgent<span style={{ background: 'linear-gradient(135deg, #A855F7, #EC4899, #F97316)', WebkitBackgroundClip: 'text', color: 'transparent' }}>K</span>
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
          <span style={{ color: 'white', fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px' }}>
            AI Employees.
          </span>
          <span style={{
            fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #F97316 100%)',
            WebkitBackgroundClip: 'text', color: 'transparent', display: 'flex',
          }}>
            Infinite Impact.
          </span>
        </div>

        {/* Subtext */}
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 22, lineHeight: 1.5, maxWidth: 680, margin: 0 }}>
          Admin, Payroll, EPF, SOCSO, SST, Compliance, Sales & more — handled by your dedicated AI workforce.
        </p>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
          {['EPF / SOCSO', 'SST Submission', 'Payroll', 'Browser Automation', 'Integrations'].map((tag) => (
            <div key={tag} style={{
              padding: '8px 18px', borderRadius: 99,
              border: '1px solid rgba(168,85,247,0.4)',
              background: 'rgba(168,85,247,0.1)',
              color: 'rgba(255,255,255,0.8)', fontSize: 14, fontWeight: 600,
              display: 'flex',
            }}>
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: 48, right: 80, color: 'rgba(255,255,255,0.35)', fontSize: 16, display: 'flex' }}>
          superagentk.com
        </div>
      </div>
    ),
    { ...size },
  )
}
