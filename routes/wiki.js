var express = require('express');
var router = express.Router();

router.get('/:url_name', function (req, res) {
  var models = require('../models/');
  var urlPath = req.params.url_name;
  models.Page.findOne({url_name : urlPath}, function(err, wikipage) {
    if(err) {
      console.log("ERROR BITCH:" + err);
    } else if(wikipage) {
      res.render('show', {"title" : wikipage.title, "content" : wikipage.body, "url_name" : wikipage.url_name});
    } else {
      res.render('index', {"title" : 'UNKNOWN PAGE'});
    }
  })
});

router.post

module.exports = router;
