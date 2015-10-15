var express = require('express');
var mongo = require('./mongo.js');
var router = express.Router();

router.get('/insert', function (req, res, next) {
  mongo.insertTestData();
  res.json('ok');
});

router.post('/query', function (req, res, next) {
  mongo.getStopWords(function (stopwords) {
    var keywords = req.body.query
      .toLocaleLowerCase()
      .split(/\s+/)
      .map(function (s) {
        return s.replace(/\W/, '');
      });
    stopwords.forEach(function(word) {
      var idx = keywords.indexOf(word.word);
      if(idx >= 0) {
        console.log('removing ', word.word);
        keywords.splice(idx, 1);
      }
    });
    console.log('found keywords ', keywords);
    mongo.findQuery(keywords, function(r) {
      res.json(r);
    });
  });
});

module.exports = router;