import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 8 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJyXsN/'

*5MB*
'https://alight.link/mXsELUk4WuaKhwaq5'

*XML*
'https://drive.google.com/file/d/15xPfzwQFjSypxvKKRACFercaiQYNxoSE/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p8)$/i
handler.limit = true

export default handler
