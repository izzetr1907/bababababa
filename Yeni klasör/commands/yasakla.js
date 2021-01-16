const Discord = require("discord.js")
const veri = require("../veriler.json")
const db = require("wio.db")
exports.run = async (client, message, args) => {
if (!message.member.roles.cache.has(veri.banyetki) && !message.member.roles.cache.has(veri.yönetici) && !message.member.roles.cache.has(veri.admin) && !message.member.hasPermission("ADMINISTRATOR")) return message.react(veri.red) 
  var kişi = message.mentions.users.first() || client.users.cache.get(args[0])
var sbp = args.slice(1).join(" ");
if (!kişi) return message.channel.send(`Lütfen bir kişi etiketleyiniz.`)
if (!sbp) return message.channel.send(`Lütfen ban sebebinizi yazın.`)
message.guild.members.cache.get(kişi.id).ban({ reason: sbp })
db.add(`banSayi_${message.author.id}`, 1)
db.set(`sonBan_${message.author.id}`, kişi.id)
var topban = db.fetch(`banSayi_${message.author.id}`)

return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.avatarURL({ dynamic: true }))
.addField("Toplam Ban", topban, true)
.addField("Ban Sebep", sbp, true)
)
};

exports.config = {
  name: "yasakla",
  guildOnly: true,
  aliases: ["ban"],
};