const { RichEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'user',
    description: 'Get details about someone',
    guildOnly: true,
    aliases: ['userinfo', 'whois'],
    usage: '[mention]',
    cooldown: 3,
    execute(client, message, args) {
        let [id1] = args;
        let member = message.mentions.users.first() || client.users.get(id1) || message.author;
        var Created, Joined, Roles;
        if (member) {
            let id = client.users.get(member.id).id;
            let Joined_At = moment(message.guild.members.get(member.id).joinedAt);
            let Created_At = moment(member.createdAt);
            Joined = Joined_At.format('MMMM Do YYYY, h:mm:ss a');
            Created = Created_At.format('MMMM Do YYYY, h:mm:ss a');
            Roles = message.guild.members.get(id).roles.map(r => `<@&${r.id}>`).slice(1).join(", ");
        }
        let embed = new RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Here is ${member.username}'s info.`)
        .setDescription(`> ID: **${member.id}**
                > Tag: **${member.tag}**
                > Nickname: **${message.guild.member(member).nickname ? message.guild.member(member).nickname : "None"}**
                > Created At: **${Created}**
                > Joined At: **${Joined}**
                > Bot: **${member.bot ? "Yes" : "No"}**
                > Game: **${message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing"}**`)
        .addField(`**Roles**`, `${Roles ? Roles : "**No Roles**"}`)
        .setTimestamp(new Date())
        .setFooter(message.guild.name)
        message.channel.send(embed);
    },
};
