const { RichEmbed } = require('discord.js');
const catFacts = require('cat-facts');

module.exports = {
    name: 'catfact',
    description: 'Get random cat facts',
    guildOnly: true,
    usage: '[command]',
    cooldown: 2,
    execute(client, message, args) {
        let randomFact = catFacts.random();
        let embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Fact")
        .setDescription(randomFact)
        message.channel.send(embed)
    },
};
