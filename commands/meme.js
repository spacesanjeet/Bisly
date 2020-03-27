const { RichEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'meme',
    description: 'Get random memes',
    guildOnly: true,
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        const link = "https://some-random-api.ml/meme";
        request({url: link, json: true}, (err, res, body) => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(body.caption)
            .setImage(body.image)
            message.channel.send(embed)
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
    },
};
