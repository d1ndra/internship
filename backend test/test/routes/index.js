var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mongoose = require('mongoose');
var name = mongoose.model('Post');
// var active = mongoose.model('active');
// var hostingtype=mongoose.model('hostingtype');
// var industry=mongoose.model('industry');
// var backend=mongoose.model('backend');
// var geography=mongoose.model('geography');
// var region=mongoose.model('region');
// var edi=mongoose.model('edi');
// var location=mongoose.model('location');
// var solution=mongoose.model('solution');
// var rtc=mongoose.model('rtc');
// var lifecyle=mongoose.model('lifecyle');
// var fromdate=mongoose.model('from');
// var todate=mongoose.model('todate');
// var thirdparty=mongoose.model('thirdparty');
// var icn=mongoose.model('icn');

router.post('/posts', function(req, res, next) {
  var name = new name(req.body);

  name.save(function(err, name){
    if(err){ return next(err); }

    res.json(name);
  });
});

router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts){
    if(err){ return next(err); }

    res.json(posts);
  });
});


router.get('/user', function(req, res, next) {
  res.render('user');
});
module.exports = router;
