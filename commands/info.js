const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Providing some useful information about myself',
    guildOnly: true,
    aliases: ['about', 'bot'],
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        let embed = new RichEmbed()
        .setTitle("Bisly 3.0.0")
        .setColor('#F70827')
        .setDescription(`Bisly is a general purpose discord bot which is developed with the view of performing all general tasks in mind.\n
        The bot contains commands for **Fun**, **Moderation**, **Misc** and **General** tasks.\n
        In this update the source code has been rewritten completely. For further changes, consider checking the Bisly's Github.`)
        .addField("Development Server: ", "[Bisly's Home](https://discord.gg/B83ScTT)")
        .addField("Webpage:", "[BislyWeb](https://bisly.glitch.me)")
        .addField("Github repository:", "[Bisly on Github](https://github.com/spacesanjeet/Bisly)")
        .setFooter("spacesanjeet#1363")
        message.channel.send(embed)
    },
};
