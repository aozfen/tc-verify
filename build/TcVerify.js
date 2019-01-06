'use strict';

var _soap = require('soap');

var _soap2 = _interopRequireDefault(_soap);

var _helper = require('./helper');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var url = 'https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL';

module.exports = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var tc = _ref.tc,
        Ad = _ref.Ad,
        Soyad = _ref.Soyad,
        DogumYili = _ref.DogumYili;
    var TCvalidResult, FirstNameValidResult, LastNameValidResult, BirthYearValidResult, args, soapResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            TCvalidResult = (0, _helper.TCNumberValidation)(tc);
            FirstNameValidResult = (0, _helper.nameValidation)(Ad);
            LastNameValidResult = (0, _helper.nameValidation)(Soyad);
            BirthYearValidResult = (0, _helper.birthyearValidation)(DogumYili);

            if (TCvalidResult.valid) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', TCvalidResult);

          case 6:
            if (FirstNameValidResult.valid) {
              _context.next = 8;
              break;
            }

            return _context.abrupt('return', FirstNameValidResult);

          case 8:
            if (LastNameValidResult.valid) {
              _context.next = 10;
              break;
            }

            return _context.abrupt('return', LastNameValidResult);

          case 10:
            if (BirthYearValidResult.valid) {
              _context.next = 12;
              break;
            }

            return _context.abrupt('return', BirthYearValidResult);

          case 12:
            args = {
              TCKimlikNo: tc,
              Ad: FirstNameValidResult.val,
              Soyad: LastNameValidResult.val,
              DogumYili: DogumYili
            };
            soapResult = new Promise(function (res, rej) {
              _soap2.default.createClient(url, function (err, client) {
                client.TCKimlikNoDogrula(args, function (err, result) {
                  res(result.TCKimlikNoDogrulaResult);
                });
              });
            });
            return _context.abrupt('return', soapResult);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=TcVerify.js.map