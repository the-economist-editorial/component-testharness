global.chai = require('chai');
global.chai
  .use(require('chai-as-promised'))
  .use(require('chai-things'))
  .use(require('chai-spies'))
;
global.should = global.chai.should();
