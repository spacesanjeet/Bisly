const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'report',
    description: 'Report someone with reason',
    guildOnly: true,
    usage: '[mentionUser, reason]',
    cooldown: 5,
    execute(client, message, args) {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Can't find the user!!");
        let reportsChannel = message.guild.channels.find(c => c.name.match(/reports/g))
        if(!reportsChannel) return message.channel.send("Can't find a reports channel!!");
        let join = args.join(" ");
        let reason = join.split(rUser).join(" ");

        let embed = new RichEmbed()
        .setTitle("Report")
        .setColor("RANDOM")
        .addField("Reported user:", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel:", `${message.channel}`)
        .addField("Time:", `${message.createdAt}`)
        .addField("Reason:", reason);

        message.delete().catch(O_o=>{});
        reportsChannel.send(embed);
        message.channel.send("The report has been sent!!");
    },
};
