var express = require('express');
var mongo = require('./mongo.js');
var router = express.Router();

router.get('/insert', function (req, res, next) {
  mongo.insertTestData();
  res.json('ok');
});

router.post('/query', function (req, res, next) {
  var query = req.body.query;
  mongo.getStopWords(function (stopwords) {
    var keywords = query.toLocaleLowerCase()
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
      res.json({
        input: query,
        inputKeywords: keywords,
        results: r
      });
    });
  });
});

module.exports = router;