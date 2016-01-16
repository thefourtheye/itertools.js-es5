'use strict';

var util = require('util');

function iterator(iterable) {
  if (iterable == null) {
    throw new TypeError(util.format('\'%j\' object is not iterable', Object.prototype.toString.call(iterable)).replace(/"\[object |\]"/g, ''));
  }
  if (iterable[Symbol.iterator]) {
    return regeneratorRuntime.mark(function _callee() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;
              _iterator = iterable[Symbol.iterator]();

            case 5:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 12;
                break;
              }

              value = _step.value;
              _context.next = 9;
              return value;

            case 9:
              _iteratorNormalCompletion = true;
              _context.next = 5;
              break;

            case 12:
              _context.next = 18;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 18:
              _context.prev = 18;
              _context.prev = 19;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 21:
              _context.prev = 21;

              if (!_didIteratorError) {
                _context.next = 24;
                break;
              }

              throw _iteratorError;

            case 24:
              return _context.finish(21);

            case 25:
              return _context.finish(18);

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })();
  } else {
    return regeneratorRuntime.mark(function _callee2() {
      var key;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = regeneratorRuntime.keys(iterable);

            case 1:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 7;
                break;
              }

              key = _context2.t1.value;
              _context2.next = 5;
              return key;

            case 5:
              _context2.next = 1;
              break;

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })();
  }
}

module.exports = iterator;