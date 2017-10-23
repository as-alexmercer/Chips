module.exports = {
    name:'instaban',
    async func(msg, { send, reply, member, author, content, args, channel, guild, gMember }) {
    let memberToUse;
    try{ //get mention:
      console.log("Trying to find user by mention..");
      if(!args[0]) return reply("Please specify a user to ban!");
      let target = (args[0].match(Constants.patterns.MENTION)||[0,null])[1];
      let chipstarget = (args[0].match(Constants.users.CHIPS)||[0,null])[1];
      if(!target) return reply("Please specify a valid user to ban!");
      memberToUse = gMember(target);
      if(chipstarget)
        return send('You can\'t ban me!');
      if(memberToUse==null)
        return reply("Invalid member!");
      if(member.id == memberToUse.id)
        return reply("I can't let you ban yourself >.>");
    }catch(err){  //gMember failed perhaps:
      send('Could not ban...');
      throw err;
    }

    let reason;
    if(args[1])
      reason = content.substring(content.indexOf(args[1]));
        if(reason == null)
            reason = "No reason provided.";

    const embed = new Discord.MessageEmbed;
    embed
      .setAuthor(`Ban confirmation - Banning ${memberToUse.user.tag}`, memberToUse.user.displayAvatarURL)
      .setColor("RED")
      .setTitle(question)
      .setDescription(reason || "No reason")
      .setTimestamp(new Date())
      .setThumbnail(Constants.images.WARNING);
    await reply('', { embed } );

        if(m.author.id!=author.id) return;
        
        if(!memberToUse.bannable) return reply("Uh oh! I can't ban this user! Perhaps I am missing perms..");

        console.log("[Ban] Banning...");
        let emb = new Discord.MessageEmbed()
          .setAuthor("Ban Notice!")
          .setTitle(`You were banned from the server: ${guild.name}!`)
          .setColor(9109504)
          .setThumbnail(Constants.images.WARNING)
          .addField("Ban reason: ", `${reason}`, true);
          client.users.fetch(memberToUse.id)
          .then(u=>u.send('Uh oh!', {embed: emb}))
          .then(()=>{
            m.reply("Banning!");
            memberToUse.ban({reason: `[BAN]: [Author]: ${m.author.tag} [Reason]: ${reason}`});
          }).catch(()=>{
            m.reply("Could not dm the user, but banning anyway!");
            memberToUse.ban({reason: `[BAN]: [Author]: ${m.author.tag} [Reason]: ${reason}`});
          });
      }
    };
