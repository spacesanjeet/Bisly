const { RichEmbed } = require('discord.js');
const api = require('some-random-api');

module.exports = {
    name: 'redpanda',
    description: 'get a cute red panda image',
    execute(client, message, args) {
        api.redpandaimg().then(img => {
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