const Discord = require("discord.js")
const veri = require("../veriler.json")

exports.run = async (client, message, args) => {
message.channel.send('Pong!')
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};