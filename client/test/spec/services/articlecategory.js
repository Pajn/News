'use strict';

describe('Service: articleCategory', function () {

  // load the service's module
  beforeEach(module('newsApp'));

  // instantiate service
  var articleCategory;
  beforeEach(inject(function (_articleCategory_) {
    articleCategory = _articleCategory_;
  }));

  it('should do something', function () {
    expect(!!articleCategory).toBe(true);
  });

});
