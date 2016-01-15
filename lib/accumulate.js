'use strict';

var iterator = require('./utils').iterator;

function accumulate(iterable, func) {

  if (arguments.length < 2) {
    // default accumulator function, addition
    func = function func(operand1, operand2) {
      return operand1 + operand2;
    };
  }

  if (typeof func !== 'function') {
    throw new TypeError('second argument to accumulate must be a function object');
  }

  return regeneratorRuntime.mark(function _callee(it) {
    var previous, isFirst, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            previous = undefined;
            isFirst = true;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 5;
            _iterator = it[Symbol.iterator]();

          case 7:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 16;
              break;
            }

            value = _step.value;

            previous = isFirst ? value : func(previous, value);
            isFirst = false;
            _context.next = 13;
            return previous;

          case 13:
            _iteratorNormalCompletion = true;
            _context.next = 7;
            break;

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](5);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 22:
            _context.prev = 22;
            _context.prev = 23;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 25:
            _context.prev = 25;

            if (!_didIteratorError) {
              _context.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context.finish(25);

          case 29:
            return _context.finish(22);

          case 30:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[5, 18, 22, 30], [23,, 25, 29]]);
  })(iterator(iterable));
}

module.exports = accumulate;