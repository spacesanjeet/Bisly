module.exports = {
	name: '8ball',
	description: 'Ask Bisly your questions and get quick responses',
  guildOnly: true,
	aliases: ['8b'],
  usage: '[question]',
  cooldown: 2,
  execute(client, message, args) {
    	if(!args.join(" ").endsWith("?")) return message.channel.send("Ask a valid question!");
        //if(!args[0]) return message.channel.send("Ask a vaild question!");
        let question = args.join(" ");
        var sayings = ["It is certain!", "It is decidedly so!", "Without a doubt!", "Yes, definitely!", "You may rely on it!", "As I see it, yes!", "Most Likely!", "Outlook good!", "Yes!", "Signs point to yes!", "Reply hazy try again!", "Ask again later!"]
        var result = Math.floor((Math.random() * sayings.length) + 0);
        message.channel.send("💬" + sayings[result])
    },
};
