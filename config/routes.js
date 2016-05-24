var mongoose = require('mongoose');
var express = require('express');
var router = express.Router()

var diariesController = require('../controllers/diaries');
var usersCtrl = require('../controllers/users');

var token = require('../config/token_auth');

router.route('/api/diaries')
  .get(diariesController.index)
  .post(diariesController.create);

router.route('/api/diaries/:id')
  .get(diariesController.show)
  .put(token.authenticate, diariesController.update)
  .delete(diariesController.destroy);

router.route('/api/users')
  .post(usersCtrl.create);

router.route('/api/users/:id')
  .put(usersCtrl.update)
  .delete(usersCtrl.destroy);

router.route('/api/users/me')
  .get(token.authenticate, usersCtrl.me);

router.route('/api/token')
  .post(token.create);

router.get('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

router.get('*', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
