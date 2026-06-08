const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeVSlRVfZhQcgXyg5jz8gTjye4bxixi23AWAgj0fhqkXXlXS-x5j7o5T7hL6ebGK1u1A/exec'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body || {}
  if (!email) return res.status(400).json({ error: 'Email required' })

  let scriptRes
  try {
    scriptRes = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
  } catch (err) {
    console.error('Apps Script fetch failed:', err)
    return res.status(502).json({ error: 'Failed to reach Google Sheets' })
  }

  if (!scriptRes.ok) {
    const body = await scriptRes.text().catch(() => '')
    console.error('Apps Script returned', scriptRes.status, body)
    return res.status(502).json({ error: 'Google Sheets script error' })
  }

  res.status(200).json({ success: true })
}
