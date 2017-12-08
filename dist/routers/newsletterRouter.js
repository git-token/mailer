'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = newsletterRouter;

var _express = require('express');

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _index = require('../components/index');

var _index2 = require('../mailer/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function newsletterRouter() {
  var _this = this;

  var router = (0, _express.Router)();

  router.get('/unsubscribe/:email?', function (req, res) {
    var email = req.params.email;

    _this.unsubscribe({ email: email }).then(function (result) {
      res.redirect('https://gittoken.io');
    }).catch(function (error) {
      console.log('error', error);
      res.status(500).send(JSON.stringify(error, null, 2));
    });
  });

  router.post('/subscribe', function (req, res) {
    var email = req.body.email;

    _this.saveNewsletterRecipient({ email: email }).then(function () {
      // const html = this.welcomeMessage({ email })
      var html = _server2.default.renderToStaticMarkup((0, _index.Newsletter)({ email: email }));
      console.log('html', html);

      return _this.sendMail({
        subject: 'Thanks for Subscribing to the GitToken Newsletter!',
        to: email,
        html: html
      });
    }).then(function (result) {
      res.status(200).send(result);
    }).catch(function (error) {
      console.log('error', error);
      res.status(500).send(JSON.stringify(error, null, 2));
    });
  });

  return router;
}