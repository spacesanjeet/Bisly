const { RichEmbed } = require('discord.js');
const randomMeow = require("random-meow");

module.exports = {
    name: 'cat',
    description: 'get random cat images',
    execute(client, message, args) {
        randomMeow().then((url => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(url)
            .setTimestamp(new Date())
            message.channel.send(embed)
        }))
        .catch(error => {
            message.channel.send("Sorry, something went wrong!");
            console.log(error)
        });
    },
};