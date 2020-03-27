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
      .setColor("#000000")
    	.setImage(message.guild.iconURL + '?size=2048')
    	.setFooter(message.guild.name)
    	message.channel.send(embed)
    },
};
