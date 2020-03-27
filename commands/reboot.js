 const token = process.env.TOKEN;
const id = process.env.OwnerID;

module.exports = {
	name: 'reboot',
	description: 'Reloads the bot',
    guildOnly: true,
	aliases: ['reset', 'logout'],
    usage: '',
    cooldown: 3,
    execute(client, message, args) {
		if (!message.author.id == id) return message.channel.send(`You can't use this command!`);
		client.destroy() //destroying the bot login status
    	client.login(process.env.TOKEN) //logging back in into discord
    	message.channel.send(`Rebooted successfully. API latency is ${Math.round(client.ping)}ms`);
    },
};

