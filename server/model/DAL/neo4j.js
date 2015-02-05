var Promise = require('promise').Promise;
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
    var merge = '';
    var placeholders = [];

    entities.forEach(function (entity, index) {
      entity.index = index;
      if (entity.old) {
        match += '(n' + index + ':' + entity.type + ' {id: {n' + index + '}.id}), ';
      } else {
        create += '(n' + index + ':' + entity.type + ' {{n' + index + '}}), ';
      }
      placeholders['n' + index] = entity;
    });

    relations.forEach(function (relation) {
      merge += 'Merge (n' + relation.start.index + ')-[:' + relation.label + ']->' +
               '(n' + relation.end.index + ') ';
    });

    entities.forEach(function (entity) {
      delete entity.old;
      delete entity.index;
    });

    match = match.substr(0, match.length - 2);
    create = create.substr(0, create.length - 2);

    if (match.length < 6) {
    match = '';
    }
    if (create.length < 7) {
    create = '';
    }

    console.log([match, create, merge].join(' '));

    var promise = new Promise();

    if (!create && !merge) {
      promise.resolve([]);
    }

    db.query([match, create, merge].join(' '), placeholders, function (err, data) {
      if (err) promise.reject(err);
      promise.resolve(data);
    });

    return promise;
  },
};
