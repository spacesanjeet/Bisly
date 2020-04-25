const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite link of the bot',
    guildOnly: true,
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        let embed = new RichEmbed()
        .setColor('RANDOM')
        .setTitle('Invite Link ❤')
        .setURL("https://discordapp.com/oauth2/authorize?client_id=496198253193461792&scope=bot&permissions=93399")
        .setTimestamp(new Date())
        .setFooter('Requested by: ' + message.author.username)
        message.channel.send(embed)
    },
};
