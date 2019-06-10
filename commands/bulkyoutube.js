const { RichEmbed } = require('discord.js');
const search = require('yt-search');

module.exports = {
    name: 'bulkyt',
    description: 'search youtube',
    execute(client, message, args) {
        search(args.join("_"), function(err, res) {
            if (err) return message.channel.send('Sorry, something went wrong!');
            let link = "http://www.youtube.com"
            let videos = res.videos.slice(0, 10);
            let resp = [];
            for (var i in videos) {
                resp.push(`${link+videos[i].url}`);
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