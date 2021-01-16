const Discord = require("discord.js")
const veri = require("../veriler.json")
const data = require('wio.db')

exports.run = async (client, message, args) => {
var üye = message.mentions.users.first() || client.users.cache.get(args[0])
var isim = args.slice(1).join(" | ")
if (!üye) return message.channel.send(`**Lütfen bir kullanıcı etiketle yada ID'sini gir.**`)
if (!isim) return message.channel.send(`**Lütfen bir isim belirt.**`)

data.add(`kızSayi_${message.author.id}`, 1)
data.add(`teyitTop_${message.author.id}`, 1)


   message.react("800088634233585674");
   message.react("800088634640171018");
  let filter = (reaction, user) =>
    ["800088634233585674", "800088634640171018"].includes(reaction.emoji.id) && !user.bot && user.id === message.author.id;
  let reactions = message.awaitReactions(filter, {
    max: 1,
    time: 15000,
    errors: ["time"]
  });
  let choice = reactions.get("800088634233585674") || reactions.get("800088634640171018");
  if (choice.emoji.id === "800088634233585674") {
    message.reactions.removeAll();
    message.react(veri.kayıt)
    message.guild.members.cache.get(üye.id).setNickname(`${veri.tag} ${isim}`)
    message.guild.members.cache.get(üye.id).roles.add(veri.erkekrol)
    message.guild.members.cache.get(üye.id).roles.remove(veri.unreg)
    message.guild.members.cache.get(üye.id).roles.remove(veri.cezalı)
  }

  if (choice.emoji.id === "800088634640171018") {
    message.reactions.removeAll();
    message.react(veri.kayıt)
    message.guild.members.cache.get(üye.id).setNickname(`${veri.tag} ${isim}`)
    message.guild.members.cache.get(üye.id).roles.add(veri.kızrol)
    message.guild.members.cache.get(üye.id).roles.remove(veri.unreg)
    message.guild.members.cache.get(üye.id).roles.remove(veri.cezalı)
  }
};

exports.config = {
  name: "kayıt",
  guildOnly: true,
  aliases: ["k", "teyit"],
};