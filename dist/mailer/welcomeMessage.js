"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = welcomeMessage;
function welcomeMessage(_ref) {
  var email = _ref.email;

  var welcomeMessage = "\n    <div>\n      <h1>Hello, " + email + "!</h1>\n    </div>\n  ";

  return welcomeMessage;
}