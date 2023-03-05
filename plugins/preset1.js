import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 1 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJeehx/'

*XML*
'https://drive.google.com/file/d/12Xkj5Ivf5qhz1uXA9QG31EaJERww8Gqm/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p1)$/i
handler.limit = true

export default handler
