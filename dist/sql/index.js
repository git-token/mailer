'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsubscribe = exports.saveNewsletterRecipient = exports.query = undefined;

var _saveNewsletterRecipient = require('./saveNewsletterRecipient');

var _saveNewsletterRecipient2 = _interopRequireDefault(_saveNewsletterRecipient);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _unsubscribe = require('./unsubscribe');

var _unsubscribe2 = _interopRequireDefault(_unsubscribe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.query = _query2.default;
exports.saveNewsletterRecipient = _saveNewsletterRecipient2.default;
exports.unsubscribe = _unsubscribe2.default;