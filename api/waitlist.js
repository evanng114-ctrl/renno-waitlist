const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzM8gz4UNPwUe-SfrwPgfJglBixH32ELllm7_OhReOTT1n39Jv0k-5S2pBdeBNAct9TOg/exec'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { email } = req.body || {}
  if (!email) return res.status(400).json({ error: 'Email required' })

  const url = new URL(SCRIPT_URL)
  url.searchParams.set('email', email)

  let scriptRes
  try {
    scriptRes = await fetch(url.toString(), { redirect: 'follow' })
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
