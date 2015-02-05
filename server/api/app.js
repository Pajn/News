var application_root = __dirname,
  express = require("express"),
  repo = require("../model/DAL/neo4j");


var app = express();

app.get('/api/articles', function (req, res) {
  repo.getArticles()
    .then(function(articles) {
      res.send(articles);
    });
});

// Launch server

app.listen(3000);
