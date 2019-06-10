module.exports = {
	name: 'feedback',
	description: 'gets feedback from users',
	execute(client, message, args) {
		if(!args.join(" ")) return message.channel.send("Specify a feedback please!");
		let feedback = args.join(" ");
		client.guilds.get("496197306882719755").channels.get("582068551633076231").send(`${feedback} by ${message.author.name} from ${message.guild.name}`);
	},
};

const { RichEmbed } = require('discord.js');
module.exports = {
	name: 'feedback',
	description: 'gets feedback from users',
	execute(client, message, args) {
		if(!args.join(" ")) return message.channel.send("Specify a feedback please!");
		let feedback = args.join(" ");
		let embed = new RichEmbed()
		.setTitle("Feedback")
		.setColor("#d8d80e")
		.setDescription(args.join(" "))
		.addField('Author:', message.author)
		.addField('From server:', message.guild.name)
		.setTimestamp(new Date())
		message.delete()
		message.channel.send("Your feedback has been sent to the developer!")
		client.guilds.get("496197306882719755").channels.get("582068551633076231").send(embed);
	},
};