var application_root = __dirname,
  express = require("express"),
  repo = require("../model/DAL/neo4j");


var app = express();

app.get('/api/articles', function (req, res) {
  var data = repo.getArticles();
  res.send(data);
});

// Launch server

app.listen(3000);