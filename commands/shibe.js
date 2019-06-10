const { RichEmbed } = require('discord.js');
const animals = require('relevant-animals')

module.exports = {
    name: 'shibe',
    description: 'get random shibes',
    execute(client, message, args) {
        animals.shibe().then((s => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(s)
            .setTimestamp(new Date())
            message.channel.send(embed)
        }))
        .catch(error => {
            message.channel.send("Sorry, something went wrong!");
            console.log(error)
        });
    },
};