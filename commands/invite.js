const { RichEmbed } = require('discord.js');
const oneLinerJoke = require('one-liner-joke');
module.exports = {
    name: 'joke',
    description: 'Get random jokes',
    guildOnly: 'true',
    usage: ' ',
    cooldown: 3,
    execute(client, message, args) {
        var getRandomJoke = oneLinerJoke.getRandomJoke();
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(getRandomJoke.body)
        message.channel.send(embed)
    },
};
