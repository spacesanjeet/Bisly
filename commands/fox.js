const { RichEmbed } = require('discord.js');
const api = require('some-random-api');

module.exports = {
    name: 'fox',
    description: 'get a fox image',
    execute(client, message, args) {
        api.foximg().then(img => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTimestamp(new Date())
            message.channel.send(embed)
        })
        .catch(error => {
            console.log(error)
            message.channel.send("Sorry, something went wrong!")
        });
    },
};