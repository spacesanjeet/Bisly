module.exports = {
	name: 'spam',
	description: 'spam certain messages in a certain channel',
	execute(client, message, args) {
		//let spam_channel = message.guild.channels.find("name", "spam");
    	//if(!spam_channel) return message.channel.send("This command can only be used in spam channel!");
    	let spam_channel = message.guild.channels.find(c => c.name.match(/spam/g))
    	if(message.channel != spam_channel) {
    		message.channel.send("This command can only be used in the channel named 'spam'.");
    	}
    	else {
    		let spam_no = args[0];
    		if(!spam_no) return message.channel.send("You didn't provide how much to spam!");
            if(!spam_no) return message.channel.send(`Correct usage is:- k!spam <limit> <message>`).then(m => {m.delete(8000)});
            if(spam_no > 99) return message.channel.send("Can't spam more than 99 message in once").then(m => {m.delete(4000)});
			let spam_split = args.join(" ")
			let spam_message = spam_split.split(spam_no).join(" ");
			for(var i=0; i <spam_no; i++) spam_channel.send(spam_message);
    	}
	},
};
