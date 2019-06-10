const { RichEmbed } = require('discord.js');
const search = require('yt-search');

module.exports = {
    name: 'yt',
    description: 'search youtube',
    execute(client, message, args) {
        search(args.slice(0).join(' '), function(err, res) {
            if (err) return message.channel.send('Sorry, something went wrong!');
            let link = "http://www.youtube.com"
            let videos = res.videos.slice(0, 1);
            let resp = [];
            for (var i in videos) {
                resp.push(`${link+videos[i].url}`);
            }
            message.channel.send(resp.join("\n"))
        });
    },
};