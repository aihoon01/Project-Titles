var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Test output of 5!', () => {
      //Setup
      const numa = 5;
      const expected = 120;
      //Exercise
      const result = Calculate.factorial(numa)
      //Verify
    assert.equal(result, expected);
    });
    it('Test output of input other than 5', () => {
      //Setup
      const numa = 6;
      const expected = 720;

      //Exercise
      const result = Calculate.factorial(numa);

      //Verify
      assert.equal(result, expected);
    });
    it('Test output for zero input', () => {
      //Setup
      const numa = 0;
      const expected = 1;

      //Exercise
      const result = Calculate.factorial(numa);
    });
  });
});