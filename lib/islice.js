'use strict';

var iterator = require('./utils').iterator;

function islice(seq, start, stop, step) {
  if (arguments.length < 2) {
    throw new TypeError('islice expected at least 2 arguments, got ' + arguments.length);
  }
  if (arguments.length > 4) {
    throw new TypeError('islice expected at most 4 arguments, got ' + arguments.length);
  }
  if (!(start === undefined || Number.isInteger(start) && start >= 0)) {
    throw new TypeError('start must be a positive integer or undefined');
  }
  if (!(stop === undefined || Number.isInteger(stop) && stop >= 0)) {
    throw new TypeError('stop must be a positive integer or undefined');
  }
  if (!(step === undefined || Number.isInteger(step) && step > 0)) {
    throw new TypeError('step must be a non-zero positive integer or undefined');
  }

  var iter = iterator(seq);
  step = step || 1;
  if (arguments.length === 2) {
    stop = start;
    start = 0;
  } else {
    start = start || 0;
    stop = stop === undefined ? Infinity : stop;
  }

  return regeneratorRuntime.mark(function _callee() {
    var counter, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            counter = 0;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = iter[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 18;
              break;
            }

            value = _step.value;

            if (!(start > stop || start >= stop)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', []);

          case 10:
            if (!(counter === start)) {
              _context.next = 14;
              break;
            }

            _context.next = 13;
            return value;

          case 13:
            start += step;

          case 14:
            counter += 1;

          case 15:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 18:
            _context.next = 24;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

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
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 20, 24, 32], [25,, 27, 31]]);
  })();
}

module.exports = islice;