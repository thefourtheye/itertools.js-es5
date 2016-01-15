'use strict';

var iterator = require('./utils').iterator;

function starmap(func, seq) {
  if (arguments.length !== 2) {
    throw new TypeError('starmap expected 2 arguments, got ' + arguments.length);
  }

  var toStringPred = Object.prototype.toString.call(func).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError('\'' + toStringPred + '\' object is not callable');
  }

  var iter = iterator(seq);

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
            _iterator = iter[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 12;
              break;
            }

            value = _step.value;
            _context.next = 9;
            return func.apply(this, Array.from(iterator(value)));

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
}

module.exports = starmap;