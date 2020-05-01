const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'sicon',
	description: 'Get the server/guild icon',
  guildOnly: true,
	aliases: ['servericon', 'icon'],
  usage: '[command]',
  cooldown: 5,
  execute(client, message, args) {
    	let embed = new RichEmbed()
    	.setColor("#F70827")
    	.setImage(message.guild.iconURL + '?size=2048')
    	.setFooter(message.guild.name)
    	message.channel.send(embed)
    },
};
