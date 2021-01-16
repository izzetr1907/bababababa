const Discord = require("discord.js")
const veri = require("../veriler.json")
const data = require('wio.db')

exports.run = async (client, message, args) => {
var üye = message.mentions.users.first() || client.users.cache.get(args[0])
var isim = args.slice(1).join(" | ")
if (!üye) return message.channel.send(`**Lütfen bir kullanıcı etiketleyiniz.**`)
if (!isim) return message.channel.send(`**Lütfen bir isim belirt.**`)
message.guild.members.cache.get(üye.id).setNickname(`${veri.tag} ${isim}`)
message.guild.members.cache.get(üye.id).roles.add(veri.erkekrol)
message.guild.members.cache.get(üye.id).roles.remove(veri.unreg)
message.guild.members.cache.get(üye.id).roles.remove(veri.cezalı)
data.add(`erkekSayi_${message.author.id}`, 1)
data.add(`teyitTop_${message.author.id}`, 1)
return message.react(veri.kayıt)
};

exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: [],
};