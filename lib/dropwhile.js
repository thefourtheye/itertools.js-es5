'use strict';

var iterator = require('./utils').iterator;

function dropwhile(pred, seq) {
  if (arguments.length !== 2) {
    throw new TypeError('dropwhile expected 2 arguments, got ' + arguments.length);
  }

  var toStringPred = Object.prototype.toString.call(pred).replace(/\[object |\]/ig, '');
  if (toStringPred !== 'Function') {
    throw new TypeError('\'' + toStringPred + '\' object is not callable');
  }

  var iterable = iterator(seq);

  return regeneratorRuntime.mark(function _callee() {
    var drop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            drop = true;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = iterable[Symbol.iterator]();

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 15;
              break;
            }

            value = _step.value;

            drop = drop && pred(value);

            if (drop) {
              _context.next = 12;
              break;
            }

            _context.next = 12;
            return value;

          case 12:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 15:
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 21:
            _context.prev = 21;
            _context.prev = 22;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 24:
            _context.prev = 24;

            if (!_didIteratorError) {
              _context.next = 27;
              break;
            }

            throw _iteratorError;

          case 27:
            return _context.finish(24);

          case 28:
            return _context.finish(21);

          case 29:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 17, 21, 29], [22,, 24, 28]]);
  })();
}

module.exports = dropwhile;