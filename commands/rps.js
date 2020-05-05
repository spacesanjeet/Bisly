const { MessageCollector } = require('discord.js');

module.exports = {
    name: 'rps',
    description: 'Play rock-paper-scissors with the me',
    guildOnly: true,
    usage: '[command, then choose between (r), (p), (s)]',
    example: '[r/p/s]',
    cooldown: 5,
    execute(client, message, args) {
        let choice = ["rock","paper","scissors"];
        let cs = 0
        let ps = 0
        message.channel.send("Game Started! Choose :- rock(r), paper(p) or scissors(s)")
       let resp = new MessageCollector(message.channel,m=>m.author.id==message.author.id,{time:15000})
       resp.on('collect',message=>{
       let cont = message.content.toLowerCase();
       let ch = choice[Math.floor(Math.random()*choice.length)];
       if(cont=='rock' || cont=='r'){if(ch=='paper'){message.channel.send("My choice :- Paper \nYou lose! So sad...😢");cs+=1}
                else if(ch=='scissors'){message.channel.send("My choice :- Scissors\nYou won! Hurray..🎉!!");ps+=1}
                else if(ch=='rock'){message.channel.send("My choice :- Rock\nIt's a tie! Try once more..👍")}
               }
       else if(cont=='paper' || cont=='p'){if(ch=='paper'){message.channel.send("My choice :- Paper \nIt's a tie! Try once more..👍")}
                else if(ch=='scissors'){message.channel.send("My choice :- Scissors\nYou lose! So sad...😢");cs+=1}
                else if(ch=='rock'){message.channel.send("My choice :- Rock\nYou won!Hurray..🎉");ps+=1}
               }

       else if(cont=='scissors' || cont=='s'){if(ch=='paper'){message.channel.send("My choice :- Paper \nYou won! Hurray..🎉");ps+=1}
               else if(ch=='scissors'){message.channel.send("My choice :- Scissors\nIt's a tie! Try once more..👍")}
               else if(ch=='rock'){message.channel.send("My choice :- Rock\nYou lose! So sad...😢");cs+=1}
               }

       else{
            message.channel.send("That was not a valid choice!")
           }
    });
       resp.on('end',(collected,reason)=>{
       message.channel.send("Game Over\nHere are the Scores :-\n"+`${message.author.username} : `+ps+"  |  Koyna : "+cs);

    });
    },
};
