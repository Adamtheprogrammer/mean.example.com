var express = require('express');
var router = express.Router();
var Articles = require('../models/articles');

/* GET articles listing. */
router.get('/', function(req, res, next) {

  Articles.find({}, function(err, articles){
 
      if(err){
        return res.send('error');
      }
 
      res.render('articles/index',{articles: articles});
  });
 
 });
 
 router.get('/:slug', function(req, res, next) {
 
  var slug = req.params.slug;
 
  Articles.findOne({slug:slug}, function(err, article){
 
      if(err){
        return res.send('error');
      }
 
      res.render('articles/view', {article: article});
  });
 
 });
 
/*Get users listing. */

module.exports = router;
