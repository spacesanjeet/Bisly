class Paginator
{
    async constructor(client, channel, content, handler)
    {
        this.index = 0;
        this.client = client;
        this.channel = channel;
        this.content = content;
        this.handler = handler;

        this.init();

        client.paginators.set(message.id, this);
        this.interval = setInterval(this.stop, 30 * 1000);
    }

    async init()
    {
        let msg = this.handler(this.content, this.index);
        this.message = await this.channel.send(msg);

        this.message.react("\u25C0");
        this.message.react("\u23F9");
        this.message.react("\u25B6");
    }

    update(reaction, user)
    {
        if (reaction.emoji.name == "\u25C0")
        {
            this.left();
            this.edit();
        }

        else if (reaction.emoji.name == "\u25B6")
        {
            this.right();
            this.edit();
        }

        else if (reaction.emoji.name == "\u23F9")
        {
            this.stop();
        }

        else return;

        reaction.users.remove(user);

        clearInterval(this.interval);
        this.interval = setInterval(this.stop, 30 * 1000);
    }

    left()
    {
        if (this.index > 0)
        {
            --this.index;
        }
    }

    right()
    {
        if (this.index < this.content.length - 1)
        {
            ++this.index;
        }
    }
    
    edit()
    {
        let msg = this.handler(this.content, this.index);
        this.message.edit(msg);
    }

    stop()
    {
        this.message
    }
};

module.exports = {
    Paginator
};