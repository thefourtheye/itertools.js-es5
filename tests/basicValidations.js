'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var expect = require('chai').expect;
var itertools = require('../');

describe('when itertools items\' types are checked', function () {
  it('they should be functions', function () {
    expect(_typeof(itertools.accumulate)).to.equal('function');
    expect(_typeof(itertools.chain)).to.equal('function');
    expect(_typeof(itertools.combinations_with_replacement)).to.equal('function');
    expect(_typeof(itertools.combinations)).to.equal('function');
    expect(_typeof(itertools.compress)).to.equal('function');
    expect(_typeof(itertools.count)).to.equal('function');
    expect(_typeof(itertools.cycle)).to.equal('function');
    expect(_typeof(itertools.dropwhile)).to.equal('function');
    expect(_typeof(itertools.filterfalse)).to.equal('function');
    expect(_typeof(itertools.groupby)).to.equal('function');
    expect(_typeof(itertools.islice)).to.equal('function');
    expect(_typeof(itertools.permutations)).to.equal('function');
    expect(_typeof(itertools.product)).to.equal('function');
    expect(_typeof(itertools.repeat)).to.equal('function');
    expect(_typeof(itertools.starmap)).to.equal('function');
    expect(_typeof(itertools.takewhile)).to.equal('function');
    expect(_typeof(itertools.tee)).to.equal('function');
    expect(_typeof(itertools.zip_longest)).to.equal('function');
  });
});