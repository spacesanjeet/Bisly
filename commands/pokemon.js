const { RichEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    name: 'pokemon',
    description: 'Get pokemon details',
    aliases: ['pokedex', 'dex', 'poke'],
    guildOnly: true,
    usage: '[pokemonName]',
    cooldown: 2,
    execute(client, message, args) {
        let entry = args;
        let poke_name = entry.join(" ").replace(/\./g, '').replace(/\s+/g, '-');
        let poke_gif = entry.join("");
        //let name = args.join("-");
      
        if(!entry) return message.channel.send("Provide a pokemon name!");
        
        const link = "https://some-random-api.ml/pokedex?pokemon=" + `${poke_name}`;
        
        request({url: link, json: true}, (err, res, body) => {
            if (typeof body.name == 'undefined') return message.channel.send("Can't find that pokemon!")
            
            var evolutionLine_message;
          
            if (body.family.evolutionLine.length == 0)
                evolutionLine_message = "This pokemon doesn't evolve.";
            else
                evolutionLine_message = `${body.family.evolutionLine.join(" → ")}`;
            
            const pokemon_sprite = `http://play.pokemonshowdown.com/sprites/xyani/${poke_gif}.gif`;
            
            let embed = new RichEmbed()
              .setTitle(body.name)
              .setColor("#F70827")
              .setTitle(`${body.name.slice(0,1).toUpperCase()}${body.name.slice(1)}`)
              .setDescription(body.description)
              .addField("Basics:", `**Id: **${body.id}\n**Type: **${body.type.join(", ")}\n**Species: **${body.species.join(", ")}\n**Abilities: **${body.abilities.join(", ")}\n**Height: **${body.height}\n**Weight: **${body.weight}\n**Base experience: **${body.base_experience}\n**Gender: **${body.gender.join(", ")}\n**Egg Groups: **${body.egg_groups.join(", ")}`, true)
              .addField("Stats:", `**Hp: **${body.stats.hp}\n**Attack: **${body.stats.attack}\n**Defense: **${body.stats.defense}\n**SpecialAtk: **${body.stats.sp_atk}\n**SpecialDef: **${body.stats.sp_def}\n**Speed: **${body.stats.speed}\n**Total: **${body.stats.total}`, true)
              .addField("Family:", `**Evolution Stage: **${body.family.evolutionStage}\n**Evolution line: **${evolutionLine_message}`)
              .setImage(pokemon_sprite)
              .setTimestamp(new Date())
              .setFooter(`Requested by: ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
            
            message.channel.send(embed)
        });
    },
};
