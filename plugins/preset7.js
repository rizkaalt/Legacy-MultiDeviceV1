import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 7 」*
*VIDEO* 'https://vt.tiktok.com/ZS8MJRJsb/'

*5MB*
'https://alight.link/g7cbFdnG5qg8dptH6'

*XML*
'https://drive.google.com/file/d/14srD9QgfCfT8x6AR4hetrHWl1U972afE/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p7)$/i
handler.limit = true

export default handler
