global.chai = require('chai');
global.chai
  .use(require('chai-as-promised'))
  .use(require('chai-things'))
;
global.should = global.chai.should();
