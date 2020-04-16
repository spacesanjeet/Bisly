const { RichEmbed } = require('discord.js');
const { meme } = require('memejs');

module.exports = {
    name: 'meme',
    description: 'Get random memes',
    guildOnly: true,
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        meme('memes', function(err, data) {
            let embed = new RichEmbed()
            .setTitle(data.title)
            .setImage(data.url)
            message.channel.send(embed)
            if(err) return message.channel.send("Sorry, something went bad!");
        });
    },
};
