let hentai = require('./hentai');
let autohentai;

console.log('[CPSCMD][NSFW][hentai] Building objects...');

hentai.metadata = {
  category: require('../').category,
  description: 'The name of this command is self explanatory.',
  usage: 'hentai',
  example: 'hentai',
  perm: [['global.nsfw.boobs.boobs']],
};

console.log('[CPSCMD][NSFW][hentai] Build objects complete!');
module.exports = [
  [hentai.name, hentai],
];
