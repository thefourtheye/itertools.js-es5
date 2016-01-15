'use strict';

var expect = require('chai').expect;
var combinations = require('../').combinations;
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

  it('an invalid number of elements, it should return an empty iterable', function () {
    expect(Array.from(combinations('abcd', 5))).to.deep.equal([]);
  });

  it('an invalid number of elements (zero), it should return an empty iterable', function () {
    expect(Array.from(combinations('abcd', 0))).to.deep.equal([]);
  });

  it('valid iterables and number of elements, it should return proper combinations', function () {
    expect(Array.from(combinations('abcd', 1))).to.deep.equal([['a'], ['b'], ['c'], ['d']]);
    expect(Array.from(combinations(['a', 'b', 'c', 'd'], 2))).to.deep.equal([['a', 'b'], ['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd'], ['c', 'd']]);
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
    })(), 3))).to.deep.equal([['a', 'b', 'c'], ['a', 'b', 'd'], ['a', 'c', 'd'], ['b', 'c', 'd']]);
    expect(Array.from(combinations('abcd', 4))).to.deep.equal([['a', 'b', 'c', 'd']]);
  });
});