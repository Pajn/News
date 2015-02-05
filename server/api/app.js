var application_root = __dirname,
  express = require("express"),
  repo = require("../model/DAL/neo4j"),
  bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.get('/api/authors/:id', function (req, res) {
  repo.getAuthorArticles(req.params.id)
    .then(function(articles) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(articles);
    });
});

app.get('/api/articles', function (req, res) {
  repo.getArticles()
    .then(function(articles) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(articles);
    });
});

app.get('/api/articles/:id', function (req, res) {
  repo.getRelatedArticles(req.params.id)
    .then(function(articles) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(articles);
    });
});

app.get('/api/concepts', function (req, res) {
  repo.getConcepts()
    .then(function(concepts) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(concepts);
    });
});

app.get('/api/scopes', function (req, res) {
  repo.getScopes()
    .then(function(scopes) {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(scopes);
    });
});

app.post('/api/articles/:id', function (req, res) {
  switch (req.body.rate) {
    case 'like':
      var rating = 1;
      break;
    case 'dislike':
      var rating = -1;
      break;
    default:
      res.status(400);
      res.send('invalid');
      return;
  }
  repo.rate(req.params.id, rating).then(function () {
    res.send('rated');
  });
});

// Launch server

app.listen(3000);
