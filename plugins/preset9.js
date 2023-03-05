import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 9 」*
*VIDEO* : 'https://vt.tiktok.com/ZS8MJJYTu/'

*5MB*
'https://alight.link/Nq5LcRqHQ7hnNpUB6'

*XML*
'https://drive.google.com/file/d/15ytBTYzuQkwjRgO7aPLfc8cyuOftFdLf/view?usp=drivesdk'
`.trim()
  m.reply(caption)
}

handler.command = /^(p9)$/i
handler.limit = true

export default handler
