const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //Setup
      const expected = 'cock-a-doodle-doo!';

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.equal(actual, expected);

    });
  });
  describe('.timeAtDawn', () => {
    it('returns argument as a string', () => {
      
      //Setup
      const input = 9;
      const expected = '9';

      //Exercise
      const actual = Rooster.timeAtDawn(input);

      //Verify
      assert.equal(actual, expected);
    });
    
    it('throws an error if passed a number less than 0', () => {
      //Setup
      const input = -1
      const expected = RangeError
      
      //Exercise


      //Verify
      assert.throws(() => {
        Rooster.timeAtDawn(input);
        }, expected
      );

    })
  });
});
