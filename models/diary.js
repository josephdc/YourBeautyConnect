var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    brandName:   String,
    productName: String,
    shadeName:   String
});

var toolSchema = new mongoose.Schema({
    brandName:   String,
    productName: String,
    usedFor:     String
});

var diarySchema = new mongoose.Schema({
    skin:   categorySchema,
    face:   categorySchema,
    eyes:   categorySchema,
    lips:   categorySchema,
    cheeks: categorySchema,
    tools:  toolSchema,
    user_id: String,
});

var Diary = mongoose.model('Diary', diarySchema)

module.exports = Diary;
