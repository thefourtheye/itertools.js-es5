'use strict';

var iterator = require('./utils').iterator;

function cycle(iterable) {
  if (arguments.length !== 1) {
    throw new TypeError('cycle expected 1 arguments, got ' + arguments.length);
  }

  var iter = iterator(iterable);

  return regeneratorRuntime.mark(function _callee() {
    var items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, i;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            items = [];
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = iter[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 14;
              break;
            }

            value = _step.value;

            items.push(value);
            _context.next = 11;
            return value;

          case 11:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 20:
            _context.prev = 20;
            _context.prev = 21;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 23:
            _context.prev = 23;

            if (!_didIteratorError) {
              _context.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context.finish(23);

          case 27:
            return _context.finish(20);

          case 28:
            if (items.length) {
              _context.next = 30;
              break;
            }

            return _context.abrupt('return');

          case 30:
            if (!items) {
              _context.next = 40;
              break;
            }

            i = 0;

          case 32:
            if (!(i < items.length)) {
              _context.next = 38;
              break;
            }

            _context.next = 35;
            return items[i];

          case 35:
            i += 1;
            _context.next = 32;
            break;

          case 38:
            _context.next = 30;
            break;

          case 40:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 16, 20, 28], [21,, 23, 27]]);
  })();
}

module.exports = cycle;