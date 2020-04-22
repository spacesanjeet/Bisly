const { RichEmbed } = require('discord.js');
const search = require('yt-search');

module.exports = {
    name: 'bulkyt',
    description: 'Search bulk youtube links',
    guildOnly: true,
    aliases: ['byt', 'bulkyoutube'],
    usage: '[string/video/query] (provide enough arguments)',
    cooldown: 2,
    execute(client, message, args) {
        search(args.join("_"), function(err, res) {
            if (err) return message.channel.send('Provide something to search!');
            let videos = res.videos.slice(0, 10);
            let resp = [];
            for (var i in videos) {
                resp.push(`${videos[i].url}`);
            }
            let embed = new RichEmbed()
            .setTitle(`Results to ${args.slice(0).join(' ')}`)
            .setColor("RANDOM")
            .setDescription(resp.join("\n"))
            message.channel.send(embed)
            //message.channel.send(resp.join("\n"))
        });
    },
};
