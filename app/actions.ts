'use server'

export type DemoFormState = {
  success?: boolean
  error?: string
}

export async function sendDemoRequest(
  _prev: DemoFormState,
  formData: FormData,
): Promise<DemoFormState> {
  const name = formData.get('name') as string
  const company = formData.get('company') as string
  const email = formData.get('email') as string
  const phone = (formData.get('phone') as string) || '—'
  const message = (formData.get('message') as string) || '—'

  if (!name || !company || !email) {
    return { error: 'Please fill in all required fields.' }
  }

  const apiKey = process.env.MAILGUN_API_KEY
  const domain = 'supercfo.app'

  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; color: #1d1b20;">
      <div style="background: linear-gradient(135deg, #A855F7, #EC4899, #F97316); padding: 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">New Demo Request</h1>
        <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0;">SuperAgentK — superagentk.com</p>
      </div>
      <div style="background: #f8f7ff; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e6e0e9; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; font-weight: 600; width: 120px; color: #4f378a;">Name</td><td style="padding: 10px 0;">${name}</td></tr>
          <tr><td style="padding: 10px 0; font-weight: 600; color: #4f378a;">Company</td><td style="padding: 10px 0;">${company}</td></tr>
          <tr><td style="padding: 10px 0; font-weight: 600; color: #4f378a;">Email</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #A855F7;">${email}</a></td></tr>
          <tr><td style="padding: 10px 0; font-weight: 600; color: #4f378a;">Phone</td><td style="padding: 10px 0;">${phone}</td></tr>
        </table>
        ${message !== '—' ? `
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e6e0e9;">
          <p style="font-weight: 600; color: #4f378a; margin: 0 0 8px;">Message</p>
          <p style="margin: 0; line-height: 1.6; color: #494551;">${message}</p>
        </div>` : ''}
      </div>
    </div>
  `

  const body = new URLSearchParams({
    from: 'SuperAgentK <noreply@supercfo.app>',
    to: 'marcuschia01@gmail.com',
    'h:Reply-To': email,
    subject: `Demo Request — ${name} from ${company}`,
    html,
  })

  try {
    const res = await fetch(`https://api.mailgun.net/v3/${domain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('Mailgun error:', text)
      return { error: 'Failed to send. Please try again.' }
    }

    return { success: true }
  } catch (err) {
    console.error('Mailgun fetch error:', err)
    return { error: 'Failed to send. Please try again.' }
  }
}
