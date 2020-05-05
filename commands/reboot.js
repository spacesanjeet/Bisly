const token = process.env.TOKEN;
const id = process.env.OwnerID;

module.exports = {
  name: "reboot",
  description: "Reloads the bot",
  guildOnly: true,
  aliases: ["reset", "logout"],
  cooldown: 3,
  execute(client, message, args) {
    if (!message.author.id == id) return message.channel.send(`You can't use this command!`);
    client.destroy();
    client.login(token);
    message.channel.send(`Rebooted successfully. API latency is ${Math.round(client.ping)}ms`);
  },
};
