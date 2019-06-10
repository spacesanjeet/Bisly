module.exports = {
    name: 'prune',
    description: 'prune messages',
    execute(client, message, args) {
        let mss=message.content.split(' ');
        if(mss[0]!=null){
        var num=parseInt(mss[0]);
            let perms = message.member.permissions;
            let prm = perms.has("MANAGE_MESSAGES");
            if(prm==true){
            if(num>0){
            message.channel.bulkDelete(num+1, true)
            .then((m)=>{
             let k=m.size-1;
             message.channel.send(`${k} messages are deleted from this channel by **${message.author.username}**`).then(m => {m.delete(1000)});
        })
        .catch(err => {
            console.error(err);
            message.channel.send('There was an error while trying to prune messages in this channel!');
        });
        }else{
            message.channel.send('Can\'t delete '+num+' messages, Choose between 1-99');
        }
        }else{
          message.channel.send(`${message.author} you don\'t have the permission to prune`);
        }}
    },
};