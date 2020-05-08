const { RichEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'server',
	description: 'Get server/guild info',
  guildOnly: true,
	aliases: ['serverinfo', 'guildinfo', 'guild'],
	usage: ' ',
	cooldown: 3,
	execute(client, message, args) {
		if (!args.length) {
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
			  .addField(`Channels:`, `> **${textChnl.length}** Text, **${voiceChnl.length}** Voice, **${chnlCat.length}** Categories.\n > AFK: **${message.guild.afkChannel ? message.guild.afkChannel : `None`}**`)
			  .addField(`Members:`, `> ${message.guild.memberCount} members\n > Owner: **${message.guild.owner}** (ID: **${message.guild.owner.id}**)`)
			  .addField(`Other:`, `> Roles: **${message.guild.roles.size}**\n > Region: **${message.guild.region.slice(0,1).toUpperCase()}${message.guild.region.slice(1)}**\n > Created at: **${Created}**\n > Verification Level: **${message.guild.verificationLevel}**`)
			  .addField(`Roles:`, "> To see a list of all roles use `b!server roles`")
    		message.channel.send(embed)
		}

		if (args == "roles") {
			let Roles = message.guild.roles.map(r => r.name).sort().splice(0).join(', ')

			let max = 1024;
        	let start = 0, end = max;
        	let ar = new Array();

        	while (start < Roles.length) {
            	let x = Roles.substring(start, end);

				let embed = new RichEmbed()
				.setColor('RANDOM')
				.setTitle(`**Roles[${message.guild.roles.size}]**`)
				.setDescription(x)
				message.channel.send(embed)

				start += max; end += max;
			}
		}
	},
};
