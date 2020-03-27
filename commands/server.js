const { RichEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'server',
	description: 'Get server/guild info',
    guildOnly: true,
	aliases: ['serverinfo', 'guildinfo', 'guild'],
	usage: '[command]',
	cooldown: 3,
	execute(client, message, args) {
		//server categories
		let chnlCat = message.guild.channels.map(c => {
        return `${c.type == 'text' || c.type == 'voice'? '': c.name}`
        }).filter(c => c != '').sort();

		//server channels
		let textChnl = message.guild.channels.map(c => {
        return `${c.type == 'category' || c.type == 'voice'? '': c.name}`
        }).filter(c => c != '').sort();

		//voice channels
		let voiceChnl = message.guild.channels.map(c => {
        return `${c.type == 'category' || c.type == 'text'? '': c.name}`
        }).filter(c => c != '').sort();

		let Created_At = moment(message.guild.createdAt);
		let Created = Created_At.format('MMMM Do YYYY, h:mm:ss a');

		let embed = new RichEmbed()
    	.setColor('#20bab5')
    	.setTitle(`**${message.guild.name} [${message.guild.id}]**`)
    	.setThumbnail(message.guild.iconURL)
			.addField(`**Roles**`, message.guild.roles.map(r => r.name).sort().splice(1).join(', '))
			.addField(`Channels:`, `> **${textChnl.length}** Text, **${voiceChnl.length}** Voice, **${chnlCat.length}** Categories.
				> AFK: **${message.guild.afkChannel ? message.guild.afkChannel : `None`}**`)
			.addField(`Members:`, `> ${message.guild.memberCount} members
				> Owner: **${message.guild.owner}** (ID: **${message.guild.owner.id}**)`)
			.addField(`Other:`, `> Roles: **${message.guild.roles.size}**
				> Region: **${message.guild.region.slice(0,1).toUpperCase()}${message.guild.region.slice(1)}**
				> Created at: **${Created}**
				> Verification Level: **${message.guild.verificationLevel}**`)
    	message.channel.send(embed)
	},
};
