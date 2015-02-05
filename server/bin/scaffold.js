'use strict';

var data = require('../database.js');
var neo4j = require('../model/DAL/neo4j.js');

var entities = data.articles;
entities = entities.concat(data.authors);
entities = entities.concat(data.concepts);
entities = entities.concat(data.newspapers);

neo4j.query('Match (n) Optional Match (n)-[r]->() Delete n,r')
  .then(function() {
    return neo4j.create(entities, data.relations);
  })
  .then(function() {
    console.log('done');
  });

