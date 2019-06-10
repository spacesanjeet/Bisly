const http = require('http');
const express = require('express');
const fs = require('fs');

express().get('/', (req, res) => {
  res.json('OK')
  console.log('Pinged!')
}).listen(process.env.PORT)

// make your bot auto pinged, in case uptimerobot is off
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 60000);
// don't delete code above

const { Client, RichEmbed, Collection } = require('discord.js');  //entering the bot on discord
const client = new Client();
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

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

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-bye');
    let memberavatar = member.user.avatarURL
    if (!channel) return;
    let embed = new RichEmbed()
    .setThumbnail(memberavatar)
    .setTitle("User Joined")
    .setColor("RANDOM")
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
      .setColor("RANDOM")
      .setDescription("We are sad to see you leaving, " + member + ", see ya soon!")
      .addField("Username : ", client.users.get(member.id).username, true)
      .addField("ID : ", client.users.get(member.id).id, true)
      .addField("Tag : ", client.users.get(member.id).tag, true)   
      .addField("Created At : ", client.users.get(member.id).createdAt, true)
      .addField("Membercount : ", member.guild.memberCount, true)
      .setTimestamp()
      .setFooter(member.guild);
    channel.send(embed)
});

const prefix = process.env.PREFIX;

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();
  if (!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);

	try {
    command.execute(client, message, args);
	} catch(error) {
    if(error.msg) {
      message.reply(error.msg);
      console.log(error.msg);
    } else {
      console.error(error);
      message.reply('Sorry something went wrong!')
    }
	}
  
});
	

client.login(process.env.TOKEN);
