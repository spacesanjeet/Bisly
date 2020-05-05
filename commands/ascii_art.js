const figlet = require('figlet');

module.exports = {
	name: 'ascii',
	description: 'Give your message some ascii styling',
  guildOnly: true,
	aliases: ['art'],
  usage: '[string]',
  example: 'spacesanjeet',
  cooldown: 3,
  execute(client, message, args) {
    	if(args.join(' ').length > 16) return message.channel.send('Only 16 characters are admitted!')
      if (!args.join(' ')) return message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => msg.delete({timeout: 10000}));
      figlet(args.join(' '), (err, data) => {
          message.channel.send('```' + data + '```')
      });
  },
};
