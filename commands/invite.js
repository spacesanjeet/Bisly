const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'invite link of the bot',
	execute(client, message, args) {
		let embed = new RichEmbed()
		.setColor('RANDOM')
		.setTitle('Invite Link ❤')
		.setURL("https://discordapp.com/oauth2/authorize?client_id=561527177452060673&scope=bot&permissions=8")
		.setTimestamp(new Date())
		.setFooter('Requested by: ' + message.author.username)
		message.channel.send(embed)
	},
};