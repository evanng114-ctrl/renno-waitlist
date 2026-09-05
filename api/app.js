const APP_ID = '6781789465'
const STORE_PATH = `apps.apple.com/us/app/renno-run/id${APP_ID}`

export default function handler(req, res) {
  const ua = req.headers['user-agent'] || ''
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  const target = isIOS ? `itms-apps://${STORE_PATH}` : `https://${STORE_PATH}`

  res.setHeader('Cache-Control', 'no-store')
  res.writeHead(302, { Location: target })
  res.end()
}
