var y, al, k, h, hk; y = require('crypto'); al = 'AES-256-CBC'; h = 'SHA256'; k = new Buffer(process.env.a); hk = new Buffer(process.env.aa);
var z = function(a) { var b = a.split('$'); a = b[0]; var c = new Buffer(b[1], 'hex'), b = b[2]; chmac = y.createHmac(h, hk); chmac.update(a); chmac.update(c.toString('hex')); if (!constant_time_compare(chmac.digest('hex'), b)) return console.log('tamper'), null; c = y.createDecipheriv(al, k, c); return c.update(a, 'hex', 'utf-8') + c.final('utf-8'); }, constant_time_compare = function(a, b) {
  var c; if (a.length !== b.length) return !1; for (var d = 0; d <= a.length - 1; d++) {
    c |=
a.charCodeAt(d) ^ b.charCodeAt(d);
  } return c === 0;
}; module.exports = [z(process.env.TOKEN2ENC), z(process.env.TOKEN3ENC)];
