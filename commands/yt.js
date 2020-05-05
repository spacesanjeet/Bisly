const { RichEmbed } = require('discord.js');
const search = require('yt-search');

module.exports = {
    name: 'yt',
    description: 'Search youtube',
    guildOnly: true,
    aliases: ['youtube'],
    usage: '[string/video/query]',
    example: 'Imagine dragons thunder',
    cooldown: 2,
    execute(client, message, args) {
        search(args.slice(0).join(' '), function(err, res) {
            if (err) return message.channel.send('Provide something to search!');
            let videos = res.videos.slice(0, 1);
            let resp = [];
            for (var i in videos) {
                resp.push(`${videos[i].url}`);
            }
            message.channel.send(resp.join("\n"))
        });
    },
};
