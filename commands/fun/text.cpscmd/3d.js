const cb= '```';
const asciify = require('asciify');

const asciiCooldown = new Map();
const COOLDOWN = 60*1000;

module.exports = {
  name:'3d',
  async func(msg, { send, prefix, content, guild }) {
    const split = content.substring(`${prefix}3d2 `.length).split(/\s+/);
    if(split.length <= 0||split.some(w=>w.length<=0||w.match(/\s+/g)))
      send ('You must provide at least one word to 3dtext!');
    else if(split.length<=5)
      if(!asciiCooldown.get(guild.id)){
        asciiCooldown.set(guild.id, true);
        setTimeout(()=>asciiCooldown.set(guild.id, false), COOLDOWN);
        split.forEach(word=> (word&&!word.match(/\s+/))&&asciify( word, {font: 'larry3d'}, (e,r)=>send(`${cb}${r.length<1900?r:word.length<1800?'too long to 3d text:\n'+word:'something too long'}${cb}`) ));
      }else
        send('Woah there this command has a 1 minute cooldown please wait before trying that again!');
    else
      send('Too many words to 3dtext!');
  }
};
