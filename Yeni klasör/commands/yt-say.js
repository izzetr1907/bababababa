const Discord = require("discord.js")
const veri = require("../veriler.json")

exports.run = async (client, message, args) => {
    let roller = message.guild.members.cache.filter(x => {
                return x.roles.cache.has("797540846223360020") && !x.voice.channel && x.user.presence.status !== "offline"
                  }).size
};

exports.config = {
  name: "yt-say",
  guildOnly: true,
  aliases: ["yetkili-say", "ytsay", "yt"],
};