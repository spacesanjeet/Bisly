const { RichEmbed } = require('discord.js');
const animals = require('relevant-animals')

module.exports = {
    name: 'dog',
    description: 'get random puppy images',
    execute(client, message, args) {
        animals.dog().then((s => {
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