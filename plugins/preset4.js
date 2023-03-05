import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 4 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJPaxs/'

*5MB*
'https://alight.link/xuMXGCqnuRoKMA8n9'

*XML*
'https://drive.google.com/file/d/140L1910Z0XzKhH8GNfZVtzbMx3chJxI4/view?us'
`.trim()
  m.reply(caption)
}

handler.command = /^(p4)$/i
handler.limit = true

export default handler
