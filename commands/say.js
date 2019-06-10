module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(client, message, args) {
        message.delete()
		message.channel.send(message.content.substring(6, message.content.length));
    },
};