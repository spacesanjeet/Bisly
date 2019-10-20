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
