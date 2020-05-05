module.exports = {
	name: 'cinvite',
	description: 'Create a temporary server invite',
  guildOnly: true,
	aliases: ['ci'],
  usage: ' ',
	cooldown: 2,
	async execute(client, message, args) {
    let invite = await message.channel.createInvite({
    maxAge: 1000, //maximum time for the invite, in milliseconds
    maxUses: 3 //maximum times it can be used
    });
    message.reply(`${invite ? "Here is you invite " + invite : "Sorry, can't generate the invite"}`);
	},
};
