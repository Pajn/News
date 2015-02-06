'use strict';

var data = require('../database.js');
var neo4j = require('../model/DAL/neo4j.js');

var entities = data.articles;
entities = entities.concat(data.authors);
entities = entities.concat(data.concepts);
entities = entities.concat(data.newspapers);
entities = entities.concat(data.scopes);

neo4j.query('Match (n) Optional Match (n)-[r]->() Delete n,r')
  .then(function() {
    return neo4j.create(entities, data.relations);
  })
  .then(function() {
    var d = data.getBarackFromGoogle();
    return neo4j.create(d[0], d[1]);
  })
  .then(function() {
    var d = data.getUsaFromGoogle();
    return neo4j.create(d[0], d[1]);
  })
  .then(function() {
    console.log('done');
  });

