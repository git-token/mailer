'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _gmailSend = require('gmail-send');

var _gmailSend2 = _interopRequireDefault(_gmailSend);

var _index = require('./routers/index');

var _index2 = require('./mailer/index');

var _index3 = require('./sql/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GitTokenMailer = function () {
  function GitTokenMailer(_ref) {
    var mysqlOpts = _ref.mysqlOpts,
        gmail = _ref.gmail,
        sessionSecret = _ref.sessionSecret;

    _classCallCheck(this, GitTokenMailer);

    this.port = 8686;
    var user = gmail.user,
        pass = gmail.pass;


    this.gmailSend = (0, _gmailSend2.default)({ user: user, pass: pass });

    this.query = _index3.query.bind(this);
    this.sendMail = _index2.sendMail.bind(this);
    this.welcomeMessage = _index2.welcomeMessage.bind(this);
    this.newsletterRouter = _index.newsletterRouter.bind(this);
    this.saveNewsletterRecipient = _index3.saveNewsletterRecipient.bind(this);
    this.unsubscribe = _index3.unsubscribe.bind(this);

    /* MySql Connection */
    this.mysql = _mysql2.default.createConnection(mysqlOpts);

    /* Express Application */
    this.app = (0, _express2.default)();

    this.app.use(require('cookie-parser')());
    this.app.use(require('express-session')({
      secret: sessionSecret,
      resave: true,
      saveUninitialized: true
    }));
    this.app.use(_bodyParser2.default.json());
    this.app.use(_bodyParser2.default.urlencoded({ extended: true }));

    this.app.use((0, _cors2.default)());

    this.app.use('/newsletter/', this.newsletterRouter());

    this.listen();
  }

  _createClass(GitTokenMailer, [{
    key: 'listen',
    value: function listen() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log('GitToken Mailer Listening on Port: ' + _this.port);
      });
    }
  }]);

  return GitTokenMailer;
}();

exports.default = GitTokenMailer;