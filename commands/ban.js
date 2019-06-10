const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban a user with reason',
    execute(client, message, args) {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find the user!");
        let join = args.join(" ")
        let bReason = join.split(bUser).join(" ")
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");
    
        let banEmbed = new RichEmbed()
        .setDescription("Member Banned")
        .setColor("RANDOM")
        .addField("Banned User:", `${bUser} with ID ${bUser.id}`)
        .addField("Banned by:", `${message.author} with ID ${message.author.id}`)
        .addField("Time:", message.createdAt)
        .addField("Reason:", bReason);
        //bUser.ban(bReason)
        message.guild.member(bUser.id).ban(bReason);
        message.channel.send(banEmbed);
    },
};