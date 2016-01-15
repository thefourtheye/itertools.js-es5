'use strict';

var expect = require('chai').expect;
var combinations = require('../').combinations_with_replacement;
var ValueError = require('valueerror');

describe('[Failure Cases] when combinations is passed', function () {

  it('an invalid integer, it should throw an error', function () {
    expect(function () {
      return combinations('abcd', 'abcd');
    }).to.throw(TypeError, /abcd cannot be interpreted as an integer/);
  });

  it('a negative integer, it should throw an error', function () {
    expect(function () {
      return combinations('abcd', -3);
    }).to.throw(ValueError, /r must be non-negative/);
  });

  it('an invalid iterable, it should throw an error', function () {
    expect(function () {
      return combinations(function () {
        return 1;
      }, 1);
    }).to.throw(TypeError, /'Function' object is not iterable/);
  });
});

describe('[Happy Cases] when combinations is passed', function () {

  it('an invalid number of elements (zero), it should return an empty iterable', function () {
    expect(Array.from(combinations('abcd', 0))).to.deep.equal([]);
  });

  it('valid iterables and number of elements, it should return proper combinations', function () {
    expect(Array.from(combinations('abcd', 1))).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
    expect(Array.from(combinations(['a', 'b', 'c', 'd'], 2))).to.deep.equal([['a', 'a'], ['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'b'], ['b', 'c'], ['b', 'd'], ['c', 'c'], ['c', 'd'], ['d', 'd']]);
    expect(Array.from(combinations(regeneratorRuntime.mark(function _callee() {
      var _arr, _i, val;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _arr = ['a', 'b', 'c', 'd'];
              _i = 0;

            case 2:
              if (!(_i < _arr.length)) {
                _context.next = 9;
                break;
              }

              val = _arr[_i];
              _context.next = 6;
              return val;

            case 6:
              _i++;
              _context.next = 2;
              break;

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    })(), 3))).to.deep.equal([['a', 'a', 'a'], ['a', 'a', 'b'], ['a', 'a', 'c'], ['a', 'a', 'd'], ['a', 'b', 'b'], ['a', 'b', 'c'], ['a', 'b', 'd'], ['a', 'c', 'c'], ['a', 'c', 'd'], ['a', 'd', 'd'], ['b', 'b', 'b'], ['b', 'b', 'c'], ['b', 'b', 'd'], ['b', 'c', 'c'], ['b', 'c', 'd'], ['b', 'd', 'd'], ['c', 'c', 'c'], ['c', 'c', 'd'], ['c', 'd', 'd'], ['d', 'd', 'd']]);
    expect(Array.from(combinations('abcd', 4))).to.deep.equal([['a', 'a', 'a', 'a'], ['a', 'a', 'a', 'b'], ['a', 'a', 'a', 'c'], ['a', 'a', 'a', 'd'], ['a', 'a', 'b', 'b'], ['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'd'], ['a', 'a', 'c', 'c'], ['a', 'a', 'c', 'd'], ['a', 'a', 'd', 'd'], ['a', 'b', 'b', 'b'], ['a', 'b', 'b', 'c'], ['a', 'b', 'b', 'd'], ['a', 'b', 'c', 'c'], ['a', 'b', 'c', 'd'], ['a', 'b', 'd', 'd'], ['a', 'c', 'c', 'c'], ['a', 'c', 'c', 'd'], ['a', 'c', 'd', 'd'], ['a', 'd', 'd', 'd'], ['b', 'b', 'b', 'b'], ['b', 'b', 'b', 'c'], ['b', 'b', 'b', 'd'], ['b', 'b', 'c', 'c'], ['b', 'b', 'c', 'd'], ['b', 'b', 'd', 'd'], ['b', 'c', 'c', 'c'], ['b', 'c', 'c', 'd'], ['b', 'c', 'd', 'd'], ['b', 'd', 'd', 'd'], ['c', 'c', 'c', 'c'], ['c', 'c', 'c', 'd'], ['c', 'c', 'd', 'd'], ['c', 'd', 'd', 'd'], ['d', 'd', 'd', 'd']]);
  });
});