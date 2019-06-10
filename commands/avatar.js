const { RichEmbed } = require('discord.js');

module.exports = {
	name: 'ava',
	description: 'Shows the user avatar',
	execute(client, message, args) {
	let user = message.mentions.members.first();
    let [id1] = args;
    //var avatar, uname;
    if(user){
      let avatar = client.users.get(user.id).displayAvatarURL;
      let username = client.users.get(user.id).username;
    }
    else {
      if(id1){
        let avatar = client.users.get(id1).displayAvatarURL;
        let username = client.users.get(id1).username;
      }else{
        let avatar = message.author.displayAvatarURL;
        username = message.author.username;
      }
    }
    let embed = new RichEmbed()
      .setTitle(`Here is ${uname}'s avatar`)
      .setColor("RANDOM")
      .setImage(avatar)
      .setTimestamp(new Date())
      .setFooter(message.guild.name);
    message.channel.send(embed);
	},
};