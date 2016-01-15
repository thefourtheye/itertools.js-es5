'use strict';

var iterator = require('./utils').iterator;

function product() {
  var repeat = 1;
  var args = Array.prototype.slice.call(arguments);

  if (args.length !== 0) {
    if (Number.isInteger(args[args.length - 1])) {
      repeat = args.pop(-1);
    }
  }

  var iters = args.map(iterator).map(function (x) {
    return Array.from(x);
  });
  var iterators = [];
  for (var i = 0; i < repeat; i += 1) {
    iters.forEach(function (x) {
      return iterators.push(x);
    });
  }

  return regeneratorRuntime.mark(function recursive(current, result) {
    var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

    return regeneratorRuntime.wrap(function recursive$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = current;

          case 1:
            if (!(i < iterators.length)) {
              _context.next = 35;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = iterators[i][Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 18;
              break;
            }

            value = _step.value;

            if (!(result.length + 1 === iterators.length)) {
              _context.next = 14;
              break;
            }

            _context.next = 12;
            return result.concat(value);

          case 12:
            _context.next = 15;
            break;

          case 14:
            return _context.delegateYield(recursive(i + 1, result.concat(value)), 't0', 15);

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t1 = _context['catch'](5);
            _didIteratorError = true;
            _iteratorError = _context.t1;

          case 24:
            _context.prev = 24;
            _context.prev = 25;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 27:
            _context.prev = 27;

            if (!_didIteratorError) {
              _context.next = 30;
              break;
            }

            throw _iteratorError;

          case 30:
            return _context.finish(27);

          case 31:
            return _context.finish(24);

          case 32:
            i += 1;
            _context.next = 1;
            break;

          case 35:
          case 'end':
            return _context.stop();
        }
      }
    }, recursive, this, [[5, 20, 24, 32], [25,, 27, 31]]);
  })(0, []);
}

module.exports = product;