const { RichEmbed } = require('discord.js');
const os = require('os');
const moment = require('moment');

module.exports = {
	name: 'stats',
	description: 'Get real time stats about me',
  guildOnly: true,
  aliases: ['statistics'],
  usage: '[command]',
  cooldown: 5,
	execute(client, message, args) {
		    class Convert {
        		constructor(seconds) {
          			this.seconds = Number(seconds);

          			this.d = Math.floor(this.seconds / (3600*24));
          			this.h = Math.floor(this.seconds % (3600*24) / 3600);
          			this.m = Math.floor(this.seconds % 3600 / 60);
          			this.s = Math.floor(this.seconds % 3600 % 60);

          			var d = this.d, h = this.h, m = this.m, s = this.s;

          			this.dDisplay = d > 0 ? d + (d == 1 ? " day," : " days,") : d + " day,";
          			this.hDisplay = h > 0 ? h + (h == 1 ? " hour," : " hours,") : h + " hour,";
          			this.mDisplay = m > 0 ? m + (m == 1 ? " minute," : " minutes,") : m + " minute,";
          			this.sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : s + " second";

          			return this;
        		}
        		ToDHMS() {
          			return `${this.dDisplay} ${this.hDisplay} ${this.mDisplay} ${this.sDisplay}`;
        		}
        		ToDhms() {
          			return `${this.dDisplay} ${this.h}:${this.m}:${this.s}`
        		}
    		}

    let ram_total = Math.round(100 * (process.memoryUsage().heapTotal / 1048576)) / 100 + "MB";
    let ram_usage = Math.round(100 * (process.memoryUsage().heapUsed / 1048576)) / 100 + "MB";
    let client_uptime = new Convert(client.uptime / 1000).ToDHMS();
    let os_uptime = new Convert(os.uptime()).ToDHMS();
    let process_uptime = new Convert(process.uptime()).ToDHMS();

		let createdAt = moment(client.user.createdAt);
		let create = createdAt.format('MMMM Do YYYY, h:mm:ss a');

    let embed = new RichEmbed()
    .setColor('#F70827')
    .setTitle("Stats")
    .addField("Koyna", `**CreatedAt: **${create}\n**Guilds: **${client.guilds.size}\n**Channels: **${client.channels.size}\n**Users: **${client.guilds.reduce((a, b) => a + b.memberCount, 0)}\n**Discord.js: **v11.5.1\n**Node.js: **${process.version}`)
    .addField("Uptime", `**Client: **${client_uptime}\n**Host OS: **${os_uptime}\n**Process: **${process_uptime}`)
    .addField("Ram", `**Total: **${ram_total}\n**Usage: **${ram_usage}`)
    message.channel.send(embed)

	},
};
