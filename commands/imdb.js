const { RichEmbed } = require('discord.js');
const nameToImdb = require("name-to-imdb");
const imdb = require('imdb');

module.exports = {
  name: 'imdb',
  description: 'Get basic info about Movies and shows',
  guildOnly: true,
  aliases: ['movie'],
  usage: 'string',
  cooldown: 3,
  execute(client, message, args) {
    let movie = args.join(' ')
    if(!movie) return message.channel.send('Enter a movie to search for!');
    nameToImdb({name: movie}, function(err, res, inf){
      if(res == null) return message.channel.send("Can't find that movie!");
      let movie_id = res;
      console.log(res);
      imdb(movie_id, function(err, data) {
        if (data)
        var embed;
        embed = new RichEmbed()
        .setColor('#fcba03')
        .setTitle(data.title)
        .setThumbnail(data.poster)
        .setDescription(`**Description:** ${data.description}\n**Rating:** ${data.rating}\n**Genre/Release:** ${data.genre}`)
        .setFooter(`Metascore: ${data.metascore}`)
        .setTimestamp(new Date())
        message.channel.send(embed)
        });
      });
  },
};
