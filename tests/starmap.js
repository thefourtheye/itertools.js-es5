'use strict';

var expect = require('chai').expect;
var starmap = require('../').starmap;

describe('[Failure Cases] when starmap is passed', function () {

  it('lesser than two arguments, it should throw an error', function () {
    expect(function () {
      return starmap();
    }).to.throw(TypeError, 'starmap expected 2 arguments, got 0');
    expect(function () {
      return starmap(1);
    }).to.throw(TypeError, 'starmap expected 2 arguments, got 1');
  });

  it('more than two arguments, it should throw an error', function () {
    expect(function () {
      return starmap(1, 2, 3);
    }).to.throw(TypeError, 'starmap expected 2 arguments, got 3');
    expect(function () {
      return starmap(1, 2, 3, 4);
    }).to.throw(TypeError, 'starmap expected 2 arguments, got 4');
  });

  it('an invalid callable object, it should throw an error', function () {
    expect(function () {
      return starmap(1, 2);
    }).to.throw(TypeError, '\'Number\' object is not callable');
  });

  it('invalid iterable objects, it should throw error', function () {
    expect(function () {
      return starmap(function () {
        return 1;
      }, null);
    }).to.throw(TypeError, '\'Null\' object is not iterable');
    expect(function () {
      return starmap(function () {
        return 1;
      }, undefined);
    }).to.throw(TypeError, '\'Undefined\' object is not iterable');
  });

  it('a valid iterable object which produces non-iterables, it should throw an error', function () {
    expect(function () {
      return Array.from(starmap(function () {
        return 1;
      }, [null]));
    }).to.throw(TypeError, '\'Null\' object is not iterable');
    expect(function () {
      return Array.from(starmap(function () {
        return 1;
      }, [undefined]));
    }).to.throw(TypeError, '\'Undefined\' object is not iterable');
  });
});

describe('[Happy Cases] when starmap is passed', function () {

  it('an empty iterable, it should return an empty iterable', function () {
    expect(Array.from(starmap(function () {
      return 1;
    }, []))).to.deep.equal([]);
  });

  it('a valid function and an iterable, it should give a valid iterable', function () {
    expect(Array.from(starmap(function (a, b) {
      return a + b;
    }, [[1, 2], [3, 4], [5, 6]]))).to.deep.equal([3, 7, 11]);
  });

  var sum = function sum() {
    return Array.from(arguments).reduce(function (result, current) {
      return result + current;
    }, 0);
  };

  it('an iterable which produces iterables of varied lengths, it should give a valid iterable', function () {
    expect(Array.from(starmap(sum, [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]))).to.deep.equal([1, 5, 15, 34]);
  });
});