var Chance = require('chance');

require('./bin/bodymass')(Chance);
require('./bin/genitalia')(Chance);
require('./bin/virginity')(Chance);
require('./bin/breast')(Chance);

require('./bin/std')(Chance);
require('./bin/inoculations')(Chance);

module.exports = Chance;