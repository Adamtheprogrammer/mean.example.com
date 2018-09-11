var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var passportLocalMongoose = require('passport-local-mongoose');

var Users = new Schema({

    email: {
        type: String,
        require: [true, 'Please enter an Email'],
        unique: [true, 'Email must be unique']
    },

    username: {
        type: String,
        require: [true, 'Please enter an username'],
        unique: [true, 'Email must be username']
    },


    first_name:String,
    last_name: String,
    admin: {
        type: Boolean,
        default: false

    },

    hash:{
        type: String,
        required:[
            true,
            'There was a problem creating your password'
        ]

    },
    salt:{
        type: String,
        required: [
            true,
            'There was a problem creating your password'
        ]
    }


});

Users.plugin(uniqueValidator);
Users.plugin(passportLocalMongoose);
module.exports = mongoose.model('Users', Users);