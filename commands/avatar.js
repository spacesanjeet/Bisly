const { RichEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Get your avatar or someone else',
  guildOnly: true,
  aliases: ['ava', 'a'],
  usage: '[mention/id]',
  cooldown: 3,
  execute(client, message, args) {
    let user = message.mentions.members.first();
    let [id1] = args;
    var avatar, uname;
    if(user){
      avatar = client.users.get(user.id).displayAvatarURL;
      uname = client.users.get(user.id).username;
    }
    else {
      if(id1){
        avatar = client.users.get(id1).displayAvatarURL;
        uname = client.users.get(id1).username;
      }else{
        avatar = message.author.displayAvatarURL;
        uname = message.author.username;
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
