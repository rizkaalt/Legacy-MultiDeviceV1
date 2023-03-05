let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk, Jan ngemis deck'
  if (isAdmin) throw 'Stress udah jadi admin ngen'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.help = ['📌']
handler.tags = ['group']
handler.command = /^📌$/i

handler.rowner = true
handler.botAdmin = true
handler.group = true

export default handler 
