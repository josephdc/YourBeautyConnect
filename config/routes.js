var mongoose = require('mongoose');
var express = require('express');
var router = express.Router()

var diariesController = require('../controllers/diaries');
var usersCtrl = require('../controllers/users');

var token = require('../config/token_auth');

router.route('/api/diaries')
  .get(token.authenticate, diariesController.index)
  .post(token.authenticate, diariesController.create);

router.route('/api/diaries/:id')
  .get(token.authenticate, diariesController.show)
  .put(token.authenticate, diariesController.update);

// No need for authentication when creating a user
router.route('/api/users')
  .post(usersCtrl.create);

router.route('/api/users/:id')
  .get(token.authenticate, usersCtrl.me)
  .put(token.authenticate, usersCtrl.update)
  .delete(token.authenticate, usersCtrl.destroy);

// Can't authenticate until they sign-in
router.route('/api/token')
  .post(token.create);

router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

router.get('*', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
