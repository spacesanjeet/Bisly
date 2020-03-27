module.exports = {
    name: 'ping',
    description: "Check the bot's latency",
    guildOnly: true,
    usage: '[command]',
    async execute(client, message, args) {
        const m = await message.channel.send("Ping!");
        m.edit(`Pong! Response Took ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    },
};
