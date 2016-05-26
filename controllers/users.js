var User = require("../models/user");

module.exports = {
  create:   create,
  update:  update,
  destroy: destroy,
  me:       me
};

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  console.log(req.body);
  User
    .create(req.body)
    .then(function(user) {
      var diary = {

      }
      // save diary

      // stick this part inside the save diary callback
      res.json({
        success: true,
        message: 'Successfully created user name.',
        data: {
          userName: user.userName,
          id:    user._id
        }
      });
    })
    .catch(function(err) {
      if (err.message.match(/E11000/)) {
        err.status = 409;
      } else {
        err.status = 422;
      }
      next(err);
    });
};

function me(req, res, next) {
  console.log("LOOK HERE: ", req)
  User
    .findOne({_id: req.decoded._id}).exec()
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully retrieved user data.',
        data: user
      });
    })
    .catch(function(err) {
      next(err);
    });
};

function update(req, res, next) {
  var id = req.params.id;

  User.findById(id, function(err, user) {
    if (err) next(err);

    user.firsName   = req.body.firsName;
    user.lastName   = req.body.lastName;
    user.userName   = req.body.userName;
    user.email      = req.body.email;
    user.password   = req.body.password;
    user.birthday   = req.body.birthday;
    user.favBrand1  = req.body.favBrand1;
    user.favBrand2  = req.body.favBrand2;
    user.favBrand3  = req.body.favBrand3;
    user.favBrand4  = req.body.favBrand4;

    user.save(function(err, updatedUser) {
      if (err) next(err);

      res.json(updatedUser);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  User.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'User successfully deleted'});
  });
}





