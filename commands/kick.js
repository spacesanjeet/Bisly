const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick a user with reason',
    async execute(client, message, args) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find that user!");
        if(!kUser.kickable) return message.channel.send("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
        let kReason = args.slice(1).join(' ');
        if(!kReason) kReason = "No reason provided";
        await kUser.kick(kReason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
        message.channel.send(`**${kUser.user.tag}** has been kicked by **${message.author.tag}** because of **${kReason}**`);
    },
};
