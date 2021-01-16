const Discord = require("discord.js")
const veri = require("../veriler.json")

module.exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has(veri.admin) && !message.member.roles.cache.has(veri.yönetici)) return message.channel.send(`**Bu komutu sadece yetkililer kullanabilir**`).then(a => a.delete({ timeout: 3500 }))
  var user = message.mentions.users.first() || client.users.cache.get(args[0]);
  if (!user) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.tag,message.author.avatarURL({ dynamic: true }))
  .setThumbnail(user.avatarURL({ dynamic: true }))
  .setDescription(`**Kayıtsız rolüne atmak istediğin kullanıcıyı etiketlemelisin.**`))

  if (!message.guild.members.cache.get(user.id).roles.cache.has(veri.teyityetkilisi)) {
  message.guild.members.cache.get(user.id).roles.add(veri.teyityetkilisi)
  message.react(veri.kayıt)
  return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username,message.author.avatarURL({ dynamic: true })).setDescription(`
  ${user} Kayıt yetkisi geri alındı
  `)).then(e => e.delete({ timeout: 2400 }))
  } else { 
    message.guild.members.cache.get(user.id).roles.add(veri.teyityetkilisi)
    message.react(veri.kayıt)
    return message.channel.send(new Discord.MessageEmbed().setAuthor(message.author.username,message.author.avatarURL({ dynamic: true })).setDescription(`
    ${user} Kayıt görevlisi olarak atandı
    `)).then(e => e.delete({ timeout: 2400 }))
      
}
};

exports.config = {
  name: "kayıtyetki",
  guildOnly: true,
  aliases: ["kayıtyetkilisi", "kayıt-yetki", "kayıt-yetkilisi"],
};