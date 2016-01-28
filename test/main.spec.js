var assert = require('assert'),
    main   = require('../main');

describe('Main', function () {
  describe(".dogNames()", function () {
    it('returns an array of just the names of the dogs', function () {
      var input = [
        { name: 'Fido'},
        { name: 'Snoopy'}
      ];
      var expected = ['Fido', 'Snoopy'];
      var actual = main.dogNames(input);
      assert.deepEqual(expected, actual);
    });

    it('returns an empty array if no input', function () {
      var expected = [];
      var actual = main.dogNames();
      assert.deepEqual(expected, actual);
    });
  });

  describe(".dogSize()", function () {
    var input;

    beforeEach(function () {
      input = [
        { name: 'Fido', size: 'small' },
        { name: 'Snoopy', size: 'medium' },
        { name: 'Clifford', size: 'large' },
        { name: 'Spot', size: 'large' }
      ];
    });

    it("it returns only the first small dog", function () {
      var expected = ['Fido'];
      var actual = main.dogSize(input, 'small');
      assert.deepEqual(expected, actual);
    });

    it("it returns only the first medium dog", function () {
      var expected = ['Snoopy'];
      var actual = main.dogSize(input, 'medium');
      assert.deepEqual(expected, actual);
    });

    it("it returns only the first large dog", function () {
      var expected = ['Clifford', 'Spot'];
      var actual = main.dogSize(input, 'large');
      assert.deepEqual(expected, actual);
    });
  });

  describe(".bySize()", function () {
    var input;
    
    beforeEach(function () {
      input = [
        { name: 'Fido', size: 'small' },
        { name: 'Snoopy', size: 'medium' },
        { name: 'Lassie', size: 'medium' },
        { name: 'Clifford', size: 'large' },
        { name: 'Spot', size: 'large' },
        { name: 'Fluffy', size: 'large' }
      ];
    });

    it('returns dogs by size', function () {
      var expected = {
        'small' : [ 'Fido' ],
        'medium' : [ 'Snoopy', 'Lassie' ],
        'large' : [ 'Clifford', 'Spot', 'Fluffy' ]
      };
      var actual   = main.bySize(input);
      assert.deepEqual(expected, actual);
    });
  });
});