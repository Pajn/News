var application_root = __dirname,
  express = require("express"),
  repo = require("../model/DAL/neo4j"),
  bodyParser = require('body-parser'),
  http = require("http");


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
      if (!articles) {
        res.status(404);
      }
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

app.get('/api/wikidata/:title', function (req, res) {
  var options = {
    host : 'en.wikipedia.org',
    port : 80,
    path : '/w/api.php?format=json&action=parse&page=' + encodeURIComponent(req.params.title) +'&prop=text',
    method : 'GET'
  };

  var request = http.request(options, function(response) {
    var body = "";

    response.on('data', function(data) {
      body += data;
    });

    response.on('end', function() {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(JSON.parse(body));
    });
  });

  request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
  });
  request.end();
});

app.post('/api/articles/:id', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
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
