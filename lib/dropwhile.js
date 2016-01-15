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
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2;

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
              _context.next = 14;
              break;
            }

            value = _step.value;

            if (pred(value)) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return value;

          case 10:
            return _context.abrupt('break', 14);

          case 11:
            _iteratorNormalCompletion = true;
            _context.next = 5;
            break;

          case 14:
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](3);
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
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 31;
            _iterator2 = iterable[Symbol.iterator]();

          case 33:
            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
              _context.next = 41;
              break;
            }

            value = _step2.value;

            if (pred(value)) {
              _context.next = 38;
              break;
            }

            _context.next = 38;
            return value;

          case 38:
            _iteratorNormalCompletion2 = true;
            _context.next = 33;
            break;

          case 41:
            _context.next = 47;
            break;

          case 43:
            _context.prev = 43;
            _context.t1 = _context['catch'](31);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 47:
            _context.prev = 47;
            _context.prev = 48;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 50:
            _context.prev = 50;

            if (!_didIteratorError2) {
              _context.next = 53;
              break;
            }

            throw _iteratorError2;

          case 53:
            return _context.finish(50);

          case 54:
            return _context.finish(47);

          case 55:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 16, 20, 28], [21,, 23, 27], [31, 43, 47, 55], [48,, 50, 54]]);
  })();
}

module.exports = dropwhile;