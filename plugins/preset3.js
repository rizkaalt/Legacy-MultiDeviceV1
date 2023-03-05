import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 3 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJJ2Cu/'

*5MB*
'https://alight.link/L1zsCQog4pVbi4LN9'

*XML*
'https://drive.google.com/file/d/13xV_0OgnzhI-HbzCMXTlJVTMfIdLvlC1/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p3)$/i
handler.limit = true

export default handler
