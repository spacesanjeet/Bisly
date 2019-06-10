const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kick a user with reason',
    execute(client, message, args) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Can't find the user!");
        let join = args.join(" ");
        let kReason = join.split(kUser).join(" ")
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");
    
        let kickEmbed = new RichEmbed()
        .setDescription("Member Kicked")
        .setColor("RANDOM")
        .addField("Kicked User:", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked by:", `${message.author} with ID ${message.author.id}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", kReason);
    
        message.guild.member(kUser).kick(kReason);
        message.channel.send(kickEmbed);
    },
};