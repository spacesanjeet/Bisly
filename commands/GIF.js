const gifGenerator = require('frinkiac-gif-generator');

module.exports = {
    name: 'gif',
    description: 'Get GIFs',
    execute(client, message, args) {
        let GIF_search = args.join(" ")
        gifGenerator(GIF_search).then((gif) => {
            message.channel.send(gif);
        })
        .catch(error => {
            message.channel.send("Sorry, something went wrong!");
            console.log(error)
        });
    },
};
