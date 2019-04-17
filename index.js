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
const snekfetch = require('snekfetch');
const weather = require("weather-js")
const math = require('math-expression-evaluator');
const search = require('yt-search');
const xkcd = require('xkcd-imgs');
const joke = require('chuck-joke-node');
const os = require('os');
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
    .catch(error => {
	    message.channel.send("Couldn't find any results!")
	    console.log(error)
    });
  } else
	  
  if (message.content.startsWith(prefix + "info")) {
    let embed = new RichEmbed()
    .setTitle("Bisly")
    .setColor('#F70827')
    .setDescription(`Bisly is a general purpose discord bot which is developed with the view of performing all general tasks in mind.\n
    The bot contains commands for **Fun**, **Moderation**, **Misc** and **General** tasks.`)
    .addField("Webpage:", "http://bisly.ml/")
    .addField("Github repository:", "[Bisly on Github](https://github.com/spacesanjeet/Bisly)")
    .setFooter("spacesanjeet#1363")
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "stats")) {
    class Convert {
        constructor(seconds) {
          this.seconds = Number(seconds);
          
          this.d = Math.floor(this.seconds / (3600*24));
          this.h = Math.floor(this.seconds % (3600*24) / 3600);
          this.m = Math.floor(this.seconds % 3600 / 60);
          this.s = Math.floor(this.seconds % 3600 % 60);
          
          var d = this.d, h = this.h, m = this.m, s = this.s;
          
          this.dDisplay = d > 0 ? d + (d == 1 ? " day," : " days,") : d + " day,";
          this.hDisplay = h > 0 ? h + (h == 1 ? " hour," : " hours,") : h + " hour,";
          this.mDisplay = m > 0 ? m + (m == 1 ? " minute," : " minutes,") : m + " minute,";
          this.sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : s + " second";
          
          return this;
        }
        ToDHMS() {
          return `${this.dDisplay} ${this.hDisplay} ${this.mDisplay} ${this.sDisplay}`;
        }
        ToDhms() {
          return `${this.dDisplay} ${this.h}:${this.m}:${this.s}`
        }
    }

    let ram_total = Math.round(100 * (process.memoryUsage().heapTotal / 1048576)) / 100 + "MB";
    let ram_usage = Math.round(100 * (process.memoryUsage().heapUsed / 1048576)) / 100 + "MB";
    let client_uptime = new Convert(client.uptime / 1000).ToDHMS();
    let os_uptime = new Convert(os.uptime()).ToDHMS();
    let process_uptime = new Convert(process.uptime()).ToDHMS(); 

    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle("Stats")
    .addField("Bisly", `**CreatedAt: **${client.user.createdAt}\n**Guilds: **${client.guilds.size}\n**Channels: **${client.channels.size}\n**Users: **${client.users.size}\n**Discord.js: **v11.4.2\n**Node.js: **${process.version}`)
    .addField("Uptime", `**Client: **${client_uptime}\n**Host OS: **${os_uptime}\n**Process: **${process_uptime}`)
    .addField("Ram", `**Total: **${ram_total}\n**Usage: **${ram_usage}`)
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "sicon")) {
    let embed = new RichEmbed()
    .setImage(message.guild.iconURL +'?size=2048')
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
	  
  if (message.content.startsWith(prefix + "joke")) {
    var jokes = []
    var result = Math.floor((Math.random() * jokes.length) + 0);
    const embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(jokes[result])
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "weather")) {
    weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
        if (err) message.channel.send(err);
        if (result === undefined || result.length === 0) {
            message.channel.send('**Please enter a valid location!**')
            return;
        }
        var current = result[0].current;
        var location = result[0].location;
        const embed = new RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(0x00AE86)
            .addField('Timezone',`UTC ${location.timezone}`, true)
            .addField('Degree Type',location.degreetype, true)
            .addField('Temperature',`${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds',current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true)
            message.channel.send({embed});
    })
  } else
	  
  if (message.content.startsWith(prefix + "WEATHER")) {
    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err)

        message.channel.send(JSON.stringify(result[0].current, null, 2));
    });
  } else
	  
  if (message.content.startsWith(prefix + "math")) {
    if (!args[1]) return message.channel.send("Enter a valid calculation!")
    let result;
    try {
        result = math.eval(args.slice(1).join(" "))
    } catch (e) {
        result = 'Error: "Invalid Input"';
    }

    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle("Maths Calculation")
    .addField('Input', `\`\`\`js\n${args.slice(1).join(" ")}\`\`\``)
    .addField('Output', `\`\`\`js\n${result}\`\`\``)
    .setTimestamp(new Date());
    message.channel.send(embed)
  } else
	  
  if (message.content.startsWith(prefix + "yt")) {
    search(args.slice(1).join(' '), function(err, res) {
        if (err) return message.channel.send('Sorry, something went wrong!');
        let link = "http://www.youtube.com"
        let videos = res.videos.slice(0, 1);
        let resp = '';
        for (var i in videos) {
            resp += `${videos[i].url}`;
        }
        message.channel.send(link+resp)
    });
  } else
	  
  if (message.content.startsWith(prefix + "xkcd")) {
    xkcd.img(function(err, res) {
        if (err) return message.channel.send('Sorry, something went wrong!')
        let image = res.url;
        let des = res.title;
        let embed = new RichEmbed()
        .setTitle("xkcd")
        .setColor("RANDOM")
        .setImage(image)
        .setDescription(des)
        .setTimestamp(new Date())
        message.channel.send(embed)
    });
  } else
	  
  if (message.content.startsWith(prefix + "norris")) {
    joke.random().then((data) => {
        let embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Chuck Norris")
        .setURL(data.url)
        .setThumbnail(data.icon_url)
        .setDescription(data.value);
        message.channel.send(embed)
    })
    .catch(error => {
        message.channel.send("Sorry, something went wrong!");
        console.log(error)
    });
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
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");

    let kickEmbed = new RichEmbed()
    .setDescription("Member Kicked")
    .setColor("RANDOM")
    .addField("Kicked User:", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked by:", `<@${message.author}> with ID ${message.author.id}`)
    .addField("Time:", message.createdAt)
    .addField("Reason:", kReason);

    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
  } else
	  
  if (message.content.startsWith(prefix + "ban")) {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
    if(!bUser) return message.channel.send("Can't find the user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions to use this command!");

    let banEmbed = new RichEmbed()
    .setDescription("Member Banned")
    .setColor("RANDOM")
    .addField("Banned User:", `${bUser} with ID ${bUser.id}`)
    .addField("Banned by:", `<@${message.author}> with ID ${message.author.id}`)
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
    .setColor('#F70827')
    .setTitle('HELP BOX')
    .setThumbnail(client.user.avatarURL)
    .addField("Prefix:", "b!")
    .addField("General", `**server: **Get the serverinfo\n**user: **Get the userinfo\n**ava: **Get the avatar of the users\n**report: **Report a user with reason\n**welcome-leave-logs: **Make a channel names 'welcome-bye' to enable`)
    .addField("Fun", `**rps: **Play rock-paper-scissors with the bot\n**joke: **Get a random joke\n**xkcd: **Get xkcd web comics\n**norris: **Get Chuck Norris jokes\n**8ball: **Get the funny 8ball answers\n**say: **Make the bot something\n**wtf: **Criticize the HTML language`)
    .addField("Moderation", `**ban: **Ban a user with reason\n**kick: **Kick a user with reason\n**createchannel: **Create a channel, <channel name><type>\n**deletechannel: **Delete a channel, <channel/id>\n**prune: **Prune the messages`)
    .addField("Misc", `**ping: **Test the latency of the bot\n**math: **Do calculations\n**weather: **Check weather of a place\n**def: **Definitions from urban\n**yt: **Get the youtube videos\n**invite: **Get the bot invite link\n**info: **Bot info\n**bot: **Bot stats\n**help: **help relating commands`)
    .setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
    .setTimestamp(new Date())
    message.channel.send(embed)
  } else
        
  if (message.content.startsWith(prefix + "say")) {    //say command
    message.delete()
		message.channel.send(message.content.substring(6, message.content.length));
	} 
  else message.react("❌") | message.channel.send("That is not a recognised command. Use `b!help` to see all available commands!")    //default return in case of null commands
});

client.login(process.env.TOKEN);
