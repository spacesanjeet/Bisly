module.exports = {
    name: 'say',
    description: 'Make me say something for you',
    aliases: ['echo'],
    guildOnly: true,
    usage: '[string]',
    cooldown: 3,
    execute(client, message, args) {
        message.delete()
        message.channel.send(message.content.substring(6, message.content.length));
    },
};
