module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(client, message, args) {
		message.channel.send('Pong!').then(m => m.edit("Pong! Response Took " + (m.createdTimestamp - message.createdTimestamp) + "ms"));
	},
};