const { RichEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'fox',
    description: 'Get random fox images',
    guildOnly: true,
    usage: ' ',
    cooldown: 5,
    execute(client, message, args) {
        const link = "https://some-random-api.ml/img/fox";
        request({url: link, json: true}, (err, res, body) => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(body.link)
            message.channel.send(embed)
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
    },
};
