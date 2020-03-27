const { RichEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'panda',
    description: 'Get random cute panda images',
    guildOnly: true,
    usage: '[command]',
    cooldown: 5,
    execute(client, message, args) {
        const link = "https://some-random-api.ml/img/panda";
        request({url: link, json: true}, (err, res, body) => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(body.link)
            message.channel.send(embed)
            if(err) return message.channel.send("Sorry, something went wrong!");
        });
    },
};
