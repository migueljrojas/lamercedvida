'use strict';

var Videos = require('../videos');

describe('Videos View', function() {

  beforeEach(function() {
    this.videos = new Videos();
  });

  it('Should run a few assertions', function() {
    expect(this.videos);
  });

});
