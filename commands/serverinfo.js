const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'server',
	description: 'Shows serverinfo',
	execute(client, message, args) {
    let embed = new RichEmbed()
    .setColor('RANDOM') // Random color everytime
    .setTitle('Server Info') // Title is clickable
    .setThumbnail(message.guild.iconURL)
    .addField("ServerName:", message.guild.name)
    .addField("ServerID:", message.guild.id)
    .addField("CreatedAt:", message.guild.createdAt)
    .addField("Owner:", message.guild.owner)
    .addField("OwnerId:", message.guild.owner.id)
    .addField("MemberCount:", message.guild.memberCount)
    .addField("VerificationLevel:", message.guild.verificationLevel)
    .addField("Region:", `${message.guild.region.slice(0,1).toUpperCase()}${message.guild.region.slice(1)}`)
    .setTimestamp(new Date())
    .setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
    message.channel.send(embed)
	},
};