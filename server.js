const http = require('http');
const express = require('express');

express().get('/', (req, res) => {
  res.json('OK')
  console.log('Pinged!')
}).listen(process.env.PORT)

// make your bot auto pinged, in case uptimerobot is off
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);
// don't delete code above

const fs = require('fs');
const Discord = require('discord.js');
const token = process.env.TOKEN
const prefix = process.env.PREFIX

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.paginators = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', () => {
    console.log('ready');
    client.user.setPresence({
      game: {
        name: "with Sanjeet | b!help",
        type: 'PLAYING'
      },
      status: 'online'
	
    });
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-bye');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new RichEmbed()
    .setThumbnail(memberavatar)
    .setTitle("User Joined")
    .setColor("#F70827")
    .setDescription(`Welcome to the server, ${member}, hope you enjoy your time here! You are, ${member.guild.memberCount}th member of the guild!`)
    .setTimestamp(new Date())
    .setFooter(member.guild)
    channel.send(embed)
});

client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-bye');
    if (!channel) return;
    let embed = new RichEmbed()
      .setThumbnail(client.users.get(member.id).displayAvatarURL)
      .setTitle("Member Left")
      .setColor("#F70827")
      .setDescription(`We are sad to see you leaving, ${member}, see ya soon!`)
      .addField("Username : ", client.users.get(member.id).username, true)
      .addField("ID : ", client.users.get(member.id).id, true)
      .addField("Tag : ", client.users.get(member.id).tag, true)
      .addField("Created At : ", client.users.get(member.id).createdAt, true)
      .addField("Membercount : ", member.guild.memberCount, true)
      .setTimestamp()
      .setFooter(member.guild);
    channel.send(embed)
});

client.on('messageReactionAdd', (reaction, user) => {
	let paginator = client.paginators.get(reaction.message.id);
	if (paginator)
	{
		paginator.update(reaction, user);
	}
});

client.on('messageDelete', async (message) => {
  	const logs = message.guild.channels.find(channel => channel.name === "logs");
  	if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    		message.guild.createChannel('logs', 'text');
  	}
  	if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !logs) {
    		console.log('The logs channel does not exist and tried to create the channel but I am lacking permissions.')
  	}
  	const entry = await message.guild.fetchAuditLogs({type: 'MESSAGE_DELETE'}).then(audit => audit.entries.first())
  	let user = ""
    	if (entry.extra.channel.id === message.channel.id
      		&& (entry.target.id === message.author.id)
      		&& (entry.createdTimestamp > (Date.now() - 5000))
      		&& (entry.extra.count >= 1)) {
    		user = entry.executor.username
	} else {
    		user = message.author.username
  	}

    let embed = new Discord.RichEmbed()
    .setColor("#F70827")
    .setTitle('Message Delete')
    .addField('Message', `${message}`)
    .addField('Channel', `${message.channel.name}`)
    .addField('By user', `${user}`)
    .setTimestamp(new Date())
    logs.send(embed)
  	//logs.send(`A message (**${message}**) was deleted in **${message.channel.name}** by **${user}**`);
});

client.login(token);
