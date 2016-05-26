var Diary = require('../models/diary');
var User = require('../models/user');

module.exports = {
  index:   index,
  show:    show,
  update:  update,
  create:  create,
  destroy: destroy
}

function index(req, res, next) {
  Diary.find({}, function(err, diaries) {
    if (err) next(err);

      res.json(diaries);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Diary.findById(id, function(err, diary) {
    if (err) next(err);

    res.json(diary);
  });
}

function create(req, res, next) {
  var newDiary = new Diary(req.body);

  newDiary.userId = req.decoded._id;
  newDiary.save(function(err, savedDiary) {
    if (err) next(err);
    User.findById(req.decoded._id, function(err, user) {
      user.diaryId = savedDiary._id;
      user.save();
    });
    res.json(savedDiary);
  });

}

function update(req, res, next) {
  var id = req.params.id;

  Diary.findById(id, function(err, diary) {
    if (err) next(err);

    diary.skin   = req.body.skin;
    diary.face   = req.body.face;
    diary.eyes   = req.body.eyes;
    diary.lips   = req.body.lips;
    diary.cheeks = req.body.cheeks;

    diary.tools  = req.body.tools

    diary.save(function(err, updatedDiary) {
      if (err) next(err);

      res.json(updatedDiary);
    });

  });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Diary.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Diary successfully deleted'});
  });
}
