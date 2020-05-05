const { RichEmbed } = require('discord.js');
const joke = require('chuck-joke-node');

module.exports = {
    name: 'chuck',
    description: 'Get chuck norris jokes',
    guildOnly: true,
    aliases: ['norris'],
    usage: ' ',
    cooldown: 3,
    execute(client, message, args) {
        joke.random().then((data) => {
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("Chuck Norris")
            .setURL(data.url)
            .setThumbnail(data.icon_url)
            .setDescription(data.value);
            message.channel.send(embed)
        })
        .catch(error => {
            message.channel.send("Sorry, something went wrong!");
            console.log(error)
        });
    },
};
