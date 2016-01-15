'use strict';

var iterator = require('./utils').iterator;

function chain() {
  var args = Array.from(arguments);
  return regeneratorRuntime.mark(function _callee() {
    var i, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < args.length)) {
              _context.next = 31;
              break;
            }

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = iterator(args[i])[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 14;
              break;
            }

            item = _step.value;
            _context.next = 11;
            return item;

          case 11:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](5);
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
            i += 1;
            _context.next = 1;
            break;

          case 31:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[5, 16, 20, 28], [21,, 23, 27]]);
  })();
}

chain.from_iterable = function from_iterable(iterable) {
  if (arguments.length !== 1) {
    throw new TypeError('from_iterable() takes exactly one argument (' + arguments.length + ' given)');
  }
  return chain.apply(this, Array.from(iterator(iterable)));
};

module.exports = chain;