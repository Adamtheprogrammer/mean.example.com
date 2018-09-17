var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var articles = require('../../models/articles');

/* GET articles listing. */
router.get('/', function(req, res, next) {

 articles.find({}, function(err, articles){

     if(err){
       return res.json({success: false, error: err});
     }

     return res.json({success: true, articles: articles});
 });

});

router.get('/:userId', function(req, res, next) {

 var userId = req.params.userId;

 articles.findOne({_id:userId}, function(err, articles){

     if(err){
       return res.json({success: false, error: err});
     }

     return res.json({success: true, articles: articles});
 });

});

//create a user
router.post('/', function(req, res){
 articles.create(new articles({

  title: req.body.title,
 }), function(err, user){

   if(err){
     return res.json({
       success:false,
       error:err,
       user:req.body
     });
   }

   return res.json({success:true, user: user});

 });

});


//update a user
router.put('/', function(req, res){

 articles.findOne({_id: req.body._id}, function(err, user){

   if(err){
     return res.json({success: false, error: err});
   }

   if(user){
     let data = req.body;

     //if a value was passed update it
     if(data.title){
       user.title = data.title;
     }

     if(data.description){
       user.description = data.description;
     }

     if(data.keyword){
       user.keyword = data.keyword;
     }

     if(data.body){
       user.body = data.body;
     }

     user.save(function(err){
       if(err){
         return res.json({success: false, error: err});
       }else{
         return res.json({success: true, user: user});
       }
     });
   }else{

   }

 });
});

//Delete a single user
router.delete('/:userId', function(req,res){
 var userId = req.params.userId;

 articles.remove({_id: userId}, function(err, removed){
   if(err){
     return res.json({success: false, error:err});
   }

   return res.json({success: true, status:removed});

 });
});



module.exports = router;