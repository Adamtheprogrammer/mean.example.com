var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require ('../models/users');

/*Get users listing. */
router.get('/register', function(req, res){
  res.render('users/register',{
    title: 'Create an Account'
  });
});

router.post('/register', function(req, res){
  var data = req.body;
    Users.register(
    new Users({
      username: data.username,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
    }), 
    data.password,
    function(err, user){
      if(err ){
        return res.json({
          success: false,
          user: req.body,
          errors: err
        });
      }

      return res.join({
        success: true,
        user: user
      })
  });

});

router.get('/login', function(req, res){
  res.render('users/login');
});

router.post(
  '/login',
  passport.authenticate('local'),
  function(req, res){
    res.redirect('/users');
  }
);

router.get('/', function(req,res){
  res.render('users/index');
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users/login');
});

module.exports = router;
