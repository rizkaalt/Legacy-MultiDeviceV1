let handler = async (m, { conn, usedPrefix }) => { 
      conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 9999999,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
Maaf Kak Jika Kami Merepotkan Kakak, Tapi Tolong Bantu Developer Bot Agar Bisa Mengembangkan Fitur² Baru Dengan Cara Membantu Donasi Seikhlasnya>.<

Donasi Bisa Lewat Sini: https://saweria.co/RullZY`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler