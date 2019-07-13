const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'shows help message',
    execute(client, message, args) {
        let embed = new RichEmbed()
        .setColor('#F70827')
        .setTitle('HELP BOX')
        .setThumbnail(client.user.avatarURL)
        .addField("Prefix:", "b!")
        .addField("General", `**ping: **Get the latency of the bot\n**server: **Get the serverinfo\n**user: **Get the userinfo\n**ava: **Get the avatar of a user\n**stats: **Get the stats of the bot\n**info: **Get the info of the bot\n**invite: **Get the invte of the bot\n**vote: **Vote Bisly on bot sites\n**help: **Get this help message`)
        .addField("Fun", `**xkcd: **Get xkcd web comics\n**norris: **Get chuck norris jokes\n**joke: **Get a random joke\n**say: **Make the bot say something\n**rps: **Play rock-paper-scissors with the bot\n**catfact: **Get facts about cats\n**meme: **Get memes\n**emotes: **Get all custom emotes available in the server\n**emoji: **Resize any emoji\n**8ball: **Ask the bot your questions and get quick answers\n**ascii: **Style your messages\n**spam: **spam messages in spam channels`)
        .addField("Moderation", `**ban: **Ban someone with a reason\n**kick: **Kick someone with a reason\n**prune: **Purge messages in the channel\n**report: **Report someone with a reason\n**createchannel: **Create channels in the server\n**deletechannel: **Delete channels from the server`)
        .addField("Animal", `**dog: **Get cute doggos\n**cat: **Get cute kittens\n**shibe: **Get cute shibes\n**panda: **Get cute pandas\n**redpanda: **Get cute red pandas\n**fox: **Get foxes`)
        .addField("Misc", `**math: **Do math calculations\n**weather: **Get weather of any place\n**yt: **Search youtube\n**bulkyt: **Search bulk youtube videos\n**poll: **Make a simple poll\n**def: **Search definitions from urban dictionary\n**lyrics: **Get lyrics of any song`)
        .addField("welcome-leave-logs", "To make use of this, make sure to add a channel named 'welcome-bye' in the server.")
        .addField("Feedback", `Use this command to send your feedback directly to the developer of the bot. Your help and feedback is always appreciated!`)
        .setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setTimestamp(new Date())
        message.channel.send(embed)
    },
};
