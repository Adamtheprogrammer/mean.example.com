var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  uniqueValidator = require('mongoose-unique-validator');
  var slug = require('slug');
 //Create a schema
var Articles = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    unique: [true, 'Title is already in use']
  },
  slug: {
    type: String,
    required: [true, 'Please enter a slug'],
    unique: [true, 'Slug is already in use']
  },
    keywords: String,
    description: String,
    body: String,
    created: {
      type: Date,
      default: Date.now
    },
  modified: {
    type: Date,
    default: Date.now()
  },
  published: {
    type: Date,
    default: Date.now()
  }
});
 //Auto set the modified date on save
Articles.pre('validate', function(next){
  this.modified = new Date().toISOString();
  this.slug = slug(this.title).toLowerCase();
  next();
});
 Articles.plugin(uniqueValidator);
 module.exports  = mongoose.model('Articles', Articles);

 