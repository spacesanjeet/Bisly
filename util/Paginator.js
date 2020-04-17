class Paginator
{
    constructor(client, channel, content, handler)
    {
        this.index = 0;
        this.client = client;
        this.channel = channel;
        this.content = content;
        this.handler = handler;
    }

    async init()
    {
        let msg = this.handler(this.content, this.index);
        this.message = await this.channel.send(msg);

        await this.message.react("\u25C0");
        await this.message.react("\u23F9");
        await this.message.react("\u25B6");

        this.client.paginators.set(this.message.id, this);
        this.timeout = setTimeout(this.stop, 30 * 1000);
    }

    update(reaction, user)
    {
        if (user.bot) return;

        console.log(`Emoji: ${reaction.emoji.name}`);

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

        reaction.remove(user);

        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.stop, 30 * 1000);
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
        clearTimeout(this.timeout);
        this.client.paginators.delete(this.message.id);
    }
};

module.exports = {
    Paginator
};