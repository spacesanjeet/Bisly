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

client.on('message', message=> {
    if (message.isMentioned(client.user)) {
    message.reply("The prefix is `b!` Use `b!help` to see all available commands!");
}
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
    .addField("Total commands:", "11")
    .addField("Repository:", "https://github.com/spacesanjeet/Bisly")
    .setFooter("Created by spacesanjeet#1363")
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "sicon")) {
    let embed = new RichEmbed()
    .setImage(message.guild.iconURL)
    .setFooter(message.guild.name)
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "report")) {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!rUser) return message.channel.send("Can't find the specified user!!");
    let reason = args.join(" ").slice(22);

    message.channel.send("The report has been sent!!");

    let embed = new RichEmbed()
    .setTitle("Report")
    .setColor("RANDOM")
    .addField("Reported user:", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported by:", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel:", `${message.channel}`)
    .addField("Time:", `${message.createdAt}`)
    .addField("Reason:", reason);

    let reportsChannel = message.guild.channels.find("name", "reports");
    if(!reportsChannel) return message.channel.send("Can't find a reports channel!!");

    message.delete().catch(O_o=>{});
    reportsChannel.send(embed);
  } else
	  
  if (message.content.startsWith(prefix + "8ball")) {
    if(!args[1]) return message.channel.send("Ask a vaild question!");
    let question = args.slice(1).join(" ");
    var sayings = ["It is certain!", "It is decidedly so!", "Without a doubt!", "Yes, definitely!", "You may rely on it!", "As I see it, yes!", "Most Likely!", "Outlook good!", "Yes!", "Signs point to yes!", "Reply hazy try again!", "Ask again later!"]
    var result = Math.floor((Math.random() * sayings.length) + 0);
    message.channel.send("💬" + sayings[result])
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
    
  if (message.content.startsWith(prefix + "user")) {
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

  if (message.content.startsWith(prefix + "server")) {
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
	  
  if (message.content.startsWith(prefix + "kick")) {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!kUser) return message.channel.send("Can't find the user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions to use this command!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new RichEmbed()
    .setDescription("Member Kicked")
    .setColor("RANDOM")
    .addField("Kicked User:", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked by:", `<@${message.author.name}> with ID ${message.author.id}`)
    .addField("Time:", message.createdAt)
    .addField("Reason:", kReason);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
  } else
	  
  if (message.content.startsWith(prefix + "ban")) {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!bUser) return message.channel.send("Can't find the user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions to use this command!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new RichEmbed()
    .setDescription("Member Banned")
    .setColor("RANDOM")
    .addField("Banned User:", `${bUser} with ID ${bUser.id}`)
    .addField("Banned by:", `<@${message.author.name}> with ID ${message.author.id}`)
    .addField("Time:", message.createdAt)
    .addField("Reason:", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
  } else
	
  if (message.content.startsWith(prefix + "prune")) {
    let mss=message.content.split(' ');
    if(mss[1]!=null){
    var num=parseInt(mss[1]);
        let perms = message.member.permissions;
        let prm = perms.has("MANAGE_MESSAGES");
        if(prm==true){
        if(num>0){
        message.channel.bulkDelete(num+1, true)
        .then((m)=>{
         let k=m.size-1;
         message.channel.send(`${k} messages are deleted from this channel by **${message.author.username}**`);
    })
    .catch(err => {
        console.error(err);
        message.channel.send('there was an error while trying to prune messages in this channel!');
    });
    }else{
        message.channel.send('Can\'t delete '+num+' message');
    }
    }else{
      message.channel.send(`${message.author} you don\'t have the permission to prune`);
    }}
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
	  
  if (message.content.startsWith(prefix + "createchannel")) {
    let mss=message.content.split(' ');
    let nm=mss[1],ty=mss[2];
   // nm is for name
   // ty is for type

  // all types of channels are :- voice, category and text      

    let perms = message.member.permissions;
    let prm = perms.has("MANAGE_CHANNELS");
    if(prm==true){
    try{
        function cl(mssg){
           let sv=message.guild;
           let nn=nm,tu=ty;
           if(tu.toLowerCase()=='voice'||tu.toLowerCase()=='text'||tu.toLowerCase()=='category'){
              sv.createChannel(nn,tu);
              message.channel.send("Channel created");
           }
        }
       cl(message);
    }catch(err){
       message.channel.send("Can\'t create the channel");
    }
    }else{
       message.channel.send(`${message.author} you don\'t have the permission to create channels`);
    }
  } else
	  
  if (message.content.startsWith(prefix + "deletechannel")) {
    let ch,chs='';
    let mess=message.content.split(' ');
    if(mss[1]!=null||mss[1]!=undefined){
    for(var i=0;i<mss[1].length;i++){
      let k=mss[1].charAt(i);
     if(k!='<'&&k!='>'&&k!='#')   {chs+=k;}
    }
    try{
        ch=client.channels.get(chs);
    }catch(err){
        message.channel.send("Can\'t find the channel");
    }
    let perms = message.member.permissions;
    let prm = perms.has("MANAGE_CHANNELS");
    if(prm==true){
    try{
    ch.delete();
    message.channel.send(`The channel **#${ch.name}** has been deleted by ${message.author.username}`);
    }catch(err){
    message.channel.send('Can\'t delete the channel');
    }
    }else{
    message.channel.send(`${msg.author} you don\'t have the permission to delete channels`);
    }}
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
        .addField("rps:", "play rock-paper-scissors with the bot")
        .addField("info:", "bot info and thank you message")
        .addField("serverinfo:", "get the guild details")
        .addField("userinfo:", "get the user details")
        .addField("say:", "tell something that you want the bot to say")
        .addField("prune:", "prune messages in the channel")
        .addField("kick:", "kick a user with a reason")
        .addField("ban:", "ban a user with a reason")
        .addField("help:", "this shows the help box")
        .addField("report:", "report a user, <user><reason>, make a channel named reports")
        .addField("Welcome-leave-logs:", "add a channel named welcome-bye in the server")
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
