import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 5 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJBG4b/'

*5MB*
'https://alight.link/q6yXp7bzh4SRccFm8'

*XML*
'https://drive.google.com/file/d/14ChNho959g6CFlq1r2Ca5WhXfaN8p-lH/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p5)$/i
handler.limit = true

export default handler
