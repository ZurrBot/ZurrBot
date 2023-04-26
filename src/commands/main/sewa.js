export default {
    name: "sewa",
    type: 'main',
    desc: "list harga sewa :D",
    aliases: ["buypremium", "donasi", "buyvip", "sewa", "sewabot","rent"],
    execute: async ({ ZurrBot, m, command }) => {
        let text = `
${!/donate|donasi/i.test(command) ? `⭔ *Harga Premium :*

- Rp. 20.000 / $ 1,40 (30 day) 
- Rp. 35.000 / $ 2,40 (50 day)
- Rp. 55.000 / $ 3,70 (70 day)
- Rp. 85.000 / $ 5,30 (100 day)

⭔ *Harga Sewa :*

- Rp. 30k / $ 2 (30 day)
- Rp. 45k / $ 3 (50 day)
- Rp. 65k / $ 4,30 (70 day)
- Rp. 95k / $ 6,30 (100 day)

Untuk Pembayaran Melalui Pulsa +5k / $ 0,40

- Shopeepay : 081211037493
- Dana : 081211037493
- Saweria : https://saweia.com/ZurrMD
- Paypal : https://paypal.com/paypalme/ZurrZxynn
- ko-fi : https://ko-fi.com/Zurrbot
- Pulsa : https://github.com/DikaArdnt/Hisoka-Morou

Jika kamu menyewa bot maka kamu akan mendapatkan akses premium selama masa penyewaan :p

Untuk detail chat owner https://wa.me/6281211037493` : `Kalo mau Donasi kirim lewat sini aja :) :

- Shopeepay : 081211037493
- Dana : 081211037493
- Saweria : https://saweria.co/ZurrMD
- Paypal : https://paypal.com/paypalme/ZurrZxynn
- ko-fi : https://ko-fi.com/ZurrBot
- Pulsa : 081211037493

Minat Premium? https://wa.me/6281211037493?text=Min%20Info%20Premium`}
        `
        hisoka.sendMessage(m.from, "./temp/qris-hisoka.jpeg", { quoted: m, caption: text })
    }
}
