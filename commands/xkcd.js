const { RichEmbed } = require('discord.js');
const xkcd = require('xkcd-imgs');

module.exports = {
    name: 'xkcd',
    description: 'Get xkcd web comics',
    guildOnly: true,
    usage: '[command]',
    cooldown: 3,
    execute(client, message, args) {
        xkcd.img(function(err, res) {
            if (err) return message.channel.send('Sorry, something went wrong!')
            let image = res.url;
            let des = res.title;
            let embed = new RichEmbed()
            .setTitle("xkcd")
            .setColor("RANDOM")
            .setImage(image)
            .setDescription(des)
            .setTimestamp(new Date())
            message.channel.send(embed)
        });
    },
};
