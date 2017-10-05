const assert = require('assert')

describe('Challenge', function() {
  describe('runs tests', function() {
    it('assert.equal uses == coercion', function() {
      assert.equal(1, true)
    })

    it('assert.strictEqual uses ===', function() {
      assert.notStrictEqual(1, true)
    })
  })
})
