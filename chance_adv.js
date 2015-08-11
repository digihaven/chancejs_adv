var Chance = require('chance');

require('./bin/bodymass')(Chance);
require('./bin/genitalia')(Chance);
require('./bin/virginity')(Chance);
require('./bin/breast')(Chance);

module.exports = Chance;