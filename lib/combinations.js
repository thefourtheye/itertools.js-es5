'use strict';

var ValueError = require('valueerror');
var iterator = require('./utils').iterator;

function combinations(p, r) {
  if (!Number.isInteger(r)) {
    throw new TypeError(r + ' cannot be interpreted as an integer');
  }

  if (r < 0) {
    throw new ValueError('r must be non-negative');
  }

  if (r === 0) {
    return [];
  }

  var tuple = Array.from(iterator(p));
  return regeneratorRuntime.mark(function recursive(current, result) {
    var i;
    return regeneratorRuntime.wrap(function recursive$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = current;

          case 1:
            if (!(i < tuple.length)) {
              _context.next = 11;
              break;
            }

            if (!(result.length + 1 === r)) {
              _context.next = 7;
              break;
            }

            _context.next = 5;
            return result.concat(tuple[i]);

          case 5:
            _context.next = 8;
            break;

          case 7:
            return _context.delegateYield(recursive(i + 1, result.concat(tuple[i])), 't0', 8);

          case 8:
            i += 1;
            _context.next = 1;
            break;

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, recursive, this);
  })(0, []);
}

module.exports = combinations;