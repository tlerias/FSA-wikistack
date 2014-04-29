var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var models = require('../models/');
  models.Page.find({}, function(err, docs) {
    if(err) {
      console.log("YOU SUCK");
    } else {
      res.render('index', { title: 'WIKISTACK', docs : docs});
    }
  });
});

module.exports = router;
