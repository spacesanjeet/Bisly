const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'joke',
    description: 'get random jokes',
    execute(client, message, args) {
        var jokes = ['Why do men find it difficult to make eye contact? Breasts don’t have eyes.', 'A computer once beat me at chess, but it was no match for me at kick boxing.', 
        'How do you get a sweet 80-year-old lady to say the F word?\nGet another sweet little 80-year-old lady to yell *BINGO*!', 
        'As long as there are tests, there will be prayer in schools.', 'What did one ocean say to the other ocean? Nothing, they just waved.', 
        'A day without sunshine is like, night.', 'Born free, taxed to death.', 'For Sale: Parachute. Only used once, never opened.', 
        'A bank is a place that will lend you money, if you can prove that you don’t need it.', 'What is faster Hot or cold? Hot, because you can catch a cold.', 
        'What’s the difference between a new husband and a new dog? After a year, the dog is still excited to see you.', 
        'Why is it so hard for women to find men that are sensitive, caring, and good-looking?\nBecause those men already have boyfriends.', 
        'What’s the difference between a paycheck and a pen*s? You don’t have to beg your wife to blow your paycheck.', 
        'Love may be blind, but marriage is a real eye-opener.', 'Why did the scientist install a knocker on his door? He wanted to win the No-bell prize!', 
        'When everything’s coming your way, you’re in the wrong lane.', 'I say no to alcohol, it just doesn’t listen.', 
        'If you can’t convince them, confuse them.', 'Whenever I find the key to success, someone changes the lock.', 
        'Why did the bee get married? Because he found his honey.', 'What do you call a boomerang that doesn’t come back? A stick.', 
        'Why is the man who invests all your money called a broker?', 'Time is what keeps things from happening all at once.', 
        'Lottery: a tax on people who are bad at math.', 'If at first you don’t succeed, destroy all evidence that you tried.', 
        'Eat right. Stay fit. Die anyway.', 'I just let my mind wander, and it didn’t come back.', 'IRS: We’ve got what it takes to take what you have got.', 
        'I can handle pain until it hurts.', 'A bargain is something you don’t need at a price you can’t resist.', 'Do not argue with an idiot. He will drag you down to his level and beat you with experience.', 
        'A day without smiling is a day wasted.', 'When tempted to fight fire with fire, remember that the Fire Department usually uses water.', 
        'Man: I want to share everything with you.\nWoman: Let’s start from your bank account.', 'Old age and treachery will overcome youth and skill any time.', 
        '']
        var result = Math.floor((Math.random() * jokes.length) + 0);
        const embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(jokes[result])
        message.channel.send(embed)
    },
};