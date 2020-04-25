module.exports = {
    name: 'ban',
    description: 'Use ban hammer on someone',
    guildOnly: true,
    usage: '[mention reason(optional)]',
    cooldown: 5,
    async execute(client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Can't find that user!");
        if(!bUser.bannable) return message.channel.send("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");
        let bReason = args.slice(1).join(' ');
        if(!bReason) bReason = "No reason provided";
        await bUser.ban(bReason)
            .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
        message.channel.send(`${bUser.user.tag} has been banned by **${message.author.tag}** because of **${bReason}**`);
    },
};
