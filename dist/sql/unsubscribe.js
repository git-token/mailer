'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unsubscribe;

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function unsubscribe(_ref) {
  var _this = this;

  var email = _ref.email;

  return new _bluebird2.default(function (resolve, reject) {
    _this.query({
      queryString: '\n          DELETE FROM newsletter_recipients WHERE email = "' + email + '";\n        '
    }).then(function () {
      resolve(true);
    }).catch(function (error) {
      reject(error);
    });
  });
}