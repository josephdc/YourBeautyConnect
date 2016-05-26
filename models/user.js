var mongoose = require('mongoose'),
  debug = require('debug')('app:models')

var userSchema = new mongoose.Schema({
  firstName:    { type:String, required: true },
  lastName:     { type:String, required: true },
  userName:     { type:String, required: true },
  email:        { type:String, required: true, unique: true },
  birthday:     { type:Date   },
  favBrand1:   { type:String },
  favBrand2:   { type:String },
  favBrand3:   { type:String },
  favBrand4:   { type:String },
  diaryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Diary'
          }
});

userSchema.plugin(require('mongoose-bcrypt'));

userSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;
