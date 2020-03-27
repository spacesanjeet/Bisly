module.exports = {
    name: 'poll',
    description: 'Make a simple poll',
    guildOnly: true,
    usage: '[question for poll]',
    cooldown: 5,
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
