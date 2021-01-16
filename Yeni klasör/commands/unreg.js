const Discord = require("discord.js")
const veri = require("../veriler.json")

module.exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has(veri.teyityetkilisi)) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir**`).then(a => a.delete({ timeout: 3500 }))
  var user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.channel.send(`Kayıtsız rolüne atmak istediğin kullanıcıyı belirtmelisin.`)

  message.guild.members.cache.get(user.id).setNickname(veri.tag + ` İsim | Yaş`)
  client.channels.cache.get(veri.hgkanal).send(`<a:star_kustum:799267682599698463> ${user} İsimli kullanıcı ${message.author} İsimli yetkili tarafından kayıtsız'a gönderildi.`).then(a => a.delete({ timeout: 10000}))
  return message.react(veri.kayıt)
};

exports.config = {
  name: "unreg",
  guildOnly: true,
  aliases: ["kayıtsız", "unregister", "un-register"],
};