'use strict';

const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {

  it('should return correct fizz-buzz term', function () {
    const normalCases = [
      { a: 15, expected: 'fizz-buzz' },
      { a: 5, expected: 'buzz' },
      { a: 3, expected: 'fizz' }
    ];
    normalCases.forEach(function (input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise error if argument is not a number', function() {
    const badInputs = ['a', '1', {}];
    badInputs.forEach( input => {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

});
