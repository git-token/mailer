'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Newsletter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Newsletter(_ref) {
  var email = _ref.email;

  var unsubscribe = 'https://mailer.gittoken.io/newsletter/unsubscribe/' + email;

  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'center' } },
    _react2.default.createElement(
      'h2',
      null,
      'Thanks for Subscribing to the GitToken Newsletter!'
    ),
    _react2.default.createElement('img', { src: 'https://raw.githubusercontent.com/git-token/media/master/png/git_token_logo.png', width: '400', height: '400' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      'We\'re working hard to launch GitToken on Ethereum. To keep you informed, each month we will send you a progress report.'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'p',
      null,
      'Thanks again for your support! In addition to this newsletter, connect with GitToken on ',
      _react2.default.createElement(
        'a',
        { href: 'https://medium.com/gittoken/' },
        'Medium'
      ),
      ', ',
      _react2.default.createElement(
        'a',
        { href: 'https://twitter.com/gittoken/' },
        'Twitter'
      ),
      ', and ',
      _react2.default.createElement(
        'a',
        { href: 'https://gitter.im/git-token/' },
        'Gitter'
      ),
      '.'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Looking to contribute? Check out the GitToken ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/git-token/' },
        'GitHub'
      ),
      ' repositories!'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'small',
      null,
      'If you did not subscribe to this newsletter, please feel free to ',
      _react2.default.createElement(
        'a',
        { href: unsubscribe },
        'unsubscribe'
      ),
      ' at any time'
    ),
    _react2.default.createElement('br', null)
  );
}