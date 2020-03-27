const { RichEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'cat',
    description: 'Get random cat images',
    guildOnly: true,
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        const link = "https://some-random-api.ml/img/cat";
        request({url: link, json: true}, (err, res, body) => {
            let embed = new RichEmbed()
            .setImage(body.link)
            message.channel.send(embed)
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
    },
};
