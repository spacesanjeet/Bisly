const figlet = require('figlet');

module.exports = {
    name: 'ascii',
    description: 'gets you a ascii art',
    execute(client, message, args) {
        if (!args.join(' ')) 
        	message.channel.send('Please, provide text to format in ASCII! Usage: ascii <text>').then(msg => {msg.delete(8000)});
        else if (args.join(' ').length > 16) 
        	message.channel.send('Only 16 characters are admitted!')
        else
        	figlet(args.join(' '), (err, data) => {
            	message.channel.send('```' + data + '```')
        });
    },
};
