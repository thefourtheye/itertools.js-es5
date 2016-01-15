'use strict';

var iterator = require('./utils').iterator;

function takewhile(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError('takewhile expected 2 arguments, got ' + arguments.length);
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
              _context.next = 16;
              break;
            }

            value = _step.value;

            if (!pred(value)) {
              _context.next = 12;
              break;
            }

            _context.next = 10;
            return value;

          case 10:
            _context.next = 13;
            break;

          case 12:
            return _context.abrupt('break', 16);

          case 13:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 16:
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](3);
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
    }, _callee, this, [[3, 18, 22, 30], [23,, 25, 29]]);
  })();
}

module.exports = takewhile;