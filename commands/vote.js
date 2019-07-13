const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'vote',
    description: 'Vote the bot.',
    execute(client, message, args) {
    	let embed = new RichEmbed()
    	.setTitle("Vote the bot here")
    	.setColor('#F70827')
    	.addField('Bisly on discordbot.org', '[• Here](https://discordbots.org/bot/496198253193461792/vote)')
    	.addField('Bisly on botsfordiscord.com', '[• Here](https://botsfordiscord.com/bot/496198253193461792/vote)')
    	.setTimestamp(new Date())
    	message.channel.send(embed)
    },
};
