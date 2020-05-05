const { RichEmbed } = require('discord.js');
const animals = require('relevant-animals')

module.exports = {
    name: 'shibe',
    description: 'Get random shibes',
    guildOnly: true,
    usage: ' ',
    cooldown: 5,
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
