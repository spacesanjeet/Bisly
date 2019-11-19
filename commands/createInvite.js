module.exports = {
	name: 'cinvite',
	description: 'Create a temporary server invite.',
	async execute(client, message, args) {
    let invite = await message.channel.createInvite({
    maxAge: 1000, //maximum time for the invite, in milliseconds
    maxUses: 3 //maximum times it can be used
    });
    message.reply(`${invite ? "Here is you invite " + invite : "Sorry, can't generate the invite"}`);
	},
};
