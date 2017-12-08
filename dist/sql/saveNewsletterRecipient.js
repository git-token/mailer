'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = saveNewsletterRecipient;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveNewsletterRecipient(_ref) {
  var _this = this;

  var email = _ref.email;

  return new _bluebird2.default(function (resolve, reject) {
    _this.query({
      queryString: '\n        CREATE TABLE IF NOT EXISTS newsletter_recipients (\n          email  CHARACTER(100) PRIMARY KEY\n        );\n      '
    }).then(function () {
      return _this.query({
        queryString: '\n          INSERT INTO newsletter_recipients (\n            email\n          ) VALUES (\n            "' + email + '"\n          );\n        '
      });
    }).then(function () {
      resolve(true);
    }).catch(function (error) {
      reject(error);
    });
  });
}