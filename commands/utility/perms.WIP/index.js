let perm = require('./perm');
console.log('[CPSCMD][UTILITY][perm] Building objects...');

perm.metadata = {
  category: require('../').category,
  description: 'This command does everything related to permissions! (incomplete)',
};

console.log('[CPSCMD][UTILITY][perm] Build objects complete!');
module.exports = [
  [perm.name, perm],
];
