'use strict';

var DonateCta = require('../donate-cta');

describe('DonateCta View', function() {

  beforeEach(function() {
    this.donateCta = new DonateCta();
  });

  it('Should run a few assertions', function() {
    expect(this.donateCta);
  });

});
