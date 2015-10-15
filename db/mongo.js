var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/keywords';

var stopwords = 'stopwords';
var query = 'query';

var insertStopwords = function (db) {
  db.collection(stopwords).insertMany([
      {word: 'a'},
      {word: 'about'},
      {word: 'above'},
      {word: 'across'},
      {word: 'after'},
      {word: 'afterwards'},
      {word: 'again'},
      {word: 'against'},
      {word: 'all'},
      {word: 'almost'},
      {word: 'alone'},
      {word: 'along'},
      {word: 'already'},
      {word: 'also'},
      {word: 'although'},
      {word: 'always'},
      {word: 'am'},
      {word: 'among'},
      {word: 'amongst'},
      {word: 'amoungst'},
      {word: 'amount'},
      {word: 'an'},
      {word: 'and'},
      {word: 'another'},
      {word: 'any'},
      {word: 'anyhow'},
      {word: 'anyone'},
      {word: 'anything'},
      {word: 'anyway'},
      {word: 'anywhere'},
      {word: 'are'},
      {word: 'around'},
      {word: 'as'},
      {word: 'at'},
      {word: 'back'},
      {word: 'be'},
      {word: 'became'},
      {word: 'because'},
      {word: 'become'},
      {word: 'becomes'},
      {word: 'becoming'},
      {word: 'been'},
      {word: 'before'},
      {word: 'beforehand'},
      {word: 'behind'},
      {word: 'being'},
      {word: 'below'},
      {word: 'beside'},
      {word: 'besides'},
      {word: 'between'},
      {word: 'beyond'},
      {word: 'bill'},
      {word: 'both'},
      {word: 'bottom'},
      {word: 'but'},
      {word: 'by'},
      {word: 'call'},
      {word: 'can'},
      {word: 'cannot'},
      {word: 'cant'},
      {word: 'co'},
      {word: 'computer'},
      {word: 'con'},
      {word: 'could'},
      {word: 'couldnt'},
      {word: 'cry'},
      {word: 'de'},
      {word: 'describe'},
      {word: 'detail'},
      {word: 'do'},
      {word: 'done'},
      {word: 'down'},
      {word: 'due'},
      {word: 'during'},
      {word: 'each'},
      {word: 'eg'},
      {word: 'eight'},
      {word: 'either'},
      {word: 'eleven'},
      {word: 'else'},
      {word: 'elsewhere'},
      {word: 'empty'},
      {word: 'enough'},
      {word: 'etc'},
      {word: 'even'},
      {word: 'ever'},
      {word: 'every'},
      {word: 'everyone'},
      {word: 'everything'},
      {word: 'everywhere'},
      {word: 'except'},
      {word: 'few'},
      {word: 'fifteen'},
      {word: 'fify'},
      {word: 'fill'},
      {word: 'find'},
      {word: 'fire'},
      {word: 'first'},
      {word: 'five'},
      {word: 'for'},
      {word: 'former'},
      {word: 'formerly'},
      {word: 'forty'},
      {word: 'found'},
      {word: 'four'},
      {word: 'from'},
      {word: 'front'},
      {word: 'full'},
      {word: 'further'},
      {word: 'get'},
      {word: 'give'},
      {word: 'go'},
      {word: 'had'},
      {word: 'has'},
      {word: 'hasnt'},
      {word: 'have'},
      {word: 'he'},
      {word: 'hence'},
      {word: 'her'},
      {word: 'here'},
      {word: 'hereafter'},
      {word: 'hereby'},
      {word: 'herein'},
      {word: 'hereupon'},
      {word: 'hers'},
      {word: 'herse'},
      {word: 'him'},
      {word: 'himse'},
      {word: 'his'},
      {word: 'how'},
      {word: 'however'},
      {word: 'hundred'},
      {word: 'i'},
      {word: 'ie'},
      {word: 'if'},
      {word: 'in'},
      {word: 'inc'},
      {word: 'indeed'},
      {word: 'interest'},
      {word: 'into'},
      {word: 'is'},
      {word: 'it'},
      {word: 'its'},
      {word: 'itse'},
      {word: 'keep'},
      {word: 'last'},
      {word: 'latter'},
      {word: 'latterly'},
      {word: 'least'},
      {word: 'less'},
      {word: 'ltd'},
      {word: 'made'},
      {word: 'many'},
      {word: 'may'},
      {word: 'me'},
      {word: 'meanwhile'},
      {word: 'might'},
      {word: 'mill'},
      {word: 'mine'},
      {word: 'more'},
      {word: 'moreover'},
      {word: 'most'},
      {word: 'mostly'},
      {word: 'move'},
      {word: 'much'},
      {word: 'must'},
      {word: 'my'},
      {word: 'myse'},
      {word: 'name'},
      {word: 'namely'},
      {word: 'neither'},
      {word: 'never'},
      {word: 'nevertheless'},
      {word: 'next'},
      {word: 'nine'},
      {word: 'no'},
      {word: 'nobody'},
      {word: 'none'},
      {word: 'noone'},
      {word: 'nor'},
      {word: 'not'},
      {word: 'nothing'},
      {word: 'now'},
      {word: 'nowhere'},
      {word: 'of'},
      {word: 'off'},
      {word: 'often'},
      {word: 'on'},
      {word: 'once'},
      {word: 'one'},
      {word: 'only'},
      {word: 'onto'},
      {word: 'or'},
      {word: 'other'},
      {word: 'others'},
      {word: 'otherwise'},
      {word: 'our'},
      {word: 'ours'},
      {word: 'ourselves'},
      {word: 'out'},
      {word: 'over'},
      {word: 'own'},
      {word: 'part'},
      {word: 'per'},
      {word: 'perhaps'},
      {word: 'please'},
      {word: 'put'},
      {word: 'rather'},
      {word: 're'},
      {word: 'same'},
      {word: 'see'},
      {word: 'seem'},
      {word: 'seemed'},
      {word: 'seeming'},
      {word: 'seems'},
      {word: 'serious'},
      {word: 'several'},
      {word: 'she'},
      {word: 'should'},
      {word: 'show'},
      {word: 'side'},
      {word: 'since'},
      {word: 'sincere'},
      {word: 'six'},
      {word: 'sixty'},
      {word: 'so'},
      {word: 'some'},
      {word: 'somehow'},
      {word: 'someone'},
      {word: 'something'},
      {word: 'sometime'},
      {word: 'sometimes'},
      {word: 'somewhere'},
      {word: 'still'},
      {word: 'such'},
      {word: 'system'},
      {word: 'take'},
      {word: 'ten'},
      {word: 'than'},
      {word: 'that'},
      {word: 'the'},
      {word: 'their'},
      {word: 'them'},
      {word: 'themselves'},
      {word: 'then'},
      {word: 'thence'},
      {word: 'there'},
      {word: 'thereafter'},
      {word: 'thereby'},
      {word: 'therefore'},
      {word: 'therein'},
      {word: 'thereupon'},
      {word: 'these'},
      {word: 'they'},
      {word: 'thick'},
      {word: 'thin'},
      {word: 'third'},
      {word: 'this'},
      {word: 'those'},
      {word: 'though'},
      {word: 'three'},
      {word: 'through'},
      {word: 'throughout'},
      {word: 'thru'},
      {word: 'thus'},
      {word: 'to'},
      {word: 'together'},
      {word: 'too'},
      {word: 'top'},
      {word: 'toward'},
      {word: 'towards'},
      {word: 'twelve'},
      {word: 'twenty'},
      {word: 'two'},
      {word: 'un'},
      {word: 'under'},
      {word: 'until'},
      {word: 'up'},
      {word: 'upon'},
      {word: 'us'},
      {word: 'very'},
      {word: 'via'},
      {word: 'was'},
      {word: 'we'},
      {word: 'well'},
      {word: 'were'},
      {word: 'what'},
      {word: 'whatever'},
      {word: 'when'},
      {word: 'whence'},
      {word: 'whenever'},
      {word: 'where'},
      {word: 'whereafter'},
      {word: 'whereas'},
      {word: 'whereby'},
      {word: 'wherein'},
      {word: 'whereupon'},
      {word: 'wherever'},
      {word: 'whether'},
      {word: 'which'},
      {word: 'while'},
      {word: 'whither'},
      {word: 'who'},
      {word: 'wow'},
      {word: 'whoever'},
      {word: 'whole'},
      {word: 'whom'},
      {word: 'whose'},
      {word: 'why'},
      {word: 'will'},
      {word: 'with'},
      {word: 'within'},
      {word: 'without'},
      {word: 'would'},
      {word: 'yet'},
      {word: 'you'},
      {word: 'your'},
      {word: 'yours'},
      {word: 'yourself'},
      {word: 'yourselves'}
    ],
    logErrors);
};

function insertQuerys(db) {
  db.collection(query).insertMany([
    {
      keywords: ['facebook', 'performing'],
      query: 'How are my Facebook ads performing?'
    },
    {
      keywords: ['instagram', 'performing'],
      query: 'How are my Instagram ads performing?'
    },
    {
      keywords: ['blue', 'sky'],
      query: 'Why is the sky blue?'
    },
    {
      keywords: ['life', 'universe', '42'],
      query: 'What is the answer to the Ultimate Question of Life, The Universe, and Everything?'
    }
  ], logErrors);
}

function logErrors(err) {
  console.log(err);
}

module.exports.insertTestData = function () {
  MongoClient.connect(url, function (err, db) {
    console.log('Inserting test data, ', err);
    insertStopwords(db);
    insertQuerys(db);
    db.close();
  });
};

module.exports.getStopWords = function (callback) {
  MongoClient.connect(url, function (err, db) {
    db.collection(stopwords).find({}).toArray(function (err, r) {
      if (err) {
        console.log(err);
      } else {
        callback(r);
      }
    });
  });
};

// collects results from query and calls callback when done
function resultsHandler(length, callback) {
  var count = 0;
  var results = {};
  return function (err, r, word) {
    if (err) {
      console.log(err);
    } else {
      r.forEach(function (q) {
        if (!results.hasOwnProperty(q._id)) {
          results[q._id] = {
            query: q.query,
            rank: 0,
            matchKeywords: []
          };
        }
        results[q._id].rank += 1;
        results[q._id].matchKeywords.push(word);
      });

      count += 1;
      // if we are done collect results
      if (count >= length) {
        var resultsArr = Object.keys(results).map(function (id) {
          return results[id];
        });
        console.log('results array', resultsArr);
        resultsArr.sort(function (a, b) {
          return a.rank - b.rank;
        });
        callback(resultsArr);
      }
    }
  }
}

module.exports.findQuery = function (keywords, callback) {
  MongoClient.connect(url, function (err, db) {
    var handler = resultsHandler(keywords.length, callback);
    keywords.forEach(function (word) {
      console.log('Checking word ', word);
      db.collection(query).find({'keywords': word}).toArray(function (err, r) {
        handler(err, r, word);
      });
    });
  });
};