var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('add')
  // this is the /add/ route
});

router.post('/submit', function(req, res) {
  var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here

  var title = req.body.pageTitle;
  var body = req.body.pageContent;
  var generateUrlName = function(title){
    if(typeof title !== 'undefined' && title !== ""){
      return title.replace(/[\s]/g, "-");
    } else {
      return Math.random().toString(36).substring(2,7);
    }
  }
  var url_name = generateUrlName(title);

  var p = new models.Page({ "title": title, "body":body, "url_name": url_name});
  p.save();
  res.redirect('/');
});



module.exports = router;
