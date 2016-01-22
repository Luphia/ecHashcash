var crypto = require('crypto')
  , default_strength = 3

var generateToken = function (strength) {
  var token;
  var hex = new RegExp("^[\\da-fA-F]+$");
  if(typeof(strength) === 'string' && hex.test(strength)) { token = strength.toLowerCase(); }
  else {
    token = '';
    if(typeof(strength) === 'number' && strength > 0) {}
    else { strength = default_strength; }
    for(var i = 0; i < strength; i++) { token += '0'; }
  }
  return token;
};
var check = function (content, hashcash, strength) {
  var token = generateToken(strength);
  return checkToken(content, hashcash, token);
};
var checkToken = function (content, hashcash, token) {
  if(typeof(hashcash) !== 'string') { hashcash = hashcash.toString(); }
  var hash = crypto.createHash('sha1').update(content).update(hashcash).digest('hex');
  return hash.indexOf(token) == 0;
}
var generate = function (content, strength, cb) {
  var cash = -1;
  var token = generateToken(strength);
  while (!checkToken(content, ++cash, token)) {}
  return cash;
};

var ecHashcash = function (content, strength, cb) {
  return generate(content, strength, cb);
};
ecHashcash.generateToken = generateToken;
ecHashcash.generate = generate;
ecHashcash.check = check;

module.exports = ecHashcash;
