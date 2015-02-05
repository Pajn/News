var defer = require('node-promise').defer;
var uuid = require('node-uuid');
var db = new (require('neo4j').GraphDatabase)('http://localhost:7474');

module.exports = {
  /**
   * @param {Array.<Entity>} entities Entities to match or insert
   * @param {Array.<Relation>} relations Relations to assert
   * @returns {Promise}
   */
  create: function (entities, relations) {
    var match = 'Match ';
    var create = 'Create ';
    var createUnique = 'Create Unique ';
    var placeholders = {};

    entities.forEach(function (entity, index) {
      entity.index = index;
      if (entity.id) {
        match += '(n' + index + ':' + entity.type + ' {id: {n' + index + '}.id}), ';
      } else {
        entity.id = uuid.v1();
        create += '(n' + index + ':' + entity.type + ' {n' + index + '}), ';
      }
      placeholders['n' + index] = entity;
    });

    relations.forEach(function (relation) {
      createUnique += '(n' + relation.start.index + ')-[:' + relation.label + ']->' +
                      '(n' + relation.end.index + '), ';
    });

    entities.forEach(function (entity) {
      delete entity.index;
    });

    match = match.substr(0, match.length - 2);
    create = create.substr(0, create.length - 2);
    createUnique = createUnique.substr(0, createUnique.length - 2);

    if (match.length < 6) {
      match = '';
    }
    if (create.length < 7) {
      create = '';
    }
    if (createUnique.length < 14) {
      createUnique = '';
    }

    console.log([match, create, createUnique].join(' '));

    var deferred = defer();

    if (!create && !merge) {
      deferred.resolve([]);
      return deferred.promise;
    }

    db.query([match, create, createUnique].join(' '), placeholders, function (err, data) {
      if (err) {
        deferred.reject(err);
      } else {
        deferred.resolve(data);
      }
    });

    return deferred.promise;
  },
   /**
   * @param {String} query Cypher query
   * @param {object} parameters Query parameters
   * @returns {Promise<Array>}
   */
  query: function(query, parameters) {
    var deferred = defer();

    db.query(query, parameters, function (err, data) {
      if (err) {
         deferred.reject(err);
      } else {
        data.map(function(row) {
          Object.keys(row).forEach(function(key) {
            // Suppress error if field is not a node value
            try {
              row[key] = row[key]._data.data;
            } catch (_) {}
          });
          return row;
        });
        deferred.resolve(data);
      }
    });

    return deferred.promise;
  },
  getArticles: function() {
    return this.query('Match (newspaper:Newspaper)<--(article:Article)-->(author:Author),' +
                            '(concept:Concept)<--(article)-->(scope:Scope) ' +
                      'Return article, author, newspaper, collect(concept) as concepts, scope ' +
                      'Order By article.rating DESC')
      .then(function(data) {
        return data.map(function(row) {
          row.concepts = row.concepts.map(function(concept) {
            return concept._data.data;
          });
          return row;
        });
      });
  },
  getRelatedArticles: function(id) {
    return this.query('Match (article)-[:Concept]->(concept:Concept)<-[:Concept]-(related:Article) ' +
                      'Where article.id = {id} ' +
                      'Return DISTINCT related, collect(concept) as concepts, count(concept) as score ' +
                      'Order By score DESC, related.rating DESC', {id: id})
      .then(function(data) {
        return data.map(function(row) {
          row.concepts = row.concepts.map(function(concept) {
            return concept._data.data;
          });
          return row;
        });
      });
  },
  getConcepts: function() {
    return this.query('Match (concept:Concept) Return concept');
  },
  getScopes: function() {
    return this.query('Match (scope:Scope) Return scope');
  },
  getAuthorArticles: function(id) {
    return this.query('Match (newspaper:Newspaper)<--(article:Article)-->(author:Author),' +
                            '(concept:Concept)<--(article)-->(scope:Scope) ' +
                      'Where author.id = {id}' +
                      'Return article, author, newspaper, collect(concept) as concepts, scope ' +
                      'Order By article.rating',
      {id: id})
      .then(function(data) {
        return data.map(function(row) {
          row.concepts = row.concepts.map(function(concept) {
            return concept._data.data;
          });
          return row;
        });
      });
  },
  rate: function(articleId, rating) {
    return this.query('Match (article:Article) ' +
                      'Where article.id = {id} ' +
                      'Set article.rating = article.rating + {rating}',
      {id: articleId, rating: rating});
  }
};
