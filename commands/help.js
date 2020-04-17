const prefix = process.env.PREFIX
const { Paginator } = require("../util/Paginator.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    async execute(client, message, args) {
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
            await new Paginator(
                client,
                message.channel,
                content,
                (content, index) => {
                    let desc = content[index].map(cmd => (`**${cmd.name}**: ${cmd.description}\n`));
                    desc += `\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`;

                    let embed = new RichEmbed()
                        .setTitle("Bisly's Manual")
                        .setDescription(desc);

                    return embed;
                }
            ).init();

            return;
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
