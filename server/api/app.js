var application_root = __dirname,
  express = require("express"),
  repo = require("../model/DAL/neo4j");


var app = express();

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

// Launch server

app.listen(3000);
