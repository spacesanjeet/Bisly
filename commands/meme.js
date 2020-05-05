const { RichEmbed } = require('discord.js');
const { meme } = require('memejs');

module.exports = {
    name: 'meme',
    description: 'Get random memes',
    guildOnly: true,
    usage: ' ',
    cooldown: 5,
    async execute(client, message, args) {
        const m = await message.channel.send("Meme on the way!" );
        meme('memes', function(err, data) {
            let embed = new RichEmbed()
            .setTitle(data.title)
            .setImage(data.url)
            m.edit(embed);
        });
    },
};
