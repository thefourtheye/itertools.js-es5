'use strict';

function count(start, step) {
  if (arguments.length > 2) {
    throw new TypeError('count() takes at most 2 arguments (' + arguments.length + ' given)');
  }

  if (arguments.length < 2) {
    step = 1;
  }
  if (arguments.length < 1) {
    start = 0;
  }

  if (!Number.isFinite(start) || !Number.isFinite(step)) {
    throw new TypeError('a number is required');
  }

  return regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return start;

          case 2:
            start += step;

          case 3:
            _context.next = 0;
            break;

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })();
}

module.exports = count;