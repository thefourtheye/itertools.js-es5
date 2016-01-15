'use strict';

var iterator = require('./utils').iterator;

function compress(data, selectors) {
  if (arguments.length > 2) {
    throw new TypeError('compress() takes at most 2 arguments (' + arguments.length + ' given)');
  }

  if (arguments.length < 1) {
    throw new TypeError('Required argument \'data\' (pos 1) not found');
  }

  if (arguments.length < 2) {
    throw new TypeError('Required argument \'selectors\' (pos 2) not found');
  }

  var iterable = iterator(data);
  var selector = iterator(selectors);

  return regeneratorRuntime.mark(function _callee() {
    var iterable_next, selector_next;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            iterable_next = iterable.next();
            selector_next = selector.next();

          case 2:
            if (!(!iterable_next.done && !selector_next.done)) {
              _context.next = 10;
              break;
            }

            if (!selector_next.value) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return iterable_next.value;

          case 6:
            iterable_next = iterable.next();
            selector_next = selector.next();
            _context.next = 2;
            break;

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })();
}

module.exports = compress;