const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_JdWzAM2TAND8Z1PfO8JjvKrHYx7RfK-dMcT-gOpK5KImgrfbphLiyyrrEx_XLfw-rg/exec'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body || {}
  if (!email) return res.status(400).json({ error: 'Email required' })

  await fetch(`${SCRIPT_URL}?email=${encodeURIComponent(email)}`)
  res.status(200).json({ success: true })
}
