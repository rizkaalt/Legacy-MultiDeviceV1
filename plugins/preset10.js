import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 10 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJY9FB/'

*5MB*
'https://alight.link/ZUAmbzQs12rMM1XQ8'


*XML*
'https://drive.google.com/file/d/16n_Sg8WzD9heT2yHSLngeDTQqhLjMugO/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p10)$/i
handler.limit = true

export default handler
