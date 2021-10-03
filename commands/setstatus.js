const Discord = module.require("discord.js")
module.exports = {
  name: "setstatus",
  description: "A Command To Set bot activity!",
  usage: "setstatus [your status]",
  accessableby: "Owner",
  aliases: [""],	
  async execute(client, message, args) {
  
    if(message.author.id !== "540142383270985738") {

        return await message.channel.send(new Discord.MessageEmbed().setTitle("You Are Not The Bot Owner!").setColor(0xff0000).setFooter(message.guild.me.displayName).setTimestamp())
    }
	else {
		let setActivity = args.join(" ").slice(0);
        await client.user.setPresence({
           status: "online",
           activity: {
              name: setActivity,
              type: "WATCHING",
           },
        });
        
		return await message.channel.send(new Discord.MessageEmbed().setTitle("Requested status has been set").setColor("GREEN").setFooter(message.guild.me.displayName).setTimestamp())
		
	}
  }
};