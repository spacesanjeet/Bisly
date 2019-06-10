const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'user',
  description: 'Shows userinfo',
  execute(client, message, args) {
        let member = message.mentions.users.first() || message.author;
        let id = client.users.get(member.id).id;
        let embed = new RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Here is ${member.username}'s info.`)
        .addField(`Name:`, member.username, true)
        .addField("Nickname:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true )
        .addField(`ID:`, member.id, true)
        .addField("CreatedAt:", member.createdAt, true)
        .addField("JoinedAt:", message.guild.members.get(member.id).joinedAt)
        .addField(`Bot:`, member.bot ? "Yes" : "No", true)
        .addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (message.guild.member(member).presence.game ) { message.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Roles : ", message.guild.members.get(id).roles.map(r => `<@&${r.id}>`).slice(1).join(", "))
        .setTimestamp(new Date())
        .setFooter(message.guild.name)
        message.channel.send(embed);
        },
};