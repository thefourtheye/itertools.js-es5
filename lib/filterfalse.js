'use strict';

var iterator = require('./utils').iterator;

function filterfalse(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError('filterfalse expected 2 arguments, got ' + arguments.length);
  }

  var toStringPred = Object.prototype.toString.call(pred).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError('\'' + toStringPred + '\' object is not callable');
  }

  var iterable = iterator(seq);

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
            _iterator = iterable[Symbol.iterator]();

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 13;
              break;
            }

            value = _step.value;

            if (pred(value)) {
              _context.next = 10;
              break;
            }

            _context.next = 10;
            return value;

          case 10:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](3);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 19:
            _context.prev = 19;
            _context.prev = 20;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 22:
            _context.prev = 22;

            if (!_didIteratorError) {
              _context.next = 25;
              break;
            }

            throw _iteratorError;

          case 25:
            return _context.finish(22);

          case 26:
            return _context.finish(19);

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 15, 19, 27], [20,, 22, 26]]);
  })();
}

module.exports = filterfalse;