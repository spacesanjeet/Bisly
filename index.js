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

//still under development
const { Client, RichEmbed } = require('discord.js'); //entering the bot on discord
const relevantUrban = require("relevant-urban");
const client = new Client();

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
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-bye');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}, hope you enjoy your time here!`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'welcome-bye');
    if (!channel) return;
    let embed = new RichEmbed()
    .setThumbnail(member.displayAvatarURL)
    .setTitle("User Joined")
    .setColor("RANDOM")
    .setDescription(`Welcome to the server, ${member}, hope you enjoy your time here! You are, ${member.guild.memberCount}th member of the guild!`)
    .setTimestamp(new Date())
    .setFooter(member.guild)
    channel.send(embed)
});

const prefix = "b!";                    //prefix of the bot
client.on("message", (message) => {
	//Exit and stop if it's not there
  let args = message.content.slice(prefix.length).trim().split(/ +/g)
	if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

//client.on("message", (message) => {
	if (message.content.startsWith(prefix + "ping")) {
		message.channel.send('Pong!').then(m => m.edit("Pong! Response Took " + (m.createdTimestamp - message.createdTimestamp) + "ms"));
	} else
  
  if (message.content.startsWith(prefix + "foo")) {
		message.channel.send("bar! I am not talking about candy bar!!");
	} else

	if (message.content.startsWith(prefix + "spam")) {
		message.channel.send("eggs allowed here!")
	} else

	if (message.content.startsWith(prefix + "test")) {
		message.channel.send("testing successful ✅")
	} else
    
	if (message.content.startsWith(prefix + "botlove")) {
		message.channel.send("I obey all, but I love only two persons: My boss Sanjeet and his love!")
	} else

  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("```> Bisly is a general purpose bot which perfoms the majority of general tasks. 👍\n> It is built with JavaScript and Discord.js\n> It is still in development, so expect occasional bugs and downtime 😃\n> Feel free to contact spacesanjeet#1363 for any suggestions and ideas.\n> Thanks for using Bisly, your support is always appreciated. 👏```")
    message.channel.send("```Join the support server for any doubts and queries.\nhttps://discord.gg/g2xRv4V```") // add permanent bisly home link
  } else 
    
  if (message.content.startsWith(prefix + "def")) {
    relevantUrban(args[1]).then(response =>{
        let embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(args[1])
        .setURL(response.urbanURL)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**Definition:**\n*${response.definition}*\n\n**Example:**\n*${response.example}*`) // Definition of the word
        .addField('Author', response.author, true) // Author of the fetched word
        .addField('Rating', `**\`Upvotes: ${response.thumbsUp} | Downvotes: ${response.thumbsDown}\`**`)
        message.channel.send(embed)
    })
  } else
    
  if (message.content.startsWith(prefix + "bot")) {
    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL)
    .addField("Name:", "Bisly")
    .addField("CreatedOn:", client.user.createdAt)
    .addField("Guilds:", client.guilds.size)
    .addField("Users:", client.users.size)
    .addField("Total commands:", "13")
    .addField("Repository:", "https://github.com/spacesanjeet/Bisly")
    .setFooter("Created by spacesanjeet#1363")
    message.channel.send(embed)
  } else

  if (message.content.startsWith(prefix + "8ball")) {
    let question = args.slice(0).join(" ");
    var sayings = ["Yes!", "Not sure!", "Probably not!", "Maybe!", "wtf you asking!"]
    var result = Math.floor((Math.random() * sayings.length) + 0);
    const embed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle("Answer is:")
    .addField(question, sayings[result])
    .setTimestamp(new Date())
    .setFooter("Question from: " + message.author.username)
    message.channel.send({embed: embed})
  } else 
    
  if (message.content.startsWith(prefix + "wtf")) {
    let embed = new RichEmbed()
    .setTitle("Greatest Programming Language")
    .setColor("RANDOM")
    .setDescription("HTML is not a programming language you dumb stupid idiot!!\nUse any other language to become a programmer.\nGood luck.")
    .setTimestamp(new Date())
    .setFooter("Programmer: " + message.author.username)
    message.channel.send(embed)
  } else 
    
  if (message.content.startsWith(prefix + "ava")) {
    let user = message.mentions.users.first() || message.author;
    let embed = new RichEmbed()
    .setTitle(`Here is ${user.username}'s avatar!`)
    .setImage(user.displayAvatarURL)
    .setColor("RANDOM")
    .setTimestamp(new Date())
    .setFooter(message.guild.name)
    message.channel.send(embed)
  } else
    
  if (message.content.startsWith(prefix + "userinfo")) {
    let member = message.mentions.users.first() || message.author;
    let embed = new RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Showing ${member.username}'s info.`)
        .addField("Name:", member.username, true)
        .addField("Nickname:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "None", true )
        .addField("ID:", member.id, true)
        .addField("CreatedAt:", member.createdAt, true)
        .addField("JoinedAt:", message.guild.members.get(member.id).joinedAt)
        .addField("Bot:", member.bot ? "Yes" : "No", true)
        .addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Last Messsage:", member.lastMessage ?  member.lastMessage: "No message", true)
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s.name).slice(1).join(" | "), true)
        .setTimestamp(new Date())
        .setFooter(message.guild.name)
    message.channel.send(embed);
  } else

  if (message.content.startsWith(prefix + "serverinfo")) {
    let embed = new RichEmbed()
        .setColor('RANDOM') // Random color everytime
        .setTitle('Server Info') // Title is clickable
        .setThumbnail(message.guild.iconURL)
        .addField("ServerName:", message.guild.name)
        .addField("ServerID:", message.guild.id)
        .addField("CreatedAt:", message.guild.createdAt)
        .addField("Owner:", message.guild.owner)
        .addField("MemberCount:", message.guild.memberCount)
        .addField("VerificationLevel:", message.guild.verificationLevel)
        .addField("Region:", message.guild.region)
        .setTimestamp(new Date())
        .setFooter('Requested by: ' + message.author.username)
    message.channel.send(embed)
  } else
    
  if (message.content.startsWith(prefix + "invite")) {
    let embed = new RichEmbed()
        .setColor('RANDOM') // Random color everytime
        .setTitle('Invite Link ❤') // Title is clickable
        .setURL("https://discordapp.com/oauth2/authorize?client_id=496198253193461792&scope=bot&permissions=8")
        .setTimestamp(new Date())
        .setFooter('Requested by: ' + message.author.username)
    message.channel.send(embed)
  } else
 
  if (message.content.startsWith(prefix + "on")) {
    if(message.author.id == ownerId) {
        message.channel.send("Hydromeasures [😊] confirmed, Hello boss.")
    } else message.channel.send("I didn't hear if you said something!?")
  } else
    
  if (message.content.startsWith(prefix + "off")) {
    if(message.author.id == ownerId) {
        message.channel.send("You can't turn me down boss...🤣")
    } else message.channel.send("You saw a **on** command, so you thought there will also be a **off** command....So dumb you are...😎")
  } else 
    
  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id == ownerId) {
        try {
            let embed = new RichEmbed()
              .setColor("RANDOM")
              .setTitle("REPL")
              .setDescription(eval(message.content.split(" ").slice(1).join(" ")));

            message.channel.send(embed);
            message.react("✅");
        }   catch(e) {
            message.channel.send(` ${e.name}: ${e.message}` );
            message.react("❌");
        }
    }
    else {
        message.channel.send("You are not my boss!");
    }
  } else
    
  if (message.content.startsWith(prefix + "help")) {
    let embed = new RichEmbed()
        .setColor('RANDOM') // Random color everytime
        .setTitle('HELP BOX') // Title is clickable
        .setThumbnail(client.user.avatarURL)
        .setDescription("Prefix => b!")
        .addField("ping:", "pong! speed matters!")
        .addField("wtf:", "critisize the HTML language!")
        .addField("invite:", "invite for the bot")
        .addField("def:", "get definition from urban dictionary")
        .addField("ava:", "get your or someone's avatar/pfp")
        .addField("8ball:", "the great 8ball answers to your questions")
        .addField("botlove:", "the love of the bot")
        .addField("info:", "bot info and thank you message")
        .addField("serverinfo:", "get the guild details")
        .addField("userinfo:", "get the user details")
        .addField("say:", "tell something that you want the bot to say")
        .addField("help:", "this shows the help box")
        .addField("Welcome-logs:", "add a channel named welcome-bye in the server")
        .setTimestamp(new Date())
        .setFooter('Requested by: ' + message.author.username)
    message.channel.send(embed)
  } else
        
	if (message.content.startsWith(prefix + "say")) {    //say command
    message.delete()
		message.channel.send(message.content.substring(6, message.content.length));
	} 
  else message.react("❌") | message.channel.send("That is not a recognised command. Use `b!help` to see all available commands!")    //default return in case of null commands
});

client.login(process.env.TOKEN);
