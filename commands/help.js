const prefix = process.env.PREFIX
const { Paginator } = require("../util/Paginator.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    execute(client, message, args) {
        const { commands } = message.client;
        if(!args.length) {
            let arr = commands.array();
            let content = new Array();
            
            while (arr.length)
            {
                let n = (arr.length >= 5) ? 5 : (arr.length);
                content.push(arr.splice(0, n));
            }

            // Initiate paginator
            new Paginator(
                client,
                channel,
                content,
                (content, index) => {
                    let content = "Here's a list of my commands:\n";
                    content += content[index].map(cmd => `**${cmd.name}**: ${cmd.description}\n`);
                    content += `\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`;

                    let embed = new MessageEmbed();
                    embed.setTitle("Bisly's Manual");
                    embed.setDescription(content);

                    return embed;
                }
            );
        }

        const data = [];
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
        return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    }
};
