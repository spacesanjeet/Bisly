const { RichEmbed } = require('discord.js');
const relevantUrban = require('relevant-urban');

module.exports = {
    name: 'def',
    description: 'Definitions from urban dictionary',
    guildOnly: true,
    aliases: ['dict'],
    usage: '[word]',
    cooldown: 3,
    execute(client, message, args) {
        if (!args[0]) return message.channel.send("Enter something to search for!");
        relevantUrban(args[0]).then(response =>{
            let embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(args[0])
            .setURL(response.urbanURL)
            .setThumbnail(client.user.avatarURL)
            .setDescription(`**Definition:**\n*${response.definition}*\n\n**Example:**\n*${response.example}*`) // Definition of the word
            .addField('Author', response.author, true) // Author of the fetched word
            .addField('Rating', `**\`Upvotes: ${response.thumbsUp} | Downvotes: ${response.thumbsDown}\`**`)
            message.channel.send(embed)
        })
        .catch(error => {
            message.channel.send("Sorry, that word wasn't found!");
            console.log(error);
        });
    },
};
