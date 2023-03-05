import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 6 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJDonb/'

*5MB*
'https://alight.link/XDQQJF2F6VQdYiTz5'

*XML*
'https://drive.google.com/file/d/14Xxd-h3ZjNZHqTTg09fb3lvVAGBtpKE8/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p6)$/i
handler.limit = true

export default handler
