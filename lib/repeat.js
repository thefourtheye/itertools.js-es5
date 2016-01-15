'use strict';

function repeat(object, n) {
  if (arguments.length > 2) {
    throw new TypeError('repeat() takes at most 2 arguments (' + arguments.length + ' given)');
  }

  if (arguments.length === 0) {
    throw new TypeError('Required argument \'object\' (pos 1) not found');
  }

  if (arguments.length === 1) {
    n = Infinity;
  }

  if (typeof n !== 'number') {
    var toStringObj = Object.prototype.toString.call(n).replace(/\[object |\]/ig, '');
    throw new TypeError('\'' + toStringObj + '\' cannot be interpreted as an integer');
  }

  if (n !== Infinity && !Number.isInteger(n)) {
    throw new TypeError('integer argument expected');
  }

  return regeneratorRuntime.mark(function _callee() {
    var i;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(n === Infinity)) {
              _context.next = 7;
              break;
            }

          case 1:
            _context.next = 3;
            return object;

          case 3:
            _context.next = 1;
            break;

          case 5:
            _context.next = 14;
            break;

          case 7:
            i = 0;

          case 8:
            if (!(i < n)) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return object;

          case 11:
            i += 1;
            _context.next = 8;
            break;

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  })();
}

module.exports = repeat;