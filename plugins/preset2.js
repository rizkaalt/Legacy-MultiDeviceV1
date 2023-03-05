import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 2 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJfE2n/'

*XML*
'https://drive.google.com/file/d/12dfge5mrwNC9yK3YzfBWd-mAmjG70woE/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}


handler.command = /^(p2)$/i
handler.limit = true

export default handler
