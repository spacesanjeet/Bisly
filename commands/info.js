const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    description: 'get info about the bot',
    execute(client, message, args) {
    	let embed = new RichEmbed()
    	.setTitle("Bisly v2.0.2")
    	.setColor('#F70827')
    	.setDescription(`Bisly is a general purpose discord bot which is developed with the view of performing all general tasks in mind.\n
    	The bot contains commands for **Fun**, **Moderation**, **Misc** and **General** tasks.\n
        In this update, the bot is added up with a GIF command.`)
    	.addField("Webpage:", "https://bisly.glitch.me")
    	.addField("Github repository:", "[Bisly on Github](https://github.com/spacesanjeet/Bisly)")
    	.setFooter("spacesanjeet#1363")
    	message.channel.send(embed)
	},
};
