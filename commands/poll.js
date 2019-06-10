const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'poll',
    description: 'make a simple poll',
    async execute(client, message, args) {
        //if(!args[0]) return message.channel.send("Please specify a question!");
        if(!args.join(" ").endsWith("?")) return message.channel.send("Plesae specify a question!").then(m => {m.delete(4000)});
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Poll created by ${message.author.username}`)
        .setDescription(args.join(' '))
        .setFooter("React to vote")
        .setTimestamp(new Date());
        let msg = await message.channel.send(embed);
        await msg.react('✅');
        await msg.react('❎');
        message.delete({timeout: 1000});
    },
};


module.exports = {
    name: 'poll',
    description: 'make a simple poll',
    async execute(client, message, args) {
        //if(!args[0]) return message.channel.send("Please specify a question!");
        if(!args.join(" ").endsWith("?")) return message.channel.send("Plesae specify a question!");
        let poll_message = args.join(" ");
        let msg = await message.channel.send(poll_message);
        await msg.react('✅');
        await msg.react('❎');
        message.delete({timeout: 1000});
    },
};