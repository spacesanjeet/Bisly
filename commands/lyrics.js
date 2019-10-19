const { RichEmbed } = require('discord.js');
const api = require('some-random-api');
const request = require('request');

module.exports = {
    name: 'lyrics',
    description: 'get lyrics',
    execute(client, message, args) {
        let lyrics = args.join(" ")
        if(!lyrics) return message.channel.send("You didn't provide the name of the song!");
        const url = 'https://some-random-api.ml/lyrics';
        const lyric = `${url}?title=${lyrics.split(/ +/g).join('_')}`;

        request({url: lyric, json: true}, (err, res, body) => {
        if (typeof body.author == 'undefined') return message.channel.send("Can't find lyrics for the song!")
      
        let author = body.author;
        let image = body.thumbnail.genius;
        let title = body.title;
        let lyr = `__${author} - **${title}**__\n\n${body.lyrics}`;
      
        let max = 2048;
        let start = 0, end = max;
        let ar = new Array();
      
        while (start < lyr.length) {
            let x = lyr.substring(start, end);
        
        //ar.push(x);
        let embed = new RichEmbed()
        .setColor('#7289da')
        .setThumbnail(image)
        .setDescription(x)
        .setTimestamp(new Date())
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
        
        message.channel.send(embed)
        
        start += max; end += max;
    }
    });
    },
};
