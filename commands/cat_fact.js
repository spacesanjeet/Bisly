const { RichEmbed } = require('discord.js');
const catFacts = require('cat-facts');

module.exports = {
    name: 'catfact',
    description: 'get random cat facts',
    execute(client, message, args) {
        let randomFact = catFacts.random();
        let embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Fact")
        .setDescription(randomFact)
        message.channel.send(embed)
    },
};